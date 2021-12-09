import react from 'react';
import './App.css';
import KK from './component/kk.js';
import {BrowserRouter as Route, Router, Link, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Link to = "/">Main</Link>
      </div>
      <Switch>
        <Route path="/">
          <KK/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
