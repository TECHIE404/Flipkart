import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";
import { dataFetch } from "../../services/product";
class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    const data = dataFetch;
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
