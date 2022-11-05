import logo from './logo.svg';
import './App.css';
import Player from './components/player/Player';



function App() {
  return (
    <div className="App">
      <Player audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
    </div>
  );
}

export default App;
