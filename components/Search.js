import React from "react";
import ReactDOM from 'react-dom/client';
import { useRouter } from 'next/router'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            main: props.main,
        };
        if (props.id != null && props.id != undefined) {
            this.state.search = props.id;
        }
    }

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={e => {
                        const s = e.target.value;
                        this.setState({ search: s });
                        if (s.length > 0) {
                            this.state.main.current.setState({ api_fetch: "/api/music/search/" + s });
                        } else {
                            this.state.main.current.setState({ api_fetch: "/api/music/" });
                        }
                    }}
                />
            </div>
        );
    }
}

export default Search