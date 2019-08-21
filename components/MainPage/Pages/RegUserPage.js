import React, { Component } from 'react';
import {Form, Button, Container, Alert, h1} from 'react-bootstrap';
import { createUser }  from '../../../Factories'


export default class RegUserPage extends Component {

	constructor(props) {
	  super(props);

		this.state = {
			data:[],
		  	login:"",
		  	name:"",
		  	familyname:"",
		  	password:"",
		  	error:"",
		  	variant:"",
		  	show: false
		  };

	}

	handleSubmit = (e)=>{
		e.preventDefault();
		if(this.checkData(this.state.login, this.state.name, this.state.familyname, this.state.password)){
			this.state.data.push(createUser({login:this.state.login, name:this.state.name, familyname:this.state.familyname, password:this.state.password}))
			let currentData = JSON.parse(localStorage.getItem("users"))
			currentData.map((object)=>{
			this.state.data.push(object)
			})
			this.localStorageUpdate(this.state.data)
			this.setState({
				data: [],
				login: "",
				name: "",
				familyname:"",
				password:"",
				variant:"success",
				error:"Данные внесны",
				show: true
				});
		}
		else {
		console.log(":c")
		}
	}

	localStorageUpdate = (data) => {
		localStorage.setItem("users", JSON.stringify(data));
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

	checkData = (login, name, familyname, password) => {
		let currentUser = JSON.parse(localStorage.getItem("users")).find(user => user.login === this.state.login)
		if (currentUser){
				this.setError("такое имя пользователя уже существует");
				this.setState({show:true,
								variant:"danger"})
			} else {
				if(this.state.name) {
					if(this.state.familyname){
						if (this.state.password){
							this.setError("");
							return true
						} else {
							this.setError("Введите пароль");
							this.setState({show:true,
											variant:"danger"})
						}
					} else {
						this.setError("Введите фамилию");
						this.setState({show:true,
										variant:"danger"})
					}
				} else {
						this.setError("Введите имя");
						this.setState({show:true,
										variant:"danger"})				
				}
			}
		}


	render() {	
		
		const { login, name, familyname, password, error, show, variant} = this.state
		return (
			<Container>
			<h1>
    			Регистрация нового пользователя
  			</h1>
			<Form onSubmit={this.handleSubmit}>
			    <Form.Group>
			      <Form.Label>Имя для входа в систему (login)</Form.Label>
			      <Form.Control 				    	
				    	type="text" 						
				    	id="login"
						value={login}
						onChange={this.handleChange}
						placeholder={'Введите login'}/>
			    </Form.Group>

			  <Form.Group>
			    <Form.Label>Имя пользователя</Form.Label>
			      <Form.Control 			      		
				    	type="text" 						
				    	id="name"
						value={name}
						onChange={this.handleChange}
						placeholder={'Введите имя'}/>
			   </Form.Group>

				<Form.Group>
			    <Form.Label>Фамилия пользователя</Form.Label>
			      <Form.Control 			      		
				    	type="text" 						
				    	id="familyname"
						value={familyname}
						onChange={this.handleChange}
						placeholder={'Введите фамилию'}/>
			   </Form.Group>

			  <Form.Group>
			    <Form.Label>Пароль</Form.Label>
			      <Form.Control 			      		
				    	type="text" 						
				    	id="password"
						value={password}
						onChange={this.handleChange}
						placeholder={'Введите пароль'}/>
			   </Form.Group>
				  <Alert show={show} variant={variant}>
					  {error ? error:null}
				  </Alert>
			  <Button variant="primary" type="submit">
			    Подтвердить
			  </Button>
			</Form>
			</Container>
		);
	}
}