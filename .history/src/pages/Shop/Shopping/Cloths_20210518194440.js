import React, { Component } from 'react';
import FilterSection from '../../../Compoents/ProductFilter/index'
class Cloths extends Component {
    state = {  }
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