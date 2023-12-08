import axios from 'axios';
import React, { Component } from 'react'
import {
  Link,Redirect
} from "react-router-dom";

class Login extends Component {

  State = {
    email: '',
    password: '',
    message: ''
  }
  

  sublitLogin =(e) => {
    
    const data = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    e.preventDefault();
    axios.post('/auth/login', data).then((response) => {
      //console.log(response.data.message);
      
      localStorage.setItem('token', response.data.token)
      this.setState({
        loggedIn: true,
        user: response.data,
        message: response.data.message
      })

      console.log("ss"+response.data.message);
      localStorage.setItem('mmm', response.data.message)
    }).catch((error) => {
      console.log("cache");
      console.log(error);
      console.log(error.message);
      localStorage.setItem('mmm', error.message)
    })
    console.log("dd"+this.state.message);
   
   
  }

  setUser = (user) => {
      this.setState({
          user: user,
          
      })
  };

 

  render() {
    // localStorage.setItem('token', '')
    const token = localStorage.getItem('token');
console.log("kkk"+localStorage.getItem('mmm'));
    let error = '';
    if(localStorage.getItem('mmm')){
      error = (
        <div>
          <div class="alert alert-danger" role="alert">
            {localStorage.getItem('mmm')}
          </div>
        </div>
      
      )
      //localStorage.setItem('mmm', '')
    }

    
    if(localStorage.getItem('token'))
    {
      return <Redirect to={'profile'}/>
    }     

    console.log(token);
    if(token){
      return <Redirect to="/profile" user={this.state.user} setState={this.setUser}/>
    }

    return (
      <div>
        <div class="row">
        <div class="col-md-3 col-xs-offset-9" margin="0 auto">
          <div class="jumbotron">
            <h1>Login</h1>
            {error}
            <form onSubmit={this.sublitLogin}>
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" required onChange={(e)=>{
                  this.setState({email: e.target.value})
                }}/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" required onChange={(e)=>{
                  this.setState({password: e.target.value})
                }}/>
              </div>
              <div class="mb-3 form-check">
                {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              
            </form>
            <Link to="/forget">Forgot Password</Link>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Login