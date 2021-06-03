import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard(props){
    console.log("shop check");
   let Data=props.data;
   if(Data){
    console.log("Data received");
    console.log(Data.keys);
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