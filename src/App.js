import React, { Component } from 'react';
import './App.css';
import MainLogin from './components/MainLogin'
import MainSignUp from './components/MainSignUp'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Error404 from './error-pages/Error404'

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Switch> */}

        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
        <Route path='/signin' component={MainLogin} />
        <Route path='/signup' component={MainSignUp} />        

        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/error" component={Error404} />
        
        {/* </Switch> */}x        
      </Router>
    );
  }
}

export default App;