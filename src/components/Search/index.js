import React from "react";
import './Search.scss';
import searchImg from '../../assets/images/icons/search.svg';
import Field from "../common/Field";

class Search extends React.Component {
	constructor() {
		super();
		this.state = {
		};
	};

  render() {
  	const {search, onChange} = this.props;
	return (
		<div className="search">
			<img src={searchImg} />
			<Field
				id="search"
				labelText="Enter search str"
				type="text"
				placeholder="Enter search"
				name="search"
				value={this.state.search}
				onChange={onChange}
			/>
		</div>
	);
  }
}

export default Search;