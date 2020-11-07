import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './Home';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import PrivateRoute from './PrivateRoute';
import Welcome from './page/Welcome';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/user" component={Dashboard}/>
        <PrivateRoute path="/welcome" component={Welcome}/>
      </Switch>
    </Router>
    
  );
}

export default App;
