import { Search } from '@material-ui/icons';
import React, { Component } from 'react';
class FilterSection extends Component {
    constructor(){
        supter();
        this.state={
            range:"ranger",
            priceNum:"",
            PriceNumTwo:"2500+",
            checkOne:"checkOne",
            Search:"search",
    }
    priceRange=(event)=>{
        let {name, value}=event.target
        this.setState({
            [name]:value
        });
    }
    render(){ 
        return ( 
            // <div className="Layer1">
            //     <div className="Layer2">
            //         <h2>Filters</h2><hr/>
            //     </div>
            // </div>
            rahul
         );
    }
}
 
export default FilterSection;