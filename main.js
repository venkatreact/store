import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Search from './src/components/search.jsx';
import Pdform from './src/components/pdform.jsx';
import { Route, Link, BrowserRouter as Router,Switch} from 'react-router-dom';




const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ss">Users</Link>
        </li>
        <li>
          <Link to="/Pdform">Pdform</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/ss" component={Search} />
     
        <Route path="/Pdform" component={Pdform} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
