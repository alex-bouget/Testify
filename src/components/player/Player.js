import React from 'react';
import ReactDOM from 'react-dom/client';
import PlayerAudio from './PlayerAudio';
import './Player.css';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.playerAudio = React.createRef();
        this.data = [
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        ]
        this.i = 0;
    }

    changeAudio() {
        this.i++;
        console.log(this);
        this.playerAudio.current.changeAudio(this.data[this.i%4]);
    }

    render() {
        const that = this;
        return (
            <div className="player">
                  <button onClick={() => that.changeAudio()}>Change Audio</button>
                <PlayerAudio audio={ this.data[this.i] } ref={ this.playerAudio } />
            </div>
        );
    }
}

export default Player;