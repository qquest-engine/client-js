import React from "react";
import './Sidebar.scss'
import { Link } from "react-router-dom";
import Auth from "../Auth";
import Navbar from "../Navbar";
import Tabs from "../Tabs";

class Sidebar extends React.Component {
  onActivate() {

  }
  render() {
  	const {isLogged, user, onLogin, onLogout} = this.props;
	return (
    <div className="sidebar">
      <Tabs onActivate={this.onActivate} />
      <Navbar isLogged={isLogged} user={user} />
      { !isLogged && <Auth onLogin={onLogin} onLogout={onLogout} />}
      
    </div>
	);
  }
}

export default Sidebar;