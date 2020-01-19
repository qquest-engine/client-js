import React from 'react';
import './question.scss';
import CallApi from "../../api/api";


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
		        <div className="col-6 mb-4">
            {id}
		        </div>
    )
  }
}

export default Quest;