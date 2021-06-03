import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';


function ProductCard(props){
    let data = props.data
    return (
         <div>
            data product {console.log(data.name)}
            {console.log("error check")}
         </div>
    )
}

export default ProductCard