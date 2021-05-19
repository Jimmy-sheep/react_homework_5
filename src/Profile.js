import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			avatarUrl: '',
			name: '',
			login: '',
			bio: '',
			type: '',
			locate: '',
			email: '',
			blog: ''
		}
	}
	componentDidMount() {
		$.get(this.props.source, (result) => {
			const data = result;
			if (data) {
				this.setState({
					avatarUrl: data.avatarUrl,
					name: data.name,
					login: data.login,
					bio: data.bio,
					locate: data.location,
					email: data.email,
					blog: data.blog
				});
			}
		});
	}
	render() {
		return (
			<div>
				<img src={this.state.avatarUrl}></img>
				<h2>Name: {this.state.name}</h2>
				<h5>Id: {this.state.login}</h5>
				<p>Bio: {this.state.bio}</p>
				<h3>Location: {this.state.locate}</h3>
				<h3>E-mail: {this.state.email}</h3>
				<h3>Blog: {this.state.blog}</h3>
			</div>
		);
	}
}
export default Profile;