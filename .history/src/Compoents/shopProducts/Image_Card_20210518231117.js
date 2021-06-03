import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard({name}){
    console.log("shop check");
   
    return (
         <div>
           {name}
            
         </div>
    )
}

export default ProductCard