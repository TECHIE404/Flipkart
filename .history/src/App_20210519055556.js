import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Compoents/Navbar';
import Home from './pages/Home'
import './App.css';
import Shop from './pages/Shop';
import Product from './pages/Product/product'
function App() {
    return (
        <div className="App">
            <Router>
                <div>
                <NavBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/shop" component={Shop}/>
                        <Route path="/product/:id" component={Product}/>
                        <Route path="/cart/:id" component={Cart}/>
                    </Switch>
                </div>
            </Router>
           
        </div>
    )
}

 
export default App;