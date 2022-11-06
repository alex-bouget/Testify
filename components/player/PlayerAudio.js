import React from 'react';
import ReactDOM from 'react-dom/client';

class PlayerAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: "",
            currentTime: "",
            progress: 0,
            audio: NaN,
            audioName: "",
            button: "play",
        }
    }

    changeAudio(audio) {
        this.setState({ audio: audio.props.audio, audioName: audio.props.name });

        const audioElement = document.getElementById('bg_music');
        audioElement.load();
        audioElement.play();

        if (this.props.onchange) {
            this.props.onchange(audio);
        }
    }

    play() {
        const audioElement = document.getElementById('bg_music');
        if (audioElement.paused) {
            audioElement.play();
            this.setState({ button: "pause" });
        } else {
            audioElement.pause();
            this.setState({ button: "play" });
        }
    }

    formatTime(time) {
        if (isNaN(time)) {
            return "-:--";
        }
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }

    timeupdate() {
        const { duration, currentTime } = document.getElementById('bg_music');
        const progress = (currentTime / duration) * 60;
        const progressbar = document.querySelector('.player-audio__progress');


        const time = document.querySelector('.player-audio-time');

        const maxtime = document.querySelector('.player-audio-maxtime');

        const durationFormat = this.formatTime(duration);
        const timeFormat = this.formatTime(currentTime);

        this.setState({
            duration: durationFormat,
            currentTime: timeFormat,
            progress: progress,
        });
    }

    componentDidMount() {
        const audio = document.getElementById('bg_music');
        audio.addEventListener('timeupdate', () => this.timeupdate());
    }

    componentWillUnmount() {
        const audio = document.getElementById('bg_music');
        audio.removeEventListener('timeupdate', () => this.timeupdate());
    }

    changeProgress(e) {
        let target = document.querySelector('.player-audio__clickable');
        const { duration } = document.getElementById('bg_music');
        const progress = e.nativeEvent.x - target.offsetLeft;
        const progressPercent = progress / target.offsetWidth;
        const audio = document.getElementById('bg_music');
        console.log(progressPercent);
        audio.currentTime = duration * progressPercent;

        this.timeupdate();
    }

    render() {
        const { progress, duration, currentTime, audio } = this.state;
        return (
            <div className="player-audio">
                <p className="player-audio-time">{currentTime}</p>
                <div className="player-audio-progress" onClick={e => this.changeProgress(e)}>
                    <div className="player-audio__clickable"></div>
                    <div className="player-audio__progress" style={{ width: `${progress}%` }} />
                </div>
                <audio id="bg_music" className="player-audio-mp3" autoPlay={true} controls loop style={{ display: "none" }}>
                    <source src={audio} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
                <p className='player-audio-maxtime'>{duration}</p>
            </div>
        );
    }
}

export default PlayerAudio;