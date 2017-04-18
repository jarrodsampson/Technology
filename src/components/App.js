import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route // Link
} from 'react-router-dom'

import Home from './Home';
import Frameworks from './Frameworks';
import Chart from './Charts';
import NoMatch from './NoMatch';

class App extends Component {

  render() {
    return (
          <Router>
              <div>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/frameworks" component={Frameworks}/>
                      <Route exact path="/charts" component={Chart}/>
                      <Route component={NoMatch}/>
                  </Switch>
              </div>
          </Router>
    );
  }
}

export default App;
