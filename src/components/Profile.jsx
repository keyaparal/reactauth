import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
class Profile extends Component {
  render() {

    let name;
    let email;
    if(this.props.user){
        name = this.props.user.name;
        email = this.props.user.email;
    }

    return (
      <div>
         <div class="row">
          <div class="jumbotron">
            <ul class="list-group">
              <li class="list-group-item">Name: {name}</li>
              <li class="list-group-item">Email: {email}</li>
              
          </ul>
          </div>
         </div>
       
      </div>
    )
  }
}

export default Profile