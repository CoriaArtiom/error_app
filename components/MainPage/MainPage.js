import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import ErrorList from './Pages/ErrorList'
import NewErrorPage from './Pages/NewErrorPage'
import RegUserPage from './Pages/RegUserPage'
import UserList from './Pages/UserList'
import ErrorInfo from './Pages/ErrorInfo'
import Main from './Pages/Main'

export default class MainPage extends Component {

	constructor(props) {
	  super(props);

	  	  
	  this.state = {
	  	userdata:null,
	  };
	}

	componentWillMount() {

		const {userdata} = this.state
		let currentUser = JSON.parse(localStorage.getItem("users")).find(user => user.login === this.props.userparams)
		this.setState({userdata:currentUser});
	}


	render() {	
		const { userdata } = this.state
		return (
			<div className = "mh-100">
		    	<Router>
		    	<NavigationBar logout={this.props.logout} userparams={userdata}/>
		    	  <Route exact path='/' component={Main} />
		          <Route exact path='/errorlist' component={ErrorList} />
		          <Route exact path='/newerrorpage' render={()=><NewErrorPage userparams={userdata}/>}/>
		          <Route exact path='/reguserpage' component={RegUserPage} />
		          <Route exact path='/userlist' component={UserList} />
		          <Route path='/errorlist/:errorId' render={(props)=><ErrorInfo userparams={userdata} {...props}/>}/>
		        </Router>
			</div>
		);
	}
}