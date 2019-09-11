import React, { Component } from "react";
import Buttons from "./components/Buttons";
import Switcher from "./components/Switcher";
import "./styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggered: true,
      pads: [
        {
          keyCode: 81,
          label: "Q",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          keyCode: 87,
          label: "W",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          keyCode: 69,
          label: "E",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          keyCode: 65,
          label: "A",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
          keyCode: 83,
          label: "S",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
          keyCode: 68,
          label: "D",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          keyCode: 90,
          label: "Z",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          keyCode: 88,
          label: "X",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          keyCode: 67,
          label: "C",
          sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ]
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPress);
  }

  toggleButton() {
    this.setState({
      triggered: !this.state.triggered ? true : false
    });
  }

  playSound(e) {
    let link = e.target.lastChild.id;
    if (!this.state.triggered) {
      document.getElementById(link).play();
    }
  }

  keyPress(e) {
    const audio = document.getElementsByTagName('audio');
    this.state.pads.map(pad => {
      if (!this.state.triggered && e.keyCode === pad.keyCode) {
        const link = audio[pad.label].id;
        document.getElementById(link).play();
      }
    });
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" style={{ margin: "10rem" }}>
          <Switcher
            triggered={this.state.triggered}
            onChange={this.toggleButton}
          />
          <Buttons pads={this.state.pads} onClick={this.playSound}/>
        </div>
      </div>
    );
  }
}

export default App;
