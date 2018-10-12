import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import LoginForm from "./LoginForm";

class About extends Component {

    render() {
        console.log(this.props);
        const showResult = () => {
            if (this.props.result) {
                var count = 0;
                const results = this.props.result;
                const value = results.map((result, index) => {
                    return result.entries.map((entrie, index) => {
                        return entrie.senses.map((sense, index) => {
                            return sense.examples.map((example, index) => {
                                return <tr key={count}>
                                    <td>{++count}</td>
                                    <td>{result.lexical_category}</td>
                                    <td>{sense.definitions}</td>
                                    <td>{example.table.text}</td>
                                </tr>
                            })
                        })
                    })
                });
                return <Fragment>
                    <h2>Search result</h2>
                    <table className="table table-condensed">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Type</th>
                            <th>Mean</th>
                            <th>Example</th>
                        </tr>
                        </thead>
                        <tbody>
                        {value}
                        </tbody>
                    </table>
                </Fragment>
            } else {
                return <div>Search in navbar to find examples</div>
            }
        };

        const showHomePage = () => {
            if (this.props.loggingIn === true) {
                return <Fragment>
                    <div className="container">
                        {showResult()}
                    </div>
                </Fragment>
            } else
                return <LoginForm/>
        };

        return (
            <Fragment>
                {showHomePage()}
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loggingIn: state.authentication.loggingIn,
        result: state.search.result
    };
};


export default connect(mapStateToProps)(About);
