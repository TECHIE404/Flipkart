import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard(props){
    console.log("shop check");
    console.log(this.props.data.name);
    let data = props.data
    return (
         <div>
            data product {console.log(data.name)}
            
         </div>
    )
}

export default ProductCard