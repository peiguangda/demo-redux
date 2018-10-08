import React, {Component, Fragment} from 'react';
import About from './About';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./HomePage";
import {search} from '../actions/search';

class Header extends Component {

    handleChange = (event) => {
        console.log(event.target.value);
        this.props.dispatchSearch(event.target.value);
    };

    render() {
        var showSearchBar = () => {
            var resutl = null;
            if (this.props.data.loggingIn === true) {
                resutl = <form className="navbar-form navbar-left">
                    <div className="form-group">
                        <input
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search sentences"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-default">Search</button>
                </form>
            }
            return resutl;
        };

        var showDropdown = () => {
            if (this.props.data.loggingIn === true) {
                return (
                    <Fragment>
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">{this.props.data.email} <span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="/">Profile</a></li>
                            <li><a href="/">Setting</a></li>
                            <li><a href="/">For us</a></li>
                            <li role="separator" className="divider"/>
                            <li><a href="/">Log out</a></li>
                        </ul>
                    </Fragment>
                )
            } else {
                return <Fragment>
                    <NavLink exact to='/' activeClassName="selected">Login</NavLink>
                </Fragment>
            }
        };

        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                    <span className="icon-bar"/>
                                </button>
                                <NavLink exact to="/" className="navbar-brand"
                                         activeClassName="selected">ReduxDemo</NavLink>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                </ul>
                                {showSearchBar()}
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <NavLink exact to='/about' activeClassName="selected">About</NavLink>
                                    </li>
                                    <li className="dropdown">
                                        {showDropdown()}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/' component={HomePage}/>
                </Fragment>
            </Router>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {data: state.authentication};
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchSearch: word => dispatch(search(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
