import {Component, Fragment} from "react";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {search} from "../actions/search";
import {suggest} from "../actions/suggest";
import Select from 'react-select'

class SearchBar extends Component {

    handleChange = (event) => {
        if (event.value === '') return;
        this.props.dispatchSearch(event.value);
    };

    handleInputChange = (event) => {
        if (event === '') return;
        this.props.dispatchSuggest(event);
    };

    handleSubmit = event => {
        event.preventDefault();
        if (event.target.search.value === '') return;
        this.props.dispatchSearch(event.target.search.value);
    };

    render() {
        if (this.props.data.loggingIn === true) {
            return <form className="navbar-form navbar-left" onSubmit={this.handleSubmit}>
                <div className="form-group input-search">
                    <Select
                        name="search"
                        options={this.props.suggest_results.options}
                        onChange={this.handleChange}
                        onInputChange={this.handleInputChange}
                    />
                </div>
            </form>
        } else {
            return <Fragment>
            </Fragment>
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.authentication,
        suggest_results: state.suggest
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchSearch: word => dispatch(search(word)),
        dispatchSuggest: word => dispatch(suggest(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);