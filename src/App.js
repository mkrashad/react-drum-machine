import React, { Component } from "react";
import Button from "./components/Buttons";

// const sounds = {
//   green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"),
//   blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3 110"),
//   pink: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3 72"),
//   yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3 88")
//   }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: [
        {
          label: "Q",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "W",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "E",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "A",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "S",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "D",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "Z",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "X",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        },
        {
          label: "C",
          sound: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3 283"
        }
      ]
    };

    this.handeleClick = this.handeleClick.bind(this);
  }

  handeleClick() {
    this.setState({
      
    })
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <Button pads={this.state.pads} onClick={this.handeleClick} />
        </div>
      </div>
    );
  }
}

export default App;
