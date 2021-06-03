import React from 'react';
import Footer from '../../components/Footer/index';
import Product from '../../components/Products'
import './index.css';
import Secondnav from '../../components/Navbar/Second_navbar/secondnav';
import BannerSec from '../../components/Test/image_slider'
import { SliderData }  from '../../images/HorizonalList/Data'
import FooterHome from '../../components/footer/index';
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