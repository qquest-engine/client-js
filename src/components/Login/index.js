import React from "react";
import Field from "../common/Field";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Login = props => {
	const {
		values,
		errors,
		onChange
	} = props;
	return (
		<div className=''>
			<Field
				id="email"
				labelText="Enter email"
				type="text"
				placeholder="Enter email"
				name="email"
				value={values.email}
				onChange={onChange}
				error={errors.email}
			/>
			<Field
				id="password"
				labelText="Enter password"
				type="password"
				placeholder="Enter password"
				name="password"
				value={values.password}
				onChange={onChange}
				error={errors.password}
			/>
			<Button
				type="button"
				className="btn btn-primary m-2"
				>
				Login
			</Button>
			<div>
				<Link to="/registration">Register</Link>
				<Link to="/forgot-pass">Forgot password?</Link>
			</div>
		</div>
	);
};

export default Login;