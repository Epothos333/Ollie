import React from 'react';
import { func, string } from 'prop-types';

function PetGender(props) {

	function onSelectChange(event) {
		props.callback({ neutered: event.target.value});
	}

	const visibility = props.gender ? 'visible' : 'hidden';
	const style = { visibility };

	return (
		<div style={style}>
			<span>{props.name} is </span>
			<select onChange={onSelectChange}>
				<option >--</option>
				<option value={true}>neautered</option>
				<option value={false}>not neatered</option>
			</select>.
		</div>
	);
}

PetGender.propTypes = {
	gender: string,
	callback: func,
	name: string
};

export default PetGender;