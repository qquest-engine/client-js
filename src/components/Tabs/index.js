import React from "react";
import './Tabs.scss'
class Tabs extends React.Component {
  render() {
	return (
		<div className="tabs">
			<div className="tabs__item" onClick={() => this.props.onTab('registration')}>Registration</div>
			<div className="tabs__item" onClick={() => this.props.onTab('login')}>Login</div>
		</div>
	);
  }
}

export default Tabs;