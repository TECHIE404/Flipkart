import React from 'react'
import {Link} from 'react-router-dom'
import checkone from '../../Assets/product/checkone.png';



function ProductCard(props){
    console.log("shop check");
   let Data=this.props.Data;
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