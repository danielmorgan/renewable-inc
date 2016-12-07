import React, { Component } from 'react';
import logo from './logo.svg';
import './Game.css';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      speed: 0,
      time: null
    };
  }

  componentWillMount() {
    this.updateTime();
  }

  updateTime() {
    this.setState({ time: (new Date()).getTime() });
    requestAnimationFrame(this.updateTime.bind(this));
  }

  get duration() {
    return 60 / this.state.speed;
  }

  render() {
    return (
      <div className="Game">

        <div className="Game-header">
          <img src={logo}
            className="Game-logo"
            role="presentation"
            style={{
              animationDuration: `${this.duration}s`
            }} />
          <h2>Renewable Inc.</h2>
        </div>

        <p className="Game-intro">
          To get started, edit <code>src/Game.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default Game;
