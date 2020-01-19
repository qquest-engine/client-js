import React from "react";
import './Header.scss'
import Filter from "../Filter";

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			values: {
				auto: true,
				online: false,
				photo: false
			},
			errors: {
				auto: false,
				online: false,
				photo: false
			},
		};
	};

	onCheck = event => {
		const newValues = {
			...this.state.values,
			[event.target.name]: event.target.checked
		};
		this.setState({
			values: newValues
		});
	};
  render() {
	return (
		<header className="header">
			<div className="logo1">Quest</div>
			<div className="logo2">Engine</div>
			<Filter values={this.state.values} errors={this.state.errors} onCheck={this.onCheck} />
		</header>
	);
  }
}

export default Header;