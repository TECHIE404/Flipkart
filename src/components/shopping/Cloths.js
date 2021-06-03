import React, { Component } from "react";
import FilterSection from "../../components/productFilter/index";
import ProductSection from "../../components/shopProducts/index";
import "./cloths.css";
import { url } from "../../services/product";
class Cloths extends Component {
  constructor() {
    super();
    this.state = {
      Data: [],
    };
  }

  async componentWillMount() {
    const response = await fetch(url);
    let data = await response.json();
    console.log("test");
    console.log(data);
    console.log("cloths data is fetch successfully");
    this.setState({
      Data: data,
    });
  }
  render() {
    return (
      <div
        className="width1400"
        style={{
          justifyContent: "center",
          display: "flex",
          alignContent: "center",
          alignItem: "center",
        }}
      >
        <div className="row">
          <FilterSection />
          <ProductSection data={this.state.Data} />
        </div>
      </div>
    );
  }
}

export default Cloths;
