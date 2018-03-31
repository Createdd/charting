import * as React from 'react';

import './App.css';
import { AppStateType } from './types';
import Chart from './Chart';

const logo = require('./logo.svg');

/* tslint:disable no-any */
class App extends React.Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: 'Daniel'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Welcome {this.state.currentUser}</h2>
        <Chart />
      </div>
    );
  }
}

export default App;
