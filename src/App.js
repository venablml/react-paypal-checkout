import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";    
import Login from './pages/login'
import Admin from './pages/admin'
import Checkout from './pages/checkout'



function App() {
  return (
    <Router>
    <div className="App">
    <Link to ='/login'>Login</Link>
    <Link to ='/admin' >Admin</Link>
   
     <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Checkout />
          </Route>
          
        </Switch>
    </div>
    </Router>
  );
}

export default App;
