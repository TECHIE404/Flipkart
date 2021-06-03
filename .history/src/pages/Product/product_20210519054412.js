import React from 'react'
import DataProduct from '../Data/fetchproduct'
import Footer from '../../Compoents/Footer/index'
import NavBar from '../Navbar/nav'
import SecondNav from '../Second_navbar/secondnav'


function ProductPage({match}){
    // console.log(match)
    let id = match.params.id
    return(
        <div>
            <SecondNav />
            <DataProduct id={id} />
            <Footer />
        </div>
    )
}


export default ProductPage