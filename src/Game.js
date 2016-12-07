import React, { Component } from 'react';
import Dynamo from './components/Dynamo';
import './Game.css';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      speed: 0,
      credits: 0,
      joules: 0,
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

  dynamoClick() {
    this.setState({ joules: this.state.joules + 1 });
  }

  get duration() {
    return 60 / this.state.speed;
  }

  render() {
    return (
      <div className="Game">

        <div className="Game-header">
          <img src={require('./logo.svg')}
            className="Game-logo"
            role="presentation"
            style={{
              animationDuration: `${this.duration}s`
            }} />
          <h2>Renewable Inc.</h2>
        </div>

        <div className="Game-status">
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="key">Credits</td>
                  <td>{this.state.credits}</td>
                </tr>
                <tr>
                  <td className="key">Joules</td>
                  <td>{this.state.joules}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="Game-components">
          <Dynamo handleClick={() => this.dynamoClick()} />
        </div>

      </div>
    );
  }
}

export default Game;
