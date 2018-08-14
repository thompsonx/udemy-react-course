import * as React from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;