import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard({data}){
    console.log("shop check");
   let Data=data;
   if(Data){
    console.log("Data received");
    console.log(Data.image[0]);
    }
    else{
        console.log("null");
    }
    return (
         <div>
          products ection
            
         </div>
    )
}

export default ProductCard