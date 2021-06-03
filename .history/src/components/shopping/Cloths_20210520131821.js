import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";
import {URLLink} from '../../services/product';
class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    let url = URLLink;
    let data = 
    this.setState({
      Data: data,
    });
  }
  render() {
    return (
      <div className="width1400">
        <div className="row">
          <FilterSection />
          <ProductSection data={this.state.Data} />
        </div>
      </div>
    );
  }
}

export default Cloths;
