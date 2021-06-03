import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";
import { URLLink } from "../../services/product";
class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    let url = fetch("http://206.189.124.254:9000/products");
    let data = await url.json();
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
