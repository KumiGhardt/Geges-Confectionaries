import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from './pages/Home';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        {/* homepage */}
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
