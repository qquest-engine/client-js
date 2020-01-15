import React from 'react';
import CallApi from "../../api/api";

import './style.scss';
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
      quest
    };
    // quest: null
  }

  componentDidMount() {
/*    const id = this.props.match.params.name;
    console.log(id)
    CallApi.get(`/quest/${id}`)
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
                      <div className="card-text">Сложность: {quest.difficulty}</div>
                      <div className="card-text">Публичность: {quest.isPublic}</div>
                      <div className="card-text">Тип: {quest.type}</div>
                      
                    </div>
                  </div>
                  <div className="card-text">Описание: {quest.description}</div>
                </div>
		        </div>
    )
  }
}

export default Quest;