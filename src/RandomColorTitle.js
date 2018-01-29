import React, { Component } from 'react';
import './RandomColorTitle.css';

class RandomColorTitle extends Component {
	constructor() {
		super();
		this.state = {
      		colorBlack: true,
      		randomColor: 'black',
      		textInput: 'Enter text:'
      	}
		this.handleChange = this.handleChange.bind(this);
	};
  handleChange (e){
    this.setState({textInput: e.target.value});
  }

  changeColor = () => {
    fetch('http://www.colr.org/json/color/random').then((response) => response.json()).then((responseJson) => {
      this.setState({
      	colorBlack: !this.state.colorBlack,
      randomColor: !this.state.colorBlack ? "black" : '#'+responseJson.new_color
    })
      console.log(this.state.colorBlack + this.state.randomColor );
    })
    .catch((error) => {
      console.error(error);
    });
  };

  render() {
    return (
    <div>
      <h1 onClick={this.changeColor} style={{ color: this.state.randomColor }}>{this.state.textInput}</h1>
      <input value={this.state.textInput} onChange={this.handleChange} />
      </div>
    );
  }
}

export default RandomColorTitle;
