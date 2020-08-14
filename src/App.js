import React ,{Component} from 'react';

import './App.css';
import { CardList } from './Components/card_list/cardList.component';
import {SearchBox} from './Components/search_box/search_box.component'
class App extends Component{
  constructor(){
    super();
    this.state={
    monsters:[],
    searchField:''
      
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
  }
  
  render()
  {
    const {monsters,searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
        <div className="App">
          <header className="App-header">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder='search monster' 
             handlingEve={eve=>this.setState({searchField:eve.target.value})}></SearchBox>
            <CardList  monsters={filteredMonsters}>
            </CardList>
          </header>
        </div>
      );
    
  }
}

export default App;
