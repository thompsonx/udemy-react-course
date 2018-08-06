import * as React from 'react';
import './App.css';
import { CharComponent } from "./CharComponent/CharComponent";
import { ValidationComponent } from "./ValidationComponent/ValidationComponent";

class App extends React.Component {

  public state = {
    chars: [],
    length: 0,
    text: ''
  }

  public onChange = (event: any) => {
    this.setState({
      chars: event.target.value.split(''),
      length: event.target.value.length,
      text: event.target.value
    });
  };

  public onDeleteChar = (index: number) => {
    const chs = [...this.state.chars];
    chs.splice(index, 1);
    this.setState({chars: chs, lenght: chs.length, text: chs.join('')});
  }

  public render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} value={this.state.text} />
        <p>{this.state.length}</p>
        <ValidationComponent lenght={this.state.length} />
        {this.state.chars.map((ch, index) => <CharComponent key={index} char={ch} click={this.onDeleteChar.bind(this, index)} />)}
      </div>
    );
  }
}

export default App;
