import React from 'react';
import ReactDOM from 'react-dom/client';
import PlayerAudio from './PlayerAudio';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.playerAudio = React.createRef();
        this.state = {
            name: "",
        }
    }

    changeAudio(audioFile) {
        this.playerAudio.current.changeAudio(audioFile);
    }

    play() {
        this.playerAudio.current.play();
        const button = document.getElementById('player-button');
        button.innerHTML = this.playerAudio.current.state.button;
    }

    atChange(e) {
        this.setState({ name: e.props.name });
    }

    render() {
        const that = this;
        const { name } = this.state;
        return (
            <div className="player">
                <p>{ name }</p>
                <button id="player-button" onClick={() => that.play()}>play</button>
                <PlayerAudio audio="" ref={this.playerAudio} onchange={ (e) => that.atChange(e) } />
            </div>
        );
    }
}

export default Player;