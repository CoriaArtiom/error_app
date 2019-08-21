import React, { Component } from 'react';
import {Form, Button, Col, Container, h1, Alert} from 'react-bootstrap';
import {createErrorProps}  from '../../../Factories'

export default class NewErrorPage extends Component {


	constructor(props) {
	  super(props);

	  this.state = {
	  	data:[],
	  	short_desc:"",
	  	full_desc:"",
	  	seriousness:"",
	  	priority: "",
	  	error:"",
	  	show:false,
	  	variant:""
	  };
	}

	localStorageUpdate = (data) => {
		localStorage.setItem("errors", JSON.stringify(data));
	}

	handleSubmit = (e)=>{
		const {data} = this.state
		e.preventDefault();
		if(this.checkData(this.state.short_desc, this.state.full_desc, this.state.seriousness, this.state.priority)){
		this.state.data.push(createErrorProps({short_desc:this.state.short_desc, full_desc:this.state.full_desc, username:this.props.userparams.login, status : "Новая", priority: this.state.priority, seriousness : this.state.seriousness, login:this.props.userparams.login}))
		let currentData = JSON.parse(localStorage.getItem("errors"))
		currentData.map((object)=>{
			this.state.data.push(object)
			})
		this.localStorageUpdate(this.state.data)
		this.setState({
				data: [],
			  	short_desc:"",
			  	full_desc:"",
			  	seriousness:"",
			  	priority: "",
			  	error:"Успешно!",
			  	show:true,
			  	variant:"success"
				});
		}
		else {
		console.log(":c")
		}
	}

	setError = (error)=>{
		this.setState({error})
	}

	handleChange = (e)=>{	
	    this.setState({
	      [e.target.id]: e.target.value
	    });
	    this.setState({show:false})
	}

	checkData = (short_desc, full_desc, seriousness, priority) => {
		if (short_desc){
			if (full_desc){
				if(seriousness){
					if(priority){
						this.setError("")
						return true
					} else {
						this.setError("Выберите приоритет")
						this.setState({
									show:true,
									variant:"danger"
									})
					}
				} else {
					this.setError("Выберите серьезность")
					this.setState({
								show:true,
								variant:"danger"
								})
				}
			} else {
				this.setError("Введите полное описание ошибки")
				this.setState({
							show:true,
							variant:"danger"
							})
			}
		} else {
			this.setError("Введите которкое описание ошибки")
			this.setState({
						show:true,
						variant:"danger"
						})
		}
	}

	render() {	
		const {short_desc, full_desc, seriousness, priority, show, error, variant} = this.state
		return (
			<Container>
			<h1>
    			Создание новой ошибки
  			  </h1>
			<Form onSubmit = {this.handleSubmit}>
			    <Form.Group>
			      <Form.Label>Короткое описание ошибки</Form.Label>
			      <Form.Control		    	
			      		type="text"
						id="short_desc"
						value={short_desc}
						onChange={this.handleChange}
						placeholder={'Введите краткое описание'}/>
			    </Form.Group>

			  <Form.Group>
			    <Form.Label>Полное описание ошибки</Form.Label>
			    <Form.Control as="textarea" rows="3" 						
			    		type="test"
						id="full_desc"
						value={full_desc}
						onChange={this.handleChange}
						placeholder={'Введите полное описание'}/>
			  </Form.Group>

			  <Form.Row>
			    <Form.Group as={Col}>
			      <Form.Label>Серьезность</Form.Label>
			      <Form.Control 
			      	as="select"
			      	id="seriousness"
					value={seriousness}
					onChange={this.handleChange}>
					<option></option>
			        <option>Серьезная</option>
			        <option>Значительная</option>
			        <option>Незначительная</option>
			        <option>Запрос на изменение</option>
			      </Form.Control>
				</Form.Group>

				<Form.Group as={Col}>
			    <Form.Label>Приоритет</Form.Label>
			      <Form.Control 
			      	as="select"
			      	id="priority"
					value={priority}
					onChange={this.handleChange}>
					<option></option>
			        <option>Очень высокий</option>
			        <option>Высокий</option>
			        <option>Средний</option>
			        <option>Низкий</option>
			      </Form.Control>
			  </Form.Group>
				</Form.Row>
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