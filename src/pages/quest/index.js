import React from 'react';
import './quest.scss';
import CallApi from "../../api/api";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import photo from '../../assets/images/icons/photo.svg';
import auto from '../../assets/images/icons/auto.svg';
import online from '../../assets/images/icons/online.svg';

class Quest extends React.Component {
  constructor() {
    super();
    this.state = {
      quest: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id)
    CallApi.get(`/quests/${id}`)
    .then(resp => resp.json())
    .then(data => {
      console.log('quest', data)
      this.setState({
        quest: data
      });
    });
  }

  render() {
    const { quest } = this.state;
    const id = this.props.match.params.name;
        console.log(id, quest)
    let timestamp;
    let date;
    let time;    
    if (quest) {
      timestamp = new Date(quest.accessTime);
      date = timestamp.getDate() + '.' + (timestamp.getMonth() + 1) + '.' + timestamp.getFullYear();
      time = timestamp.getHours() + ':' + timestamp.getMinutes();      
    }

    return (
		        <div>
              { quest && 
                <div key={quest.id} className="col-6 mb-4">
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-top">
                      <div className="card-img">
                        <img
                          className="card-img-top card-img--height"
                          src={quest.imageLink}
                          alt=""
                        />
                      </div>
                      <div className="card-body">
                        <h1 className="card-title">{quest.name}</h1>
                        <div className="card-text">Дата проведения: {date || ''}</div>
                        <div className="card-text">Начало игры в: {time || ''}</div>
                        <div className="card-text">Автор: <Link to={`/quest/user/${quest.id}`}>{quest.author}</Link></div>
                        <div className="card-text">Тип: {quest.type}</div>
                        <div>
                          <img src={photo} className="" />
                          <img src={online} className="" />
                          <img src={auto} className="" />
                        </div>
                        <Button
                          type="button"
                          className="btn btn-primary m-2"
                          >
                          Вход в игру
                        </Button>
                      </div>
                    </div>
                    <h2>Описание:</h2>
                    <div className="card-text"> {quest.description}</div>
                    <h2>Необходимый минимум:</h2>
                  </div>
                </div>
              }
            </div>
    )
  }
}

export default Quest;