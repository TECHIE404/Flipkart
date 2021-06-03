import React, { useDebugValue } from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';
import Card from './ItemCard';



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
         {/* {
         Data.map(data=>{      
             console.log(data.image);
             return <Card src={data.image} 
             name={data.name}
             desc={data.description}
             price={data.price}
             />
             
         })
         } */}
         
         imglist
          
         </div>
    )
}

export default ProductCard