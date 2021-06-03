import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";

class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    const URLLink = fetch("http://206.189.124.254:9000/products").map;
    const data = URLLink.json();
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
