import React from "react";
import Field from "../common/Field";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Registration = props => {
	const {
		values,
		errors,
		onChange
	} = props;
	return (
		<div className=''>
			<Field
				id="username"
				labelText="Enter username"
				type="text"
				placeholder="Enter username"
				name="username"
				value={values.username}
				onChange={onChange}
				error={errors.username}
			/>
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
			<Field
				id="repeatPassword"
				labelText="Repeat password"
				type="password"
				placeholder="Repeat password"
				name="repeatPassword"
				value={values.repeatPassword}
				onChange={onChange}
				error={errors.repeatPassword}
			/>
			<Button
				type="button"
				className="button_dark"
				>
				Registration
			</Button>
			<div>Уже в деле? <Link>Login</Link></div>
		</div>
	);
};

export default Registration;