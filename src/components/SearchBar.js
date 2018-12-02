import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    handleChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        // TODO: Make sure to make call back from parent component
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;