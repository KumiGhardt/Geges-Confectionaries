import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from './pages/Home';
import Sweet from './pages/Sweet';
import Savory from './pages/Savory';
import Craving from './pages/Craving';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from "react-use-cart";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        {/* homepage */}
        <Route path="/" exact component={Home} />
        <CartProvider>
        {/* inventory */}
        <Route path="/sweet" exact component={Sweet} />
        <Route path="/savory" exact component={Savory} />
        <Route path="/craving" exact component={Craving} />
        <Route path="/contact" exact component={Contact} />
        {/* cart */}
        <Route path="/cart" exact component={Cart} />
        </CartProvider>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
