import React from 'react';
import './home.scss';
import QuestItem from "../../components/QuestItem";
import CallApi from "../../api/api";

/*const quests = [
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
];*/

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      quests: []
  }}

  componentDidMount() {
    CallApi.get("/quests", {mode: 'cors'})
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
            
            <div className="quests">
              { quests.map(quest => 
      		      (
      		        <div key={quest.id} className="col-6 mb-4 quest">
      		          <QuestItem item={quest} />
                    
      		        </div>
      		      )
              )}
            </div>
    )
  }
}

export default Home;