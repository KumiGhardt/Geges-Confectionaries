import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        {/* homepage */}
        <Route path="/" exact component={Home} />
      </Switch>

      </Router>
    </div>
  );
}

export default App;
