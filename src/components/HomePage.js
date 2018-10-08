import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import LoginForm from "./LoginForm";

class About extends Component {

    render() {
        const showResult = () => {
            if (this.props.result) {
                const results = this.props.result;
                const a = results.map((result, index) => {
                    return result.entries.map((entrie, index) => {
                        return entrie.senses.map((sense, index) => {
                            return sense.examples.map((example, index) => {
                                return <td>{example.table.text}</td>
                            })
                        })
                    })
                });
                console.log("a:" + a);
                console.log(results[0].entries[0].senses[0].examples[0].table);
                return <Fragment>
                    <h2>Search result</h2>
                    <table className="table table-condensed">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th>Example</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{}</td>
                            <td>{results[0].entries[0].senses[0].examples[0].table.text}</td>
                        </tr>
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
