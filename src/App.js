import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen/HomeScreen';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
