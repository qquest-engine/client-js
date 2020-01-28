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
    .then(token => {console.log('token',token); CallApi.setToken(token.jwt);})
    .then(token => {
      return CallApi.get("/users")
      .then(resp => resp.json())
      .then(user => this.props.onLoginOuter(user))   
    })
    .catch(error => this.setState({
      statusFail: error.status,
      values: {
        email: "",
        password: "" 
      },
      errors: {
        email: false,
        password: false
      },
    }))
/*    .then(
      CallApi.get("/user")
    .then(resp => resp.json())
    .then(user => {console.log('user',user)}));*/
  };

  onLogin = e => {
    e.preventDefault();
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
    <form onSubmit={this.onLogin}>
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
        type="submit"
        className="btn btn-primary m-2"
        >
        Login
      </Button>
      </form> 
      <div>
        <Link to="/registration">Register</Link>
        <Link to="/forgot-pass">Forgot password?</Link>
      </div>
      </div>
    }
    }
		</div>
	);
  }
}

export default Login;