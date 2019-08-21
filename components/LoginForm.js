import React, { Component } from 'react';
import {Button, Form, Alert, Container, Row, Col} from 'react-bootstrap';

export default class LoginForm extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nickname:"",
	  	password:"",
	  	error:"",
	  	show: false,
	  };
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		this.checkData(this.state.nickname, this.state.password)?
		this.props.setUser(this.state.nickname)
		:
		console.log(":c")
	}

	func = () => {
		return("{this.attachRef}")
	}

	handleChange = (e)=>{	
	    this.setState({
	      [e.target.id]: e.target.value
	    });
	    this.setState({show:false})
	}

	setError = (error)=>{
		this.setState({error})
	}

	checkData = (user, password) => {
		let currentUser = JSON.parse(localStorage.getItem("users")).find(user => user.login === this.state.nickname)
		if (currentUser){
			if (currentUser.password === this.state.password){
				this.setError("");
				return true
			} else {
				this.setError("неверный пароль")
				this.setState({show:true})
			}
		} else {
			this.setError("такого имени пользователя не существвует")
			this.setState({show:true})
		}
	}

	render() {	
		const { nickname, password, error, show } = this.state		
 		return (
			<Container>
			<Row className="justify-content-md-center">
			<Col xs lg="8">
			<h1>
    			Система учета ошибок
  			  </h1>
  			 <h3>
    			Авторизация
  			  </h3>
				<Form onSubmit={this.handleSubmit}>
				  <Form.Group>
				    <Form.Label>Логин</Form.Label>
				    <Form.Control 
				    	type="text" 						
				    	id="nickname"
						value={nickname}
						onChange={this.handleChange}
						placeholder={'Введите логин'}/>
				  </Form.Group>

				  <Form.Group>
				    <Form.Label>Пароль</Form.Label>
				    <Form.Control 		 
						type="password"
						id="password"
						value={password}
						onChange={this.handleChange}
						placeholder={'Введите пароль'}/>
				  </Form.Group>
				  <Alert show={show} variant='danger'>
					  {error ? error:null}
				  </Alert>
				  <Button variant="primary" type="submit">
				    Подтвердить
				  </Button>
				</Form>
				</Col>
				</Row>
			</Container>
		);
	}
}