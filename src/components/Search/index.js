import React from "react";
import './Search.scss';
import searchImg from '../../assets/images/icons/search.svg';
import Field from "../common/Field";

class Search extends React.Component {
  render() {
  	const {search, onChange, onSearch} = this.props;
	return (
		<div className="search">
			<Field
				id="search"
				labelText=""
				type="text"
				placeholder="Enter search"
				name="search"
				value={search}
				onChange={onChange}
			/>
			<a onClick={onSearch}>&nbsp;<img src={searchImg} style={{height: 20+'px'}} /></a>			
		</div>
	);
  }
}

export default Search;