import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Display from "./Display";
import ButtonItem from "./ButtonItem";
import SwitchButton from "./SwitchButton";

const pads = [
  {
    id: "Heater-1",
    keyCode: 81,
    label: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    keyCode: 87,
    label: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "Heater-3",
    keyCode: 69,
    label: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    keyCode: 65,
    label: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    keyCode: 83,
    label: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    keyCode: 68,
    label: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n'-Hat",
    keyCode: 90,
    label: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    keyCode: 88,
    label: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    keyCode: 67,
    label: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triggered: true
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
      triggered: (this.state.triggered = !this.state.triggered)
    });
  }

  playSound(e) {
    let link = e.target.firstElementChild.id;
    if (!this.state.triggered) {
      document.getElementById(link).play();
      document.getElementById("display").innerText = e.target.id;
    }
  }

  keyPress(e) {
    const audio = document.getElementsByTagName("audio");
    const button = document.getElementsByTagName("button");
    pads.map(pad => {
      if (!this.state.triggered && e.keyCode === pad.keyCode) {
        const link = audio[pad.label].id;
        const text = button[pad.id].id;
        document.getElementById(link).play();
        document.getElementById("display").innerText = text;
      }
    });
  }

  render() {
    return (
      <MDBCard className="card cloudy-knoxville-gradient" >
        <MDBCardBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="9" style={{ "border": "1px solid red" }}>
                {pads.map(pad => (
                  <ButtonItem
                    pad={pad}
                    key={pad.id}
                    playSound={this.playSound}
                  />
                ))}
              </MDBCol>
              <MDBCol size="3" style={{ "border": "1px solid red" }}>
                <Display triggered={this.state.triggered} />
                <SwitchButton toggleButton={this.toggleButton} />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default DrumPad;
