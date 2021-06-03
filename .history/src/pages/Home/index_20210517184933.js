import React from 'react';
import Footer from '../../Compoents/Footer/index';

import Product from '../../Compoents/Products'
import '../../App.css';
import secondnav from '../../Compoents/Navbar/Second_navbar/secondnav';

function index() {
    return (
        <div className="App">
            <secondnav/>
            <Product/>
            <Footer/>
        </div>
    )
}

 
export default index;