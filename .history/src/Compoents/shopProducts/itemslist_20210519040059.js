import React, { useDebugValue } from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';
import itemCard from './itemCard';



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
         {/* Image_Card{
         Data.map(data=>{      
             console.log(data.image);
             return <div>{data.image}</div>
             
         })
         } */}
         <div>
            <img src="http://206.189.124.254:9000/uploads/330img1.jpeg"/>
          <div>Product Name</div>
          <div><img src={checkone} width="50px"/></div>
          <div>₹ 407 
          <span style={{textDecoration:"line-through",
          opacity:"0.6",
          font:"bold",
          }}> ₹ 1,999 </span>
          <span style={{color:"green"}}>
              75% off
          </span>
          </div> 
          <div><b style={{opacity:"0.5"}}>Size</b> 39,40,42, 44</div>
        </div>
         <itemCard/>
          
         </div>
    )
}

export default ProductCard