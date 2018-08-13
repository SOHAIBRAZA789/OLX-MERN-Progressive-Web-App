import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {

//   getData = () => {
//     console.log('Testing getData Function');
//     fetch('/')
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch(error => console.log('Not Working'))
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//           <button onClick={this.getData}>Click</button>

//         </p>
//       </div>
//     );
//   }
// }
class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }
  componentDidMount() {
    console.log('Testing getData Function');
    fetch('/users', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(users => {
        console.log(users);
        this.setState({ users })
      });
  }
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>user: {user.name} Password: {user.password}</div>
        )}
      </div>
    );
  }
}

export default App;

