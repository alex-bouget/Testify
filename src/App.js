import logo from './logo.svg';
import './App.css';
import React from 'react';
import Player from './components/player/Player';
import Page from './components/page/page';


function App() {
  let player = React.createRef();
  return (
    <div className="App">
      <Page player={player} />
      <Player ref={player} />
    </div>
  );
}

export default App;
