import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard({data}){
    console.log("shop check");
   let data;
    return (
         <div>
           product section { data=data? console.log(data): console.log("can't read data")}
            
         </div>
    )
}

export default ProductCard