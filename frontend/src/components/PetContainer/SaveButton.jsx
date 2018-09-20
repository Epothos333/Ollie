import React from 'react';
import axios from 'axios';
import {object, func} from 'prop-types';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function PetGender(props) {

	function saveDog() {
		axios.post('api/pets/', props.data)
		.then(() => {
			props.callback(true);
		}).catch(() => {
			props.callback(false);
		});
	}

	return (
		<button onClick={saveDog}>Save!</button>
	);
}

PetGender.propTypes = {
	data: object,
	callback: func,
	errorCallback: func
};

export default PetGender; 