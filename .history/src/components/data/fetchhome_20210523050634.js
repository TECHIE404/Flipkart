import React, { Component } from "react";
import FirstSection from "../home/FirstSection/firstsection";
import SecondSection from "../home/SecondSection/secondsection";
import ThirdSection from "../home/ThirdSection/thirdsection";
import FourthSection from "../home/FourthSection/fourthsection";
import FifthSection from "../home/FifthSection/fifthsection";
import SixthSection from "../home/SixthSection/sixthsection";
import SeventhSection from "../home/SeventhSection/seventhsection";
import EightSection from "../home/EightSection/eightsection";
import NinethSection from "../home/NinethSection/ninenthsection";

class DataHome extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentWillMount() {
    let url = await fetch("http://206.189.124.254:9000/products");
    let data = await url.json();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <FirstSection data={this.state.data} />
        <SecondSection data={this.state.data} />
        <ThirdSection data={this.state.data} />
        {/* <FourthSection data={this.state.data} /> */}
        <FifthSection data={this.state.data} />
        <SeventhSection data={this.state.data} />
        <EightSection data={this.state.data} />
        <NinethSection data={this.state.data} />
      </div>
    );
  }
}

export default DataHome;
