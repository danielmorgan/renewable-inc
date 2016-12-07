import React, { Component } from 'react';
import Svg from 'react-inlinesvg';
import './Dynamo.css';

export default class Dynamo extends Component {
  render() {
    return (
      <div className="Dynamo">
        <h4>Dynamo:</h4>
        <a href="#" onClick={() => this.props.handleClick()}>
          <Svg className="Dynamo-icon" src={require('./dynamo.svg')} />
        </a>
      </div>
    );
  }
}
