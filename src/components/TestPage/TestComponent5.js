import React, { Component } from "react";
import testImage from "../../assets/images/test-image.svg";

class TestComponent5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: []
    };
  }

  componentDidMount = () => {
    const divs = [...document.querySelectorAll(".div")];

    divs.map(div => {
      console.log(typeof [this.state.coords]);
      this.setState(state => {
        const coords = state.coords.concat({
          centerX: div.offsetLeft + div.offsetWidth / 2,
          centerY: div.offsetTop + div.offsetHeight / 2
        });
        return {
          coords
        };
      });
    });
  };

  componentDidUpdate = () => {
    console.log(this.state.coords);
  };

  dist = (x1, x2, y1, y2) => {
    return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
  };

  render() {
    return (
      <>
        <svg>
          <line
            x1={this.state.coords.length ? this.state.coords[0].centerX : "100"}
            y1={this.state.coords.length ? this.state.coords[0].centerY : "100"}
            x2={this.state.coords.length ? this.state.coords[1].centerX : "100"}
            y2={this.state.coords.length ? this.state.coords[1].centerY : "100"}
            style={{
              strokeDasharray: this.state.coords.length
                ? this.dist(
                    this.state.coords[0].centerX,
                    this.state.coords[1].centerX,
                    this.state.coords[0].centerY,
                    this.state.coords[1].centerY
                  )
                : 0,
              strokeDashoffset: this.state.coords.length
                ? this.dist(
                    this.state.coords[0].centerX,
                    this.state.coords[1].centerX,
                    this.state.coords[0].centerY,
                    this.state.coords[1].centerY
                  )
                : 0
            }}
          />
        </svg>
        <div className="div1 div" style={{ top: "0vh", left: "60vw" }}></div>
        <div className="div2 div"></div>
      </>
    );
  }
}

export default TestComponent5;
