import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';


function ProductCard(props){
    let data = props.data
    return (
         <div>
            data product {data.category}
         </div>
    )
}

export default ProductCard