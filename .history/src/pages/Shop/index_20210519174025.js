import React from 'react'
import Secondnav from '../../components/Navbar/Second_navbar/secondnav';
import FooterHome from '../../components/Footer/footer';
import Footer from '../../components/footer/footer';
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
