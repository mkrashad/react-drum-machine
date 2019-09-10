import React, { Component } from "react";
import Buttons from "./components/Buttons";
import Switcher from "./components/Switcher";
import "./styles/styles.css"

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

    this.toggleButton = this.toggleButton.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  toggleButton(e) {
    const index = e.target.id;
    let newPads = [...this.state.pads];

    console.log(e.target.lastChild.id)
    let link = e.target.lastChild.id;
    

    if (!this.state.pads[index].triggered) {
        newPads[index].triggered = true;
        this.setState(newPads);
        document.getElementById(link).play();
        
    } else {
      newPads = [...this.state.pads];
      newPads[index].triggered = false;
      this.setState(newPads);
    }
  }

  playSound() {
    console.log("Hello world")
  }

  render(){
  return (
    <div id="drum-machine">
      <div id="display" style={{ margin: "10rem" }}>
        <Switcher triggered={this.state.pads.triggered} onChange={this.toggleButton}/>
        <Buttons pads={this.state.pads} onClick={this.playSound}/>
      </div>
    </div>
  );
  }
}

export default App;