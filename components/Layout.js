import React, { Component } from 'react';
import LoginForm from './LoginForm'
import MainPage from './MainPage/MainPage'
const uuidv4 = require('uuid/v4')

export default class Layout extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	userparams:null,
	  };
	}

	componentWillMount() {
		let admin = [			
			{
				login:"admin",
				name:"Артём",
				familyname:"Шаповалов",
				id:uuidv4(),
				password: "123"
			},
			{
				login:"Test",
				name:"Тест",
				familyname:"Тестов",
				id:uuidv4(),
				password: "qwe"
			}
		]

		let errors = [			
			{
				id:uuidv4(),
				date:Date.now(),
				short_desc:"Ошибка рендера DOM элементов",
				full_desc: "Ошибка рендера DOM элементов и еще пара слов для полноты",
				username:"admin",
				status: "Новая",
				seriousness: "Серьезная",
				priority: "Средний",
				history: [{
					date:Date.now(),
					action:"Ввод",
					comment:"Ошибка открыта",
					user:"admin"
				}]
			}
		]

		if (!localStorage.getItem("users")){
			localStorage.setItem("users", JSON.stringify(admin));
			localStorage.setItem("errors", JSON.stringify(errors));
		}
	}

	logout = ()=>{
		this.setState({userparams:null})

	}

	setUser = (user)=>{
		this.setState({userparams:user});
	}

	render() {
		const { userparams } = this.state
		return (
			<div>
				{
					!userparams ?	
					<LoginForm setUser={this.setUser}/>
					:
					<MainPage logout={this.logout} userparams={userparams}/>
				}
			</div>
		);
	}
}
