import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { skin: 'day' };
    this.changeSkin = this.changeSkin.bind(this);
  }

  changeSkin() {
    const newSkin = this.state;
    this.state.skin === 'day' ? newSkin.skin ='night' : newSkin.skin = 'day';
    this.setState(newSkin);
  }

  render() {
    return (
      <div className={this.state.skin}>
        <header className="App-header">
          <p onClick={this.changeSkin}>Click!</p>
        </header>
      </div>
    );
  }

}

export default App;
