import React, { Component } from 'react';
import {tr, td} from 'react-bootstrap';

export default class UserListOptions extends Component {

	constructor(props) {
	  super(props);
	
	}

	render() {	
		const {user} = this.props
		return (
			<tr>
		      <td>{user.login}</td>
		      <td>{user.name}</td>
		      <td>{user.familyname}</td>			      				      
			</tr>
		);
	}
}