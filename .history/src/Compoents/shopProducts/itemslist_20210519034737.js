import React, { useDebugValue } from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard(props){
    console.log("shop check");
   let Data=props.data;
//    if(Data){
//     console.log("Data received");
//     Data.map(val=>
//         console.log(val))
//     }
//     else{
//         console.log("null");
//     }
    return (
         <div>
         Image_Card{
         Data.map(data=>{      
             console.log(data.image);
             return <div>{data.image}</div>
             
         })
         }
          
         </div>
    )
}

export default ProductCard