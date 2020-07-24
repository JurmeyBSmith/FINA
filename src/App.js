import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
import './App.css';
//import { Header, Segment } from 'semantic-ui-react'

//import {Menu} from 'semantic-ui-react';
// import Search from './Search.js';
// import createProfile from './createProfile.js';
// import Edit from './Edit.js';
import NavBar from './navBar.js';
import Home from './Home.js';
import newProfile from './newProfile.js';
import deleteProfile from './deleteProfile';

class App extends Component {
  state = {}
  handleItemClick = (e, {name}) => this.setState({activeItem: name }) 
  render() {
    //const { activeItem } = this.state
    return (

      <Router>
        <div>
          
        <NavBar />
          {/* <Route path="/" exact component={} /> */}
          <Switch>
          <Route path="/newProfile" exact component={newProfile} />
          <Route path="/deleteProfile" exact component={deleteProfile} />
          <Route path="/" component={Home} />
          </Switch>
          {/* <Route path="/users/" component={} /> */}
        </div>
        
        
      </Router>
      

      
      
    );
  }
}

export default App;
























// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
