import './App.css';
import React from 'react';

const beats = [
  {
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
]

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        displayText: "Drop a Funky Beat!"
    };   
    this.displayText = this.displayText.bind(this);
    }
  displayText(id) {
    this.setState({
      displayText: id
    });
  }
  render() {
    return (     
        <div id='wrapper'> 
          <h1>Drum Machine</h1>
          <div id="display">{this.state.displayText}
          </div> 
          <div className="grid" id="drumpads">
          {beats.map((data) => (
          <DrumPad 
            keyTrigger={data.keyTrigger}
            key={data.id} 
            id = {data.id}
            keyCode={data.keyCode}
            url={data.url}
            displayText = {this.displayText}
          />))}
          </div> 
        </div>
     );
  }
}

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
   
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyPress);
  };
  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handkleKeyPress);
  };
  handleKeyPress = (event) => {
    if (event.keyCode === this.props.keyCode) {
      this.playAudio();
      this.props.displayText(this.props.id);
    }
  };
 playAudio = () => {
    const audio = document.getElementById(this.props.keyTrigger);
    audio.play();
    this.props.displayText(this.props.id);
  };
  render() {
    return (
      <button className="drum-pad" id={this.props.id} onClick={this.playAudio} onKeyPress={this.handleKeyPress}>
      {this.props.keyTrigger}
        <audio className="clip" id={this.props.keyTrigger} src={this.props.url} />
    </button>
    );
  }
}

export default App;
