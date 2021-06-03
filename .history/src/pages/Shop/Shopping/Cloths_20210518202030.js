import React, { Component } from 'react';
import FilterSection from '../../../Compoents/ProductFilter/index'
class Cloths extends Component {
    constructor(){
        super();
        this.state={
            Data:[]
        }
    }

    async componentWillMount(){
        let url=await fetch('http://206.189.124.254.9000/products');
        let data=await url.json();
        this.setState({
            this.state.data=data
        })
    }
    render() { 
        return ( 
            <div className="width1400">
                <div className="row">
                    <FilterSection/>
                    Shooping Section
                </div>
            </div>
         );
    }
}
 
export default Cloths;