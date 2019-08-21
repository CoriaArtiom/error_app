import React, { Component } from 'react';
import {tr, td} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {getTime}  from '../../../Factories'

export default class ErrorListOptions extends Component {

	constructor(props) {
	  super(props);
	
	}

	render() {	
		const {error} = this.props
		return (
			<tr>
		      <td>{error.status}</td>
		      <td>{error.short_desc}</td>
		      <td>{error.seriousness}</td>
		      <td>{error.priority}</td>
		      <td>{error.username}</td>
		      <td>{getTime(new Date(error.date))}</td>	
		      <td><Link to={error.id}>
			    редактировать
			  </Link></td>			      				      
			</tr>
		);
	}
}