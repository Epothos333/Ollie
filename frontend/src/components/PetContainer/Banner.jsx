import React from 'react';
import { bool } from 'prop-types';

function PetBreed(props) {

	let content;

	if (props.saved) {
		content = (<h4>We have everything we need! You are done here.</h4>);
	} else if (props.saved === false) {
		content = (<h4>Looks like something went wrong. Did you fill out all of the forms?</h4>);
	}

	return (
		<div>
			<h1>Tell us about your dog!</h1>
			{content}
		</div>
	);
}

PetBreed.propTypes = {
	saved: bool
};

export default PetBreed;