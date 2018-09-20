import React from 'react';
import {func} from 'prop-types';

function PetName(props) {

	function onTextChange(event) {
		props.callback({name: event.target.value});
	}

	return (
		<div>
			<span>My pet&apos;s name is </span>
			<input onChange={onTextChange}/>.
		</div>
	);
}

PetName.propTypes = {
	callback: func
};

export default PetName;