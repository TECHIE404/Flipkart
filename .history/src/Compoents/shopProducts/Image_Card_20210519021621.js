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
          <img src="http://206.189.124.254:9000/uploads/330img1.jpeg"/>
          <div>Product Name</div>
          <div><img src={checkone} width="50px"/></div>
          <div>₹ 407 
          <span style={{textDecoration:"line-through",
          opacity:"0.6",
          font:"bold",
          }}> ₹ 1,999 {' '}</span>
          <span style={{color:"green"}}>
              75% off
          </span>
          </div> 
         </div>
    )
}

export default ProductCard