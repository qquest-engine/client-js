import React from 'react';
import { Link } from "react-router-dom";

import Login from "../Login"
import Registration from "../Registration"
import ForgotPass from "../ForgotPass"

import './Auth.scss' 


class Auth extends React.Component {

  constructor() {
    super();
    this.state = {
      registration: true,
      login: true,
      intro: false,
  }}

  render() {
    return (
      <aside className="auth">
        <div> 
          { this.props.activeTab === 'login' && <Login values={this.state.values} errors={this.state.errors} onTab={this.props.onTab} />}
          { this.props.activeTab === 'forgotPass' && <ForgotPass values={this.state.values} errors={this.state.errors} onTab={this.props.onTab} />}
          { this.props.activeTab === 'registration' && <Registration values={this.state.values} errors={this.state.errors} onChange={this.onChange} onTab={this.props.onTab} />}
          { this.props.activeTab === 'info' && 
            <div>
              <p><b>Квест</b> – это интеллектуальное развлечение как для небольшой компании (а возможно и одного человека), так и большого количества игроков.</p>
              <p>Маленькое приключение, требующее от игрока решения умственных задач для продвижения по сюжету. Цель решения задач - найти код, который позволит перейти к следующему заданию.</p>
              <p><b>QuestEngine</b> - это интернет-сервис, который позволяет вам как проходить уже существующие квесты, так и создавать свои собственные.</p>

            </div>
          }
        </div>
      </aside>
    )
  }
}

export default Auth;