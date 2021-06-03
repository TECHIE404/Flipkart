import React, { Component } from "react";
import FirstSection from '../home/';
import SecondSection from '../home/';
import ThirdSection from '../home/';
import FourthSection from '../home/';
import FifthSection from '../home/';
import SixthSection from '../home/';
import SeventhSection from '../home/';
import EightSection from '../home/';
import NinethSection from '../home/';

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
        <FourthSection data={this.state.data} />
        <FifthSection data={this.state.data} />
        <SixthSection data={this.state.data} />
        <SeventhSection data={this.state.data} />
        <EightSection data={this.state.data} />
        <NinethSection data={this.state.data} />
      </div>
    );
  }
}

export default DataHome;
