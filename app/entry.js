import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Featured
import Index from './views/Index';
import About from './views/About';
import Projects from './views/Projects';
import Resume from './views/Resume';
// import Stats from './views/Stats';

import NotFound from './views/NotFound';

// All CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      {/* <Route path='/stats' component={Stats} /> */}

      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
