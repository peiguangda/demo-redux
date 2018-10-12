import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/login';
import {getInfo} from '../actions/getInfo';


class LoginForm extends Component {

    onSubmitLogin = (event) => {
        event.preventDefault();
        this.props.dispatchLogin(event.target.email.value, event.target.password.value);
    };

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="container col-xs-6 col-sm-4 col-md-offset-4">
                        <form className='login-form' onSubmit={this.onSubmitLogin}>
                            <div className="form-group form-inline">
                                <label className='email-form'>Email</label>
                                <input name='email' type='text' className='form-control'/>
                            </div>
                            <div className="form-group form-inline">
                                <label className='password-form'>Password</label>
                                <input name='password' type='password' className='form-control'/>
                            </div>
                            <button type="submit" className="btn btn-default login-btn">Login</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { data: state.authentication };
};

function mapDispatchToProps(dispatch) {
    return {
        default: dispatch(getInfo()),
        dispatchLogin: (email, password) => dispatch(login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
