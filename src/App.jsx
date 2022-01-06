import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
