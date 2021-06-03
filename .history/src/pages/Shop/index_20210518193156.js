import React from 'react'
import Secondnav from '../../Compoents/Navbar/Second_navbar/secondnav';
import FooterHome from '../../Compoents/Footer/footer';
import Footer from '../../Compoents/Footer/index';
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
