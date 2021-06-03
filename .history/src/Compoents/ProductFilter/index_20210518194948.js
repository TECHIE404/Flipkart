import { Search } from '@material-ui/icons';
import React, { Component } from 'react';
class FilterSection extends Component {
    constructor(){
        super();
        this.state={
            range:"ranger",
            priceNum:"",
            PriceNumTwo:"2500+",
            checkOne:"checkOne",
            Search:"search",
    }
}
    priceRange=(event)=>{
        let {name, value}=event.target;
        this.setState({
            [name]:value
        });
    }
    render(){ 
        return ( 
            <div className="Layer1">
                <div className="Layer2">
                    <h2>Filters</h2><hr/>
                    <ul style={{listStyleType:"none"}}>
                        <h4>CATEGORIES</h4>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 16 27"
                                 xmlns="http://www.w3.org/2000/svg" className="_3OIXYL">
                                 <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" 
                                 fill="#000000" className="zTtNVt"></path></svg> Clothing and Accessories
                        </li>
                        <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Topwear</li>
                        <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Shirts</li>
                        <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Men's Shirts</li>
                        <h4>Formal Shirts</h4>
                    </ul>
                </div>
            </div>
            
         );
    }
}
 
export default FilterSection;