import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router ,Switch, Route, Link } from "react-router-dom";
import ListTutorials from './Pages/ListTutorials';
import AddTutorials from './Pages/AddTutorials';
import EditTutorials from './Pages/EditTutorials'

function App() {
  return (
    <div>
      <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Learn
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      </Router>


      <div className="container mt-3">
        <Router>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={ListTutorials} />
          <Route exact path="/add" component={AddTutorials} />
          <Route path="/tutorials/:id" component={EditTutorials } />
        </Switch>
        </Router>


      </div>

    </div>

  );
}

export default App;
