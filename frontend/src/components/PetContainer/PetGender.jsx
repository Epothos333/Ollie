import React from 'react';
import { func, string } from 'prop-types';

function PetGender(props) {

	function onSelectChange(event) {
		props.callback({ gender: event.target.value});
	}

	const visibility = props.breed ? 'visible' : 'hidden';
	const style = { visibility };

	return (
		<div style={style}>
			<span>{props.name} is a</span>
			<select onChange={onSelectChange}>
				<option >--</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>.
		</div>
	);
}

PetGender.propTypes = {
	breed: string,
	callback: func,
	name: string
};

export default PetGender;