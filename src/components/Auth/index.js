import React from 'react';
import { Link } from "react-router-dom";

import Login from "../Login"
import Registration from "../Registration"

import './Auth.scss' 


class Auth extends React.Component {

  constructor() {
    super();
    this.state = {
      values: {
        username: "",
        email: "",
        password: "",
        repeatPassword: ""  
      },
      errors: {
        username: false,
        email: false,
        password: false,
        repeatPassword: false
      }
  }}

  onChange = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    this.setState({
      values: newValues
    });
  };

  render() {
    return (
      <aside className="auth">
        <div> 
          Engine 
          <Login values={this.state.values} errors={this.state.errors} onChange={this.onChange} />
          <hr />
          <Registration values={this.state.values} errors={this.state.errors} onChange={this.onChange} />
        </div>
      </aside>
    )
  }
}

export default Auth;