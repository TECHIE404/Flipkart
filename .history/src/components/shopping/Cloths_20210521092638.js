import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";
import { dataP } from "../../services/product";
class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    const data = dataP;
    console.log("test");
    console.log(data);
    console.log("cloths data is fetch successfully");
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
