import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      Monsters:[
        {
          name: 'jamel',
          id: '1'
        },
        {
          name: 'Bchira',
          id: '2'
        },
        {
          name: 'Matri',
          id: '3'
        }
      ]

    };
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ Monsters: users}))
  }

  render(){
    return (
      <div className="App">
        <CardList Monsters={this.state.Monsters}>
        
        </CardList>
        
    </div>
    )
  }

}

export default App;
