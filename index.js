import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Hooks from './Hooks';
import {ComponentUserSelector } from './UserSelector';
        

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Hooks />
        <ComponentUserSelector />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
