import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard(props){
    console.log("shop check");
    let data = props.data
    console.log(data);
    return (
         <div>
            data product {console.log(data.name)}
            
         </div>
    )
}

export default ProductCard