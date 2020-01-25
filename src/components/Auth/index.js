import React from 'react';
import { Link } from "react-router-dom";

import Login from "../Login"
import Registration from "../Registration"

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
          { this.state.login && <Login values={this.state.values} errors={this.state.errors}  onLoginOuter={this.props.onLoginInner} />}
          <hr />
          { this.state.registration && <Registration values={this.state.values} errors={this.state.errors} onChange={this.onChange} />}
          { this.state.intro && 
            <div>
              <p>Последний раз её видели в г. Харькове, информация обновляется. За пределы Харьковской области собака вряд ли выбегала. Рассчитываем, что собака найдется за 12 часов. Предполагаемая длина поискового маршрута - 200 км.</p>
              <p>Старт поисковой операции - в черте города, строго в 19:00. Предстартовый брифинг начнётся в 18:30. Место предстартового брифинга - парковка супермаркета "Класс" по координатам: 50.034818, 36.219352</p>
              <p>Финиш поисковой операции в 40 км от Харькова, у воды. Планируется костер, каша, сосиски, и тд. Желающим имеет смысл взять купательные принадлежности (во время поисковой операции в них необходимости нет).</p>
              <p>Для оперативного информирования во время поисковой операции создан телеграм канал. Принять участие в поисковой операции смогут 20 экипажей.</p>

            </div>
          }
        </div>
      </aside>
    )
  }
}

export default Auth;