import React from "react";
import Field from "../common/Field";
const Registration = props => {
	const {
		values,
		errors,
		onChange
	} = props;
	return (
		<div className='step'>
			<Field
				id="username"
				labelText="username"
				type="text"
				placeholder="Enter username"
				name="username"
				value={values.username}
				onChange={onChange}
				error={errors.username}
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
				Registration
			</button>
		</div>
	);
};

export default Registration;