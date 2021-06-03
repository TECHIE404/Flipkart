import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard({data}){
    console.log("shop check");
   let Data=data.image[0];
   if(Data){
    console.log("Data received");
    console.log(Data);
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