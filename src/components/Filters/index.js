import React from "react";
import './Filters.scss'
import CheckboxField from "../common/CheckboxField";

class Filters extends React.Component {
  render() {
  	const {types, onCheck, onViewAll} = this.props;
	return (
		<div className="filters-block">
			<ul className="filters">
				<li onClick={onViewAll}>Все</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="auto"
						labelText="Автоквест"
						name="auto"
						value={types.auto}
						onChange={onCheck}
						checked={types.auto}
					/>
				</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="online"
						labelText="Онлайн"
						name="online"
						value={types.online}
						onChange={onCheck}
						checked={types.online}
					/>
				</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="photo"
						labelText="Фотоохота"
						name="photo"
						value={types.photo}
						onChange={onCheck}
						checked={types.photo}
					/>
				</li>
			</ul>
		</div>
	);
  }
}

export default Filters;