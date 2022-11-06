import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Widget";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    changeData(data) {
        this.setState({ data: this.convert(data) });
    }
    
    convert(obj) {
        return Object.keys(obj).map(key => ({
            name: obj[key].name,
            audio: obj[key].audio,
        }));
    }

    render() {
        const that = this;
        const { data } = this.state;
        console.log(data);
        //{ data.map((item, index) => <Widget key={index} name={item.name} audio={item.audio} player={that.props.player} />) }
        if (data.length > 0) {
            return (
                <div className="page">
                    { data.map((item, index) => <Widget key={index} name={item.name} audio={item.audio} player={that.props.player} />) }
                </div>
            );
        } else {
            return (
                <div className="page">
                    <p>loading...</p>
                </div>
            );
        }
    }
}

export default Page;