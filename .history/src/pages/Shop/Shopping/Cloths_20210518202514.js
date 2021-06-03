import React, { Component } from 'react';
import FilterSection from '../../../Compoents/ProductFilter/index';
import ProductSection from '../../../Compoents/shopProducts/index';
class Cloths extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    async componentWillMount(){
        let url=await fetch('http://206.189.124.254.9000/products');
        let data=await url.json();
        this.setState({
            data
        })
    }
    render() { 
        return ( 
            <div className="width1400">
                <div className="row">
                    <FilterSection/>
                    <ProductSection data={this.state.data}/>
                </div>
            </div>
         );
    }
}
 
export default Cloths;