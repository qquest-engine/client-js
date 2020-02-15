import React from 'react';
import './question.scss';
import CallApi from "../../api/api";
import Field from "../../components/common/Field";
import Button from "../../components/common/Button";

class Quest extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        email: "",
        password: "" 
      },
      errors: {
        email: false,
        password: false
      },
      statusFail: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id)
    CallApi.get(`/games/1/1/`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        quest: data
      });
      console.log('manage', this.state.quest)
    });
    
  }

  render() {
    const { quest } = this.state;
    const id = this.props.match.params.id;
    return (
		        <div className="col-6 mb-4">
            {quest && 
              <div>
                <h1>Boпрос N {quest.id}</h1>
                <div>{quest.text}</div>
              </div>
            }
		        </div>
    )
  }
}

export default Quest;