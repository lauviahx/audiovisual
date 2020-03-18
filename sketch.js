import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { draw: this.shape1 };
  }

  w;
  i;
  y;
  amp;
  y;
  r;
  x;
  s = 36;

  spectrum = [35, 106, 134, 143, 161, 76, 107, 198, 118, 140, 114, 74, 72, 93, 62, 13, 20, 61, 53, 99, 50, 67, 88, 38, 35, 22, 36, 8, 12, 67, 89, 163, 144, 165, 210, 155];

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(1000, 600).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.colorMode(p5.HSB);
    this.w = p5.width / this.s;
    p5.background(0);

  };

  shape1 = p5 => {
    p5.push();
    p5.beginShape();
    p5.background(0);
    p5.noStroke();
    for (this.i = 0; this.i < this.spectrum.length; this.i++) {

      this.amp = this.spectrum[this.i];
      this.y = p5.map(this.amp, 0, 255, p5.height, 0);
      p5.fill(this.i * 5, 255, 255);
      p5.rect(this.i * this.w, this.y, this.w - 5, p5.height - this.y);

    }
    p5.endShape();
    p5.pop();
  };

  shape2 = p5 => {
    p5.push();
    p5.beginShape();
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(p5.frameCount / (100 * p5.PI));
    for (this.i = 0; this.i < 220; this.i++) {
      this.r = this.spectrum[this.i];
      this.x = this.r * p5.cos(this.i);
      this.y = this.r * p5.sin(this.i);
      p5.stroke(this.i * 5, 255, 255);
      p5.strokeWeight(1);
      p5.line(0, 0, this.x, this.y);
    }
    p5.endShape();
    p5.pop();
  }

  change = () => {
    this.setState({ draw: this.shape1 });
  }
  changeTwo = () => {
    this.setState({ draw: this.shape2 });
  }


  render() {
    return (
      <div><Sketch setup={this.setup} draw={this.state.draw} />
        <button className="buttons" type="button" onClick={this.change}>Visualisation 1</button>
        <button type="button" onClick={this.changeTwo}>Visualisation 2</button></div>

    );
  }
}

// add colour picker to change visualisation colour -maybe?
//https://p5js.org/reference/#/p5/colorMode
//https://casesandberg.github.io/react-color/
//https://p5js.org/reference/#/p5/createColorPicker