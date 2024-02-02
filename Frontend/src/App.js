import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './TaskList';
import TaskEdit from "./TaskEdit";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/api/tasks' exact={true} component={TaskList} />
          <Route path='/api/tasks/:id' component={TaskEdit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
