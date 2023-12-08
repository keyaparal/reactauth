import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

class Forget extends Component {
  render() {
    return (
      <div>
         <div class="row">
         <div class="col-xs-3 col-xs-offset-9">
          <div class="jumbotron">
        <h1>Forget</h1>

        <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" class="btn btn-primary">Forgot</button>
            
          </form>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Forget