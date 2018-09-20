import React from 'react';
import PetName from './PetName.jsx';
import PetBreed from './PetBreed.jsx';
import PetGender from './PetGender.jsx';
import PetSpay from './PetSpay.jsx';
import SaveButton from './SaveButton.jsx';
import Banner from './Banner.jsx';

class PetContainer extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	updaetStateFromCallback(keyValuePair) {
		this.setState(keyValuePair);
	}

	setSaveStatus(status) {
		this.setState({ saved: status });
	}

	render() {
		return (
			<div>
				<Banner saved={this.state.saved}/>
				<form onSubmit={e => { e.preventDefault(); }}>
					<PetName callback={(name) => { this.updaetStateFromCallback(name); }} />
					<PetBreed name={this.state.name} callback={(breed) => { this.updaetStateFromCallback(breed); }} />
					<PetGender name={this.state.name} breed={this.state.breed} callback={(gender) => { this.updaetStateFromCallback(gender); }} />
					<PetSpay name={this.state.name} gender={this.state.gender} callback={(spay) => { this.updaetStateFromCallback(spay); }} />
					<SaveButton data={this.state} callback={(saved) => this.setSaveStatus(saved)} />
				</form>
			</div>
		);
	}
}

export default PetContainer;