import React from 'react'
import DataProduct from './fetchproduct'
import Footer from '../../Compoents/Footer/index'
import SecondNav from '../../Compoents/Navbar/Second_navbar/secondnav'


function ProductPage({match}){
    // console.log(match)
    let id = match.params.id
    return(
        <div style={{backgroundColor:'white'}}>
            <SecondNav />
            <DataProduct id={id} />
            <Footer />
        </div>
    )
}


export default ProductPage