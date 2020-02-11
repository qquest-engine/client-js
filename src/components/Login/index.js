import React from "react";
import Field from "../common/Field";
import Button from "../common/Button";
import { Link } from "react-router-dom";
import CallApi from "../../api/api";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        email: "",
        password: "" 
      },
      errors: {
        email: false,
        password: false
      },
      statusFail: null
  }}

  onChange = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    console.log('newValues', newValues);
    this.setState({
      values: newValues
    });
  };

  validateFields = () => {
    const errors = {};

    if (this.state.values.email === "") {
      errors.email = "Not empty";
    }

    if (this.state.values.password === "") {
      errors.password = "Not empty";
    }

    return errors;
  };

  onSubmit = () => {
  	const body = {
            'email': this.state.values.email,
            'password': this.state.values.password
          }
    console.log('body', body);
    CallApi.post("/auth", {
          body
        })
    .then(resp => resp.json())
    .then(token => {
      CallApi.setToken(token.jwt);
      return CallApi.get("/users", { headers: { authorization: `Bearer ${token.jwt}`}})
      .then(resp => resp.json())
      .then(resp => this.props.onLogin(resp))
    })
  };

  onLogin = () => {
    const errors = this.validateFields();
    console.log('errors', errors);
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      this.onSubmit();
    }
  };
  registrationAgain = () => {
    this.setState({
    statusFail: null,
      values: {
        email: "",
        password: ""
      },
      errors: {
        email: false,
        password: false
      },
  })
  }
  render() {
  	const { values, errors, statusFail } = this.state;
	return (
		<div className=''>
    { statusFail && 
      <div>
      <h1>{ statusFail }</h1>
      <button onClick={this.registrationAgain}>Спробувати ще раз</button>
      </div>
    }
    { !statusFail && 
    <div>
    <div>
      <Field
        id="email"
        labelText="Enter email"
        type="text"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={this.onChange}
        error={errors.email}
      />
      <Field
        id="password"
        labelText="Enter password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={this.onChange}
        error={errors.password}
      />
      <Button
        type="button"
        className="btn btn-primary m-2"
        onClick={this.onLogin}
        >
        Login
      </Button>
      </div> 
      <div>
        <b><a onClick={() => this.props.onTab('registration')}>Registration</a></b><br />
        <b><a onClick={() => this.props.onTab('forgotPass')}>Forgot password?</a></b>
      </div>
      </div>

    }
		</div>
	);
  }
}

export default Login;