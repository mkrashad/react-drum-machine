import React from "react";
import Buttons from "./components/Buttons";

export default class App extends React.Component {
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

    this.playSound = this.playSound.bind(this);
  }

  playSound(pad, index) {
    const newPads = [...this.state.pads];
    newPads[index].triggered = !newPads[index].triggered ? true : false;
    this.setState(newPads);

    const x = document.getElementById(pad.label);
    if(this.state.pads[index].triggered){
      x.play();
    }
    else {
      x.pause();
    }
   
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <Buttons pads={this.state.pads} onClick={this.playSound}/>
        </div>
      </div>
    );
  }
}

