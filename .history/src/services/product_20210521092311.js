import React from "react";
class product extends Component {
    state = {  }
  async componentDidMount(){
        const url = "http://206.189.124.254:9000/products";
const response = await fetch(url);
let data = await response.json();
    }
    render() { 
        return (  );
    }
}
 
export default product;
