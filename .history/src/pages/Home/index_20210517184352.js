import React from 'react';
import Footer from './Compoents/Footer/index';
import NavBar from './Compoents/Navbar';
import Product from './Compoents/Products'
import './App.css';
 function index() {
    return (
        <div className="App">
            <NavBar/>
            
            <Product/>
            <Footer/>
        </div>
    )
}

 
export default index;