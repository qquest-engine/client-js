import React from 'react';
import './quest.scss';
import CallApi from "../../api/api";
import Button from "../../components/QButton/QButton";
import { Link } from "react-router-dom";

/*{
  "accessTime": 0,
  "author": 0,
  "description": "string",
  "id": 0,
  "imageLink": "string",
  "isPublic": true,
  "name": "string",
  "type": "AUTO"
}*/



const quest =
  {
    "id": 1,
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/11/2019-rolls-royce-cullinan-side.jpg",
    "isPublic": true,
    "name": "string1",
    "type": "AUTO"
  }
class Quest extends React.Component {
  constructor() {
    super();
    this.state = {
      quest: null
    };
    // quest
  }

  componentDidMount() {
    const id = this.props.match.params.name;
    console.log(id)
    CallApi.get(`/quests/${id}`)
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
                        <div className="card-text">Время начала: {quest.accessTime}</div>
                        <div className="card-text">Автор: {quest.author}</div>
                        <div className="card-text">Публичность: {quest.isPublic}</div>
                        <div className="card-text">Тип: {quest.type}</div>
                        <Link to='/question'>Начать игру</Link>
                      </div>
                    </div>
                    <div className="card-text">Описание: {quest.description}</div>
                  </div>
                </div>
              }
            </div>
    )
  }
}

export default Quest;