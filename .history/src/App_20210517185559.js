import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Compoents/Navbar';
import Home from './pages/Home'
import './App.css';
function App() {
    return (
        <div className="App">
            <Router>
                <div>
                <NavBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </Router>
           
        </div>
    )
}

 
export default App;