import React from 'react';

class NavMenu extends React.Component {
    state = {
        selected: {
            Home: true,
            Previous: false
        }
    };

    render() {
        const classSelected = this.state.selected.home ? {home: "active", previous: ""} : {home: "", previous: "active"};
        return (
            <div className="ui container">
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <p onClick={() => this.setState({selected: {Home: true, Previous: false}})} className={`${classSelected.home} item`}>Home</p>
                        <p onClick={() => this.setState({Selected: {Home: false, Previous: true}})} className={`${classSelected.previous} item`}>Previous</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavMenu;