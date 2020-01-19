import React from "react";
import Field from "../common/Field";
const Login = props => {
	const {
		values,
		errors,
		onChange
	} = props;
	return (
		<div className='step'>
			<Field
				id="email"
				labelText="email"
				type="text"
				placeholder="Enter email"
				name="email"
				value={values.email}
				onChange={onChange}
				error={errors.email}
			/>
			<Field
				id="password"
				labelText="password"
				type="password"
				placeholder="Enter password"
				name="password"
				value={values.password}
				onChange={onChange}
				error={errors.password}
			/>
			<button
				type="button"
				className="btn btn-primary m-2"
			>
				Login
			</button>
		</div>
	);
};

export default Login;