import React from "react";
import './Header.scss'
import Filters from "../Filters";
import Search from "../Search";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
  	const {types, search, onCheck, onChange, onSearch, onViewAll} = this.props;
	return (
      <header className="header">
        <Link to="/">
          <span className="logo1">Quest</span>&nbsp;<span className="logo2">Engine</span>
        </Link>      
        <Filters types={types} onCheck={onCheck} onViewAll={onViewAll}/>
        <Search search={search} onChange={onChange} onSearch={onSearch} />
      </header>
	);
  }
}

export default Header;