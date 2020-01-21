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
        }).then(resp => console.log(resp)).then(token => CallApi.setToken(token));
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

  render() {
  	const { values, errors } = this.state;
	return (
		<div className=''>
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
	);
  }
}

export default Login;