import React from 'react';
import Footer from '../../Compoents/Footer/index';

import Product from '../../Compoents/Products'
import '../../App.css';
import Secondnav from '../../Compoents/Navbar/Second_navbar/secondnav';
import BannerSec from '../../Compoents/Test/image_slider'
function index() {
    return (
        <div className="App">
            <Secondnav/>
            <BannerSec/>
            <Product/>
            <Footer/>
        </div>
    )
}

 
export default index;