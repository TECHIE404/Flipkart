import React from 'react'
import checkone from '../../Assets/product/checkone.png';
function itemCard() {
    
    return (
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
    )
}

export default itemCard
