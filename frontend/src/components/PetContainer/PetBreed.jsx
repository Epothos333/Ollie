import React from 'react';
import { func, string } from 'prop-types';

function PetBreed(props) {

	function onTextChange(event) {
		props.callback({ breed: event.target.value });
	}

	const visibility = props.name ? 'visible' : 'hidden';
	const style = {visibility};

	return (
		<div style={style}>
			<span>{props.name} is a </span>
			<input onChange={onTextChange} placeholder={'breed'}/>.

		</div>
	);
}

PetBreed.propTypes = {
	name: string,
	callback: func
};

export default PetBreed;