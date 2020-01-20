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
      }
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
        });
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

  render() {
  	const { values, errors } = this.state;
	return (
		<div className=''>
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
			<Field
				id="repeatPassword"
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
		</div>
	);
  }
}

export default Registration;