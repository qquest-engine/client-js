import React from 'react';
import './home.scss';
import QuestItem from "../../components/QuestItem";
import CallApi from "../../api/api";
import Filters from "../../components/Filters";
import Search from "../../components/Search";

const initialTypes = {
  auto: false,
  online: false,
  photo: false
}
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      quests: [],
      isLogged: true,
      types: initialTypes,
      search: '',
      author: ''
  }}

  getQueryString = () => {
    let str = '';
    str+= 'type=';
    let arr = '';
    Object.entries(this.state.types).forEach(item => {
      if (item[1]) arr+= `${item[0]},`
    });
    if (arr.length) {str = str + arr; str = str.slice(0,-1);}

    str+= '&search=' + this.state.search;
    str+= '&author=' + this.state.author;
    console.log('get query string', str);
    return str;
  }

  componentDidMount = () => {
    let url = "/quests?" + this.getQueryString();
    CallApi.get(url, {mode: 'cors'})
    .then(resp => resp.json())
    .then(data => {
      console.log('quests / home', data);
      this.setState({
        quests: data
      });
    });
  }

  onCheck = event => {
    const newValues = {
      ...this.state.types,
      [event.target.name]: event.target.checked
    };
    console.log('newValues',newValues);
    this.setState({
      types: newValues
    });
    CallApi.get('/quests?' + this.getQueryString(), {
    }).then(resp => resp.json()).then(data => {console.log(data); 
          this.setState({
        quests: data
      });});
  };

  onChange = event => {
    this.setState({
      search: event.target.value
    });
    console.log('event.target.value', event.target.value);
  };

  onViewAll = event => {
    this.setState({
      types: initialTypes
    });
  };

  render() {
    const { quests } = this.state;
    return (
      <div>
        <Filters types={this.state.types} onCheck={this.onCheck} onViewAll={this.onViewAll}/>
        <Search search={this.state.search} onChange={this.onChange} />
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
          </div>  
    )
  }
}

export default Home;