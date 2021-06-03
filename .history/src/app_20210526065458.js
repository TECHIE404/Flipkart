import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import "./app.css";
import Shop from "./pages/shop";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id" component={Product} />
            <Route path="/cart/:id" component={Cart} />
            {/* <Route path="/"/> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
