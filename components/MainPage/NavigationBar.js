import React, { Component } from 'react';
import {Nav, Navbar, a} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class NavigationBar extends Component {
	
	constructor(props) {
	  super(props);

	}

	render() {	
		const {userparams} = this.props
		return (
			<Navbar bg="dark" variant="dark">
			  <LinkContainer to="/"><Navbar.Brand>Система учета ошибок</Navbar.Brand></LinkContainer>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <LinkContainer to="/errorlist/"><Nav.Link>Список ошибок</Nav.Link></LinkContainer>
			      <LinkContainer to="/newerrorpage/"><Nav.Link>Создать новую ошибку</Nav.Link></LinkContainer>
			      <LinkContainer to="/userlist/"><Nav.Link>Список пользователей</Nav.Link></LinkContainer>
 				  <LinkContainer to="/reguserpage/"><Nav.Link>Добавить пользователя</Nav.Link></LinkContainer>
			    </Nav>
			    <Nav>
			        <Navbar.Text>
      					Вы вошли как: <a>{userparams.name} {userparams.familyname}</a>
    				</Navbar.Text>
			       <LinkContainer to="/" onClick={this.props.logout}><Nav.Link>Выход</Nav.Link></LinkContainer>
				</Nav>
			  </Navbar.Collapse>		  
			</Navbar>
		);
	}
}