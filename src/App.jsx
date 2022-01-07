import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { UserProvider } from './context/UserContext';

import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register.jsx';
import Login from './views/Auth/Login.jsx';

export default function App() {
  return (
    <UserProvider>
    
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PrivateRoute path='/profile'>
            <Profile />
          </PrivateRoute>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    
    </UserProvider>
  )
}
