import React from 'react';
import Footer from '../../Compoents/Footer/index';

import Product from '../../Compoents/Products'
import '../../App.css';
import Secondnav from '../../Compoents/Navbar/Second_navbar/secondnav';

function index() {
    return (
        <div className="App">
            <Secondnav/>
            <Product/>
            <Footer/>
        </div>
    )
}

 
export default index;