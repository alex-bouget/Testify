import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Widget";
import "./page.css";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.max = 17;
    }
    
    render() {
        const that = this;
        let widgets = [];
        for (let i = 1; i <= this.max; i++) {
            const name = "SoundHelix Song " + i;
            const audio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-" + i + ".mp3";
            widgets.push(<Widget name={name} audio={audio} player={that.props.player} />);
        }
        return (
        <div className="page">
            {widgets}
        </div>
        );
    }
}

export default Page;