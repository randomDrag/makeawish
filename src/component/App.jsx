import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './Home';
import Login from './Register.card';
import Dashboard from './page/Dashboard';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/user" component={Dashboard}/>
      </Switch>
    </Router>
    
  );
}

export default App;
