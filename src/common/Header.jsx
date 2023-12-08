import React from "react";
import Nav from './Nav';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Forget from '../components/Forget';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
class Header extends React.Component {

    state = {
        user:{}
    }
    componentDidMount(){
        //login user
        console.log('componentDidMount');
        // axios.get('/user').then((response) => {

        axios.get('/user', {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')  
            }
          }).then((response) => {

            //console.log(response.data);
            this.setState({
                user: response.data
            })
            
          }).catch((error) => {
            console.log(error);
          })


    }
    setUser = (user) => {
        this.setState({
            user: user
        })
    };
  render() {
    return (
        <Router>
            <div>
            <Nav user={this.state.user} setState={this.setUser}/>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/profile">
                        <Profile user={this.state.user} />
                    </Route>
                    <Route path="/forget">
                        <Forget />
                    </Route>
                </Switch>
            </div>
        </Router>
       
    );
  }
}

export default Header;