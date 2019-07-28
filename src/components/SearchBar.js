import { fetch_search } from '../actions/index';

import React from 'react';
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    handleChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.fetch_search(this.state.term);
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Search for a Youtube Video!</h1>
                <form onSubmit={this.onFormSubmit} className="searchForm">
                    <div className="input-group mb-3">
                        <input className="form-control" placeholder="Search for a youtube video!" type="text" value={this.state.term} onChange={this.handleChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={this.onFormSubmit}>Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default connect(null,{fetch_search})(SearchBar);