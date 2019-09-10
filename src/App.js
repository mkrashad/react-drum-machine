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
          label: "Q",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "W",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "E",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "A",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "S",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "D",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "Z",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "X",
          sound: "https://www.kozco.com/tech/piano2.wav"
        },
        {
          label: "C",
          sound: "https://www.kozco.com/tech/piano2.wav"
        }
      ]
    };
    this.toggleButton = this.toggleButton.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  toggleButton() {
    this.setState({
      triggered: this.state.triggered ? false : true
    })
    console.log(this.state.triggered)
  }


  playSound(e) {
    let link = e.target.lastChild.id
    if(!this.state.triggered){
      document.getElementById(link).play();
    }
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" style={{ margin: "10rem" }}>
          <Switcher triggered={this.state.triggered} onChange={this.toggleButton} />
          <Buttons pads={this.state.pads} onClick={this.playSound} />
        </div>
      </div>
    );
  }
}

export default App;
