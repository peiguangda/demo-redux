import React, {Component, Fragment} from 'react';
import About from './About';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from "./HomePage";
import DropDown from './DropDown';
import SearchBar from './SearchBar';

class Header extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid nav-config">
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
                                <SearchBar/>
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <NavLink exact to='/about' activeClassName="selected">About</NavLink>
                                    </li>
                                    <li className="dropdown">
                                        <DropDown/>
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
    return {
    };
};

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
