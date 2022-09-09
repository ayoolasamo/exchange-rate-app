import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import React from 'react';
import { BrowserRouter as Router ,Route, Switch  } from 'react-router-dom';
import Transactions from './pages/transaction';
import {Insight } from './pages/insight';
import { Settings} from './pages/settings';
import {Sidebar} from './components/sidebar';
import { Home } from './pages/home';



function App() {
  return (
    <div className="App row">
      <Router>
      <Sidebar />
        <Switch>
          <Route  path='/' exact component={Home}></Route>
          <Route  path='/transaction' exact component={Transactions} />  
          <Route  path='/insight'  component={Insight} />
          <Route  path='/settings'  component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
