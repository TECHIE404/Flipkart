import React, { Component } from "react";
class DataHome extends Component {
  state = {};
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
