import React from 'react';
import './App.css';
import {CardList} from './component/card-list/card-list';
import {SearchBox} from './component/search-box/search-box';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:[],
      searchField:''
    }
  }
  onChangeSearch = (e) =>{
    this.setState({
      searchField:e.target.value
    })    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(
      response => response.json()      
    ).then(users => this.setState({monster:users}))
  }
  render(){
    const {monster,searchField} = this.state;
    const fileredConst = monster.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className="App">
        <h1>Mosters Rolodex</h1>
        <SearchBox placeholder='search moster' handlechange ={this.onChangeSearch} />        
        <CardList monster={fileredConst}></CardList>         
          </div>
    )
  }
}

export default App;
