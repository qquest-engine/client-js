import React from "react";
import './Filter.scss'
import search from '../../assets/images/icons/search.svg';
import CheckboxField from "../common/CheckboxField";

const Filter = props => {
	const {
		values,
		errors,
		onCheck,
	} = props;
	return (
		<div className="filters-block">
			<ul className="filters">
				<li>Все</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="auto"
						labelText="Автоквест"
						name="auto"
						value={values.auto}
						onChange={onCheck}
						checked={values.auto}
						error={errors.auto}
					/>
				</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="online"
						labelText="Онлайн"
						name="online"
						value={values.online}
						onChange={onCheck}
						checked={values.online}
						error={errors.online}
					/>
				</li>
				<li>
					<CheckboxField
						className="form-check-input"
						type="checkbox"
						id="photo"
						labelText="Фотоохота"
						name="photo"
						value={values.photo}
						onChange={onCheck}
						checked={values.photo}
						error={errors.photo}
					/>
				</li>
			</ul>
			<img src={search} />
		</div>
	);
};

export default Filter;