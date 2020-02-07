import React from 'react';
import { Link } from "react-router-dom";
import './QuestItem.scss'

class QuestItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="card quest" style={{ width: "100%" }}>
        <div className="img-wrapper">
          <div className="img-content">
            <img
              className="card-img-top card-img--height"
              src={item.imageLink}
              alt=""
            />
          </div>
          <div className="card-body">
            <div className={item.type}></div>            
            <div>
              <span className="card-text">{item.accessTime} | </span>
              <span className="card-text">19:00</span>
              <div className="card-title"><Link to={`/quest/${item.id}`}>{item.name}</Link></div>              
            </div>

          </div>          
        </div>

      </div>
    )
  }
}

export default QuestItem;
