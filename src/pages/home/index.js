import React from 'react';
import QuestItem from "../../components/QuestItem";
import CallApi from "../../api/api";

import './style.scss';

const quests = [
  {
    "id": 1,
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/11/2019-rolls-royce-cullinan-side.jpg",
    "isPublic": true,
    "name": "string1",
    "type": "AUTO"
  },
  {
    "id": 2,
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/12/01-2018-cadillac-CTS-sedan-oem.jpg",
    "isPublic": true,
    "name": "string2",
    "type": "AUTO"
  },
  {
    "id": 3,
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/11/2019-rolls-royce-cullinan-side.jpg",
    "isPublic": true,
    "name": "string1",
    "type": "AUTO"
  },
  {
    "id": 4,
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/12/01-2018-cadillac-CTS-sedan-oem.jpg",
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
    //quests: []
  }

  componentDidMount() {
/*    CallApi.get("/quests", {mode: 'cors'})
    .then(data => {
    	console.log(data);
      this.setState({
        quests: data
      });
    });*/
  }

  render() {
    const { quests } = this.state;
    return (
        <div className="home home__wrp" >
            <div class="quests">
              { quests.map(quest => 
      		      (
      		        <div key={quest.name} className="col-6 mb-4 quest">
      		          <QuestItem item={quest} />
      		        </div>
      		      )
              )}
            </div>
        </div>
    )
  }
}

export default Home;