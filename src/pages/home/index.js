import React from 'react';
import QuestItem from "../../components/QuestItem";

import './style.scss';

const quests = [
  {
    "description": "string",
    "difficulty": 0,
    "imageLink": "string",
    "isPublic": true,
    "name": "string1",
    "type": "AUTO"
  },
  {
    "description": "string",
    "difficulty": 0,
    "imageLink": "string",
    "isPublic": true,
    "name": "string2",
    "type": "AUTO"
  }
];

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      quests
    };
    // quests: []
  }

/*  componentDidMount() {
      CallApi.get("/games")
      .then(data => {
      	console.log(data);
        this.setState({
          quests: data
        });
      });
  }*/

  render() {
    const { quests } = this.state;
    return (
        <div className="home home__wrp" >
            <h1 className="home__title">Home pages</h1>
            <div>Количество квестов { quests.length }</div>
            { quests.map(quest => 
		      (
		        <div key={quest.name} className="col-6 mb-4">
		          <QuestItem item={quest} />
		        </div>
		      )
            ) }
        </div>
    )
  }
}

export default Home;