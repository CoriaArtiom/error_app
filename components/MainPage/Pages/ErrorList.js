import React, { Component } from 'react';
import {Table, thead, tr, tbody, Container,Button, ButtonGroup, strong} from 'react-bootstrap';
import ErrorListOptions from './ErrorListOptions'

export default class ErrorList extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	errors:[],
	  	password:"",
	  };
	}

	/*handleClick = (e)=>{
		this.setState({error:error});
		console.log({error})
	}*/

	componentWillMount() {
		let errorList = JSON.parse(localStorage.getItem("errors"));
		for (let i=0; i<errorList.length; i++) {
			this.state.errors.push(errorList[i])
		}
	}

	decSort = (array) => {
		array.sort(this.compareNumeric);
		this.setState({errors:array.reverse()});
	}

	incSort = (array) => {
		this.setState({errors:array.sort(this.compareNumeric)});
	}

	compareNumeric = (a, b) => {
 		 return b.date-a.date;
	}

	render() {	
		const {errors} = this.state
		return (
			<Container>
			  <h1>
    			Список ошибок
  			  </h1>
  			  <strong>Сортировка по дате:     </strong>
  			  <ButtonGroup aria-label="Basic example">
				  <Button variant="secondary" onClick={() => this.incSort(errors)}>Сначала новые</Button>
				  <Button variant="secondary" onClick={() => this.decSort(errors)}>Сначала старые</Button>
				</ButtonGroup>
				<Table responsive>
				  <thead>
				    <tr>
				      <th>Статус</th>
				      <th>Описание</th>
				      <th>Серьезность</th>
				      <th>Приоритет</th>
				      <th>Пользователь</th>
				      <th>Дата</th>
				      <th></th>
				    </tr>
				  </thead>
				  <tbody>
				  {
					  errors.map((error)=>{
					    return(
					    	<ErrorListOptions 
							key = {error.id}
					    	error={error}/>)
						})
					}		
				  </tbody>
				</Table>
			</Container>
		);
	}
}