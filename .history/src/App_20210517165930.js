import React from 'react';
import Footer from './Compoents/Footer';
import NavBar from './Compoents/Navbar';
import Product from './Compoents/Products'
import './App.css';
 function App() {
    return (
        <div className="App">
            <NavBar/>
            <Product/>
            <Footer/>
        </div>
    )
}

 
export default App;