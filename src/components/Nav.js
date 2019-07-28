import './Nav.css';
import React from 'react';
import { connect } from 'react-redux';

import { fetch_default, close_video } from '../actions';

class NavMenu extends React.Component {

    clickDefault = e => {
        e.preventDefault();
        this.props.fetch_default();
    };

    backToSearch = e => {
        e.preventDefault();
        this.props.close_video();
    };

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark bg-primary">
                <div className="container">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/" className="navbar-brand" onClick={this.clickDefault}>Home</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/" className="navbar-brand" onClick={this.backToSearch}>Search</a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" rel="noreferrer noopener" href="https://danieldiaz14.github.io" className="navbar-brand" onClick={this.clickDefault}>Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(null, {fetch_default, close_video})(NavMenu);