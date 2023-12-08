import axios from 'axios';
import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Register extends Component {


   submitRegistration = (e) => {
      // e.preDefault();
      // console.log(e);
      // console.log(e.target);
      // console.log(e.target.name.value);
      // console.log(e.target.email.value);
      // console.log(e.target.password.value);
      // console.log(e.target.conform_password.value);
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      };
      e.preventDefault();
      axios.post('/auth/register', data).then((response) => {
        
        localStorage.setItem('token', response.data.token)
        this.setState({
          loggedIn: true
        })
        this.props.setUser(response.data.user);

      }).catch((error) => {
        console.log(error);
      })
    }



  render() {

    const token = localStorage.getItem('token');

    console.log(token);
    if(token){
      return <Redirect to="/profile"/>
    }
    
    return (
      <div>
         <div class="row">
          <div class="jumbotron">
        <h1>Register</h1>
         <form  onSubmit={this.submitRegistration}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" name="name" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
              <input type="password" name="conform_password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
              {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
              {/* <label class="form-check-label" for="exampleCheck1">Check me out</label> */}
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            
          </form>
          <Link to="/login">Login</Link>
          </div>
          </div>
      </div>
    )
  }
}

export default Register