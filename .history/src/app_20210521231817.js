import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import "./app.css";
import Shop from "./pages/shop";
import Product from "./pages/product/product";
import Cart from "./pages/cart/cart";
import PlaceOrder from "./pages/placeOrder/index";
//let x;
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div
            style={{
              position: "fixed top",
              flexBasis: "auto",
              flexDirection: "row",
              flexGrow: "1",
              flexShrink: "1",
            }}
          >
            <NavBar />
          </div>

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
