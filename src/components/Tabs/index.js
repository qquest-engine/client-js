import React from "react";
import './Tabs.scss'
class Tabs extends React.Component {
  render() {
	return (
		<div className="tabs">
			<ul>
				<li onClick={() => this.props.onTab('registration')}>Registration</li>
				<li onClick={() => this.props.onTab('login')}>Login</li>
			</ul>
		</div>
	);
  }
}

export default Tabs;