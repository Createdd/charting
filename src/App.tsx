import * as React from 'react';

import './App.css';
import { AppStateType } from './types';

import Chart, {
  // ChartPropsType,
  ChartDataType,
} from './Chart';

const logo = require('./logo.svg');
const data: ChartDataType = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

/* tslint:disable no-any */
class App extends React.Component<any, AppStateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: 'Daniel'
    };
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Welcome {this.state.currentUser}</h2>
        <Chart data={data}/>
      </div>
    );
  }
}

export default App;
