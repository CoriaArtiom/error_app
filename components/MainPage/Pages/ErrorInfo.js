import React, { Component } from 'react';
import {Table, thead, tr, td, Container, Button, h1, p, strong, Accordion, Card, Form, Alert} from 'react-bootstrap';
import {getTime, createErrorHistory}  from '../../../Factories'

export default class ErrorInfo extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
		  	data:[],
		  	errorInfo:"",
		  	error:"",
		  	status:"",
		  	comment:"",
		  	variant:"",
		  	show:false
		  };
	}

	setError = (error)=>{
		this.setState({error})
	}

	componentWillMount() {
		let errorById = JSON.parse(localStorage.getItem("errors")).find(error => error.id === this.props.match.params.errorId)
		this.setState({errorInfo: errorById})
	}

	handleChange = (e)=>{	
	    this.setState({
	    	[e.target.id]: e.target.value
	    });
	    this.setState({show:false})
	}

	accordance = (data) => {
		let dictionary = ["Открытая", "Решенная", "Закрытая"];
		let sec_dictionary = ["Открытие", "Решение", "Закрытие"];
		console.log(data);
		return data = sec_dictionary[dictionary.indexOf(data)]
	}

	checkData = (status, comment) => {
		if (status){
			if (comment){
				this.setError("");
				return true
			} else {
				this.setError("Заполнение комментария обязательно")
				this.setState({show:true, variant:"danger"})
			}
		} else {
			this.setError("Подтвердите изменение статуса")
			this.setState({show:true, variant:"danger"})
		}
	}

	handleSubmit  = (e)=>{
		e.preventDefault();
		if(this.checkData(this.state.status, this.state.comment)){
			this.state.data.push(createErrorHistory({action:this.accordance(this.state.status), comment:this.state.comment, user:this.props.userparams.login}))
			let currentData = JSON.parse(localStorage.getItem("errors"))
			let currentError = currentData.find(errorId => errorId.id === this.props.match.params.errorId)
			currentError.status = this.state.status;
			let index = currentData.indexOf(currentError);

			if (index !== -1) {
				 currentError.history.push(this.state.data[0])
   				 currentData[index] = currentError;
   				 localStorage.setItem("errors", JSON.stringify(currentData));
   				 let errorById = JSON.parse(localStorage.getItem("errors")).find(error => error.id === this.props.match.params.errorId)
   				 this.setState({errorInfo: errorById})
			}
			this.setState({
				  	data:[],
				  	error:"Успешно!",
				  	status:"",
				  	comment:"",
				  	variant:"success",
				  	show:true	 
				});
		}
		else {
			console.log(":c")
		}
	}


	render() {	
		const {errorInfo, status, comment, error, variant, show} = this.state
		let content = null;
		switch (errorInfo.status) {
		case "Новая":
			content = <Accordion>
						<Card>
						    <Card.Header>
						    	<Accordion.Toggle as={Button} variant="link" eventKey="0">
						        	Изменение статуса ошибки
						    	</Accordion.Toggle>
						    </Card.Header>
						    <Accordion.Collapse eventKey="0">
						    	<Card.Body>
									<Form onSubmit = {this.handleSubmit}>
								    	<Form.Group>
									        <Form.Label>Статус</Form.Label>
									        <Form.Control 
										      	as="select"
										      	id="status"
												value={status}
												onChange={this.handleChange}>
											<option></option>
									        <option>Открытая</option>
								            </Form.Control>
								    	</Form.Group>
								    	<Form.Group>
									        <Form.Label>Короткое описание ошибки</Form.Label>
										        <Form.Control		    	
										      		type="text"
													id="comment"
													value={comment}
													onChange={this.handleChange}
													placeholder={'Оставьте комментарий об изменении'}/>
								    	</Form.Group>
									  	<Button variant="primary" type="submit">
									    	Изменить
									  	</Button>
								</Form>
						      </Card.Body>
						    </Accordion.Collapse>
						</Card>
							<Alert show={show} variant={variant}>
								{error ? error:null}
						  	</Alert>
					 </Accordion>
			break;
			case "Открытая": 
			content = <Accordion>
						<Card>
						    <Card.Header>
						    	<Accordion.Toggle as={Button} variant="link" eventKey="0">
						        	Изменение статуса ошибки
						    	</Accordion.Toggle>
						    </Card.Header>
						    <Accordion.Collapse eventKey="0">
						    	<Card.Body>
									<Form onSubmit = {this.handleSubmit}>
								    	<Form.Group>
									        <Form.Label>Статус</Form.Label>
									        <Form.Control 
										      	as="select"
										      	id="status"
												value={status}
												onChange={this.handleChange}>
											<option></option>
											<option>Решенная</option>
								            </Form.Control>
								    	</Form.Group>
								    	<Form.Group>
									        <Form.Label>Короткое описание ошибки</Form.Label>
										        <Form.Control		    	
										      		type="text"
													id="comment"
													value={comment}
													onChange={this.handleChange}
													placeholder={'Оставьте комментарий об изменении'}/>
								    	</Form.Group>
									  	<Button variant="primary" type="submit">
									    	Изменить
									  	</Button>
								</Form>
						      </Card.Body>
						    </Accordion.Collapse>
						</Card>
							<Alert show={show} variant={variant}>
								{error ? error:null}
						  	</Alert>
					 </Accordion>
			break;
			case "Решенная":
				content = <Accordion>
						<Card>
						    <Card.Header>
						    	<Accordion.Toggle as={Button} variant="link" eventKey="0">
						        	Изменение статуса ошибки
						    	</Accordion.Toggle>
						    </Card.Header>
						    <Accordion.Collapse eventKey="0">
						    	<Card.Body>
									<Form onSubmit = {this.handleSubmit}>
								    	<Form.Group>
									        <Form.Label>Статус</Form.Label>
									        <Form.Control 
										      	as="select"
										      	id="status"
												value={status}
												onChange={this.handleChange}>
											<option></option>
											<option>Открытая</option>
											<option>Закрытая</option>
								            </Form.Control>
								    	</Form.Group>
								    	<Form.Group>
									        <Form.Label>Короткое описание ошибки</Form.Label>
										        <Form.Control		    	
										      		type="text"
													id="comment"
													value={comment}
													onChange={this.handleChange}
													placeholder={'Оставьте комментарий об изменении'}/>
								    	</Form.Group>
									  	<Button variant="primary" type="submit">
									    	Изменить
									  	</Button>
								</Form>
						      </Card.Body>
						    </Accordion.Collapse>
						</Card>
							<Alert show={show} variant={variant}>
								{error ? error:null}
						  	</Alert>
					 </Accordion>
				break;
				case "Закрытая":
				content = <Alert variant='success'>
						 	Ошибка закрыта, изменение статуса невозможно
				  		 </Alert>
				break;
			}

		return (
			<Container>
			    <h1>
    				Описание ошибки
  			    </h1>
  			  	<p><strong>Id: </strong>{errorInfo.id}</p>
  			  	<p><strong>Пользователь: </strong>{errorInfo.username}</p>
  			  	<p><strong>Описание: </strong>{errorInfo.short_desc}</p>
  			  	<p><strong>Полное описание: </strong>{errorInfo.full_desc}</p>
  			  	<p><strong>Серьезность: </strong>{errorInfo.seriousness}</p>
  			  	<p><strong>Приоритет: </strong>{errorInfo.priority}</p>
  			  	<p><strong>Статус: </strong>{errorInfo.status}</p>
  			  	{content}
  			  
  			  	<h3>История изменений ошибки</h3>
					<Table responsive>
				  		<thead>
				    	<tr>
					      	<th>Дата</th>
					     	<th>Действие</th>
					      	<th>Комментарий</th>
					      	<th>Пользователь</th>
				    	</tr>
					  	{
						errorInfo.history.map((history)=>{
						    return(
						    	<tr>
						  		  	<td>{getTime(new Date(history.date))}</td>
							      	<td>{history.action}</td>
							      	<td>{history.comment}</td>
							      	<td>{history.user}</td>		      				      
								</tr>)
							})
						}	
				  		</thead>
					</Table>
			</Container>
		);
	}
}