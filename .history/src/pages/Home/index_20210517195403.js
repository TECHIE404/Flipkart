import React from 'react';
import Footer from '../../Compoents/Footer/index';

import Product from '../../Compoents/Products'
import '../../App.css';
import Secondnav from '../../Compoents/Navbar/Second_navbar/secondnav';
import BannerSec from '../../Compoents/Test/image_slider'
import { SliderData }  from '../../Assets/HorizonalList/Data'
import FooterHome from './footer';
function index() {
    return (
        <div className="App">
            <Secondnav/>
            
            <BannerSec slides={SliderData}/>
            <Product/>
            <FooterHome/>
            <Footer/>
        </div>
    )
}

 
export default index;