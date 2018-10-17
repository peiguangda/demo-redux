import {Component, Fragment} from "react";
import {NavLink, Link} from "react-router-dom";
import React from "react";
import connect from "react-redux/es/connect/connect";
import {logout} from '../actions/logout';

class DropDown extends Component {

    handleLogout = () => {
        this.props.dispatchLogout();
    };

    render() {
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
                        <li><Link to="/" onClick={this.handleLogout}>Log out</Link></li>
                    </ul>
                </Fragment>
            )
        } else {
            return <Fragment>
                <NavLink exact to='/' activeClassName="selected">Login</NavLink>
            </Fragment>
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.authentication,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);