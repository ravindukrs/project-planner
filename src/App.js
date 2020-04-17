import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/project/:id' component={ProjectDetails}/>
              <Route exact path='/signin' component={SignIn}/>
              <Route exact path='/signUp' component={SignUp}/>
              <Route exact path='/create' component={CreateProject}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

