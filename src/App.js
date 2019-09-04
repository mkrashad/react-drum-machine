import React, { Component } from "react";
import Button from "./components/Buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: [
        {
          label: "Q",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "W",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "E",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "A",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "S",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "D",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "Z",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "X",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        },
        {
          label: "C",
          sound: "https://www.kozco.com/tech/piano2.wav",
          triggered: false
        }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, pad) {
    const newPads = [...this.state.pads];
    newPads[index].triggered = !newPads[index].triggered ? true : false;
    this.setState(newPads);
    const source = pad.sound;
    const audio = new Audio(source);
    if (this.state.pads[index].triggered) {
      audio.play();
      console.log(newPads[index].triggered);
    } else {
      audio.pause();
      console.log(newPads[index].triggered);
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <Button pads={this.state.pads} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
