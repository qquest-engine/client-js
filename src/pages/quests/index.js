import React from 'react';
import './quests.scss';
import QuestItem from "../../components/QuestItem";
import CallApi from "../../api/api";

class Home extends React.Component {
  render() {
    const { quests } = this.props;
    return (
          <div className="quests-block">
            {quests && <div className="quests">
                        { quests.length && quests.map(quest => 
                          (
                            <div key={quest.id} className="col-6 mb-4 quest">
                              <QuestItem item={quest} />
                            </div>
                          )
                        )}
                        
                        </div>
            }
            <div className="pagelister"> 1 2 3 ... 4 5 6 </div>
          </div>
    )
  }
}

export default Home;