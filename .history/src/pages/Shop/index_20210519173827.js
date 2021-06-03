import React from 'react'
import Secondnav from '../../components/Navbar/Second_navbar/secondnav';
import FooterHome from '../../components/Footer/footer';
import Footer from '../../components/footer/index';
import ShoppingSec from './Shopping/Cloths';
function Shop() {
    return (
        <div>
        <Secondnav/>
            <ShoppingSec/>
            <FooterHome/>
            <Footer/>
        </div>
    )
}

export default Shop
