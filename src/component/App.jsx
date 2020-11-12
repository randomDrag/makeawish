import React from 'react' ;
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './Home';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import PrivateRoute from './PrivateRoute';
import Welcome from './page/Welcome';

import NotFound from './page/Notfound';
import FAQ from './page/FAQ';
import Adminreg from './page/Admin.reg';
import Adminlogin from './page/Admin.login';
import AdminRoute from './AdminRoute';
import AdminDB from './page/Admin.db';

function App() {
  return (

    <Router>
      <Switch>
      
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/FAQ" component={FAQ}/>
        <Route path="/AR" component={Adminreg}/>
        <Route path="/AAL" component={Adminlogin}/>
        <PrivateRoute path="/user" component={Dashboard}/>
        <PrivateRoute path="/welcome" component={Welcome}/>
        <AdminRoute path="/admindb" component={AdminDB}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
    
  );
}

export default App;
