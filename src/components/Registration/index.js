import React from "react";
import Field from "../common/Field";
import Button from "../common/Button";
import CallApi from "../../api/api";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        username: "",
        email: "",
        password: "",
        repeatPassword: ""  
      },
      errors: {
        username: false,
        email: false,
        password: false,
        repeatPassword: false
      },
      statusSuccess: null,
      statusFail: null,
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

    if (this.state.values.username === "") {
      errors.username = "Not empty";
    }

    if (this.state.values.email === "") {
      errors.email = "Not empty";
    }

    if (this.state.values.password === "") {
      errors.password = "Not empty";
    }

    if (this.state.values.repeatPassword !== this.state.values.password) {
      errors.repeatPassword = "Passwords is not equal";
    }

    return errors;
  };

  onSubmit = () => {
  	const body = {
            'userName': this.state.values.username,
            'email': this.state.values.email,
            'password': this.state.values.password
          }
    console.log('body', body);
    CallApi.post("/users", {
          body
        })
    .then(data => {
      this.setState({statusSuccess: data.status});
    }).catch(error => this.setState({statusFail: error.status}));
  };

  onRegistration = e => {
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
    statusSuccess: null,
    statusFail: null,
      values: {
        username: "",
        email: "",
        password: "",
        repeatPassword: ""  
      },
      errors: {
        username: false,
        email: false,
        password: false,
        repeatPassword: false
      },
  })
  }

  render() {
  	const { values, errors, statusSuccess, statusFail } = this.state;
	return (
		<div className=''>
    { statusSuccess && 
      <h1>{ statusSuccess }</h1>
    }
    { statusFail && 
      <div>
      <h1>{ statusFail }</h1>
      <button onClick={this.registrationAgain}>Спробувати ще раз</button>
      </div>
    }
    { !statusSuccess && !statusFail && 
    <form onSubmit={this.onRegistration}>
      <Field
        id="username"
        labelText="Enter username"
        type="text"
        placeholder="Enter username"
        name="username"
        value={values.username}
        onChange={this.onChange}
        error={errors.username}
      />
      <Field
        id="email1"
        labelText="Enter email"
        type="text"
        placeholder="Enter email"
        name="email"
        value={values.email}
        onChange={this.onChange}
        error={errors.email}
      />
      <Field
        id="password1"
        labelText="Enter password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={values.password}
        onChange={this.onChange}
        error={errors.password}
      />
      <Field
        id="repeatPassword1"
        labelText="Repeat password"
        type="password"
        placeholder="Repeat password"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={this.onChange}
        error={errors.repeatPassword}
      />
      <Button
        type="submit"
        className="button_dark"
        
        >
        Registration
      </Button>
      <div>Уже в деле? <a>Login</a></div>
    </form> 
    }

		</div>
	);
  }
}

export default Registration;