import React from "react";

class Widget extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        this.props.player.current.changeAudio(this);
    }
    
    render() {
        const that = this;
        return (
        <div className="widget" onClick={() => that.onClick()}>
            <h1>{this.props.name}</h1>
        </div>
        );
    }
}

export default Widget;