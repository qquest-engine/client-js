import React from 'react';
import './home.scss';
import QuestItem from "../../components/QuestItem";
import CallApi from "../../api/api";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      quests: []
  }}

  componentDidMount() {
    CallApi.get("/quests", {mode: 'cors'})
    .then(resp => resp.json())
    .then(data => {
      console.log('quests / home', data);
      this.setState({
        quests: data
      });
    });
  }
  
  render() {
    const { quests } = this.state;
    return (
            
            <div className="quests-block">
              <div className="quests">
              { quests.length && quests.map(quest => 
      		      (
      		        <div key={quest.id} className="col-6 mb-4 quest">
      		          <QuestItem item={quest} />
      		        </div>
      		      )
              )}
              </div>
              <div className="pagelister"> 1 2 3 ... 4 5 6 </div>
            </div>
    )
  }
}

export default Home;