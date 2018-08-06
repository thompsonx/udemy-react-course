import * as React from 'react';
import './App.css';
import { UserInput } from "./UserInput/UserInput";
import { UserOutput } from "./UserOutput/UserOutput";

class App extends React.Component {

  public state = {
    username: 'tom'
  };

  public onChange = (event: any) => {
    this.setState({username: event.target.value});
  }

  public render() {
    return (
      <div className="App">
        <UserInput value={this.state.username} handleChange={this.onChange} />
        <UserOutput username={this.state.username} info="I am a super user" />
        <UserOutput username="mot" info="I am a big boss" />
      </div>
    );
  }
}

export default App;
