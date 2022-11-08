import React, { useEffect } from 'react'
import Router from 'next/router'
import Page from './page/Page'
import Player from './player/Player'
import Search from './Search'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api_fetch: props.api_fetch,
            id: props.id,
            player: React.createRef(),
            page: React.createRef(),
            main: React.createRef(),
            search: React.createRef(),
        };
        this.state.main.current = this;
    }

    componentDidMount() {
        this.changeData();
    }

    componentDidUpdate() {
        this.changeData();
    }

    changeData() {
        if (this.state.page.current == null) {
            return;
        }
        if (this.state.id == null || this.state.id == undefined) {
            return;
        }
        fetch(this.state.api_fetch).then(response => response.json()).then(data => {
            this.state.page.current.changeData(data);
            const url = this.state.api_fetch.split("/");
            let to = "";
            if (url.length > 4) {
                to = '/search/' + this.state.api_fetch.split("/")[4];
            } else {
                to = '/';
            }
            history.pushState(null, null, to);
        });
    }


    render() {
        return (
            <div className="App">
                <Search main={this.state.main} id={this.state.id} ref={this.state.search} />
                <Page player={this.state.player} ref={this.state.page} />
                <Player ref={this.state.player} />
            </div>
        )
    }
}

export default Main