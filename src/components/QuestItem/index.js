import React from 'react';
import { Link } from "react-router-dom";

class QuestItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card" style={{ width: "100%" }}>
        <img
          className="card-img-top card-img--height"
          src={item.imageLink}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title"><Link to={`/quest/${item.name}`}>{item.name}</Link></h6>
          <div className="card-text">Сложность: {item.difficulty}</div>
          <div className="card-text">Публичность: {item.isPublic}</div>
          <div className="card-text">Тип: {item.type}</div>
          <div className="card-text">Описание: {item.description}</div>
        </div>
      </div>
    )
  }
}

export default QuestItem;
