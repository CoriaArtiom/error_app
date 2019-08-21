import React, { Component } from 'react';
import {Table, thead, tr, tbody, td, Container, h1} from 'react-bootstrap';
import UserListOptions from './UserListOptions'

export default class UserList extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	users:[],
	  };
	}

	componentWillMount() {
		let userList = JSON.parse(localStorage.getItem("users"));
		for (let i=0; i<userList.length; i++) {
			this.state.users.push(userList[i])
		}
	}


	render() {	
		const {users} = this.state
		return (
			<Container>
			<h1>
    			Список пользователей
  			</h1>
				<Table responsive>
				  <thead>
				    <tr>
				      <th>Login</th>
				      <th>Имя</th>
				      <th>Фамилия</th>
				    </tr>
				  </thead>
				  <tbody>
				  {
					  users.map((user)=>{
					    return(
					    	<UserListOptions 
								key = { user.id }
						    	user={user}/>)
						})
					}	
				  </tbody>
				</Table>
			</Container>
		);
	}
}