import React from 'react';
import CallApi from "../../api/api";

import './style.scss';
const quest =
  {
    "description": "string",
    "difficulty": 0,
    "imageLink": "string",
    "isPublic": true,
    "name": "string1",
    "type": "AUTO"
  }
class Quest extends React.Component {
  constructor() {
    super();
    this.state = {
      quest
    };
    // quest: null
  }

  componentDidMount() {
      const id = this.props.match.params.name;
      console.log(id)
/*      CallApi.get(`/quest/${id}`)
      .then(data => {
        this.setState({
          quest: data
        });
      });*/
  }

  render() {
    const { quest } = this.state;
    const id = this.props.match.params.name;
    return (
		        <div key={quest.name} className="col-6 mb-4">
                <p>Router param { id }</p>
                <div className="card" style={{ width: "100%" }}>
                  <img
                    className="card-img-top card-img--height"
                    src={quest.imageLink}
                    alt=""
                  />
                  <div className="card-body">
                    <h6 className="card-title">{quest.name}</h6>
                    <div className="card-text">Сложность: {quest.difficulty}</div>
                    <div className="card-text">Публичность: {quest.isPublic}</div>
                    <div className="card-text">Тип: {quest.type}</div>
                    <div className="card-text">Описание: {quest.description}</div>
                  </div>
                </div>
		        </div>
    )
  }
}

export default Quest;