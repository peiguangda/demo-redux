import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {history} from "../actions/history";

class History extends Component {

    componentDidMount() {
        this.props.dispatchGetHistory();
    }

    componentDidUpdate(){
        this.props.dispatchGetHistory();
    }

    render() {
        const showHistory = () => {
            if (this.props.data) {
                return this.props.data.map((item, index) => {
                    return <Fragment key={index}>
                        <tr>
                            <td>{item.word}</td>
                            <td>{item.times}</td>
                            <td>{item.updated_at}</td>
                        </tr>
                    </Fragment>
                })
            }
        };

        return (
            <Fragment>
                <div className="container">
                    <h1>History</h1>
                    <table className="table table-condensed">
                        <thead>
                        <tr>
                            <th>Word</th>
                            <th>Times</th>
                            <th>Last time search</th>
                        </tr>
                        </thead>
                        <tbody>
                        {showHistory()}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.history.data
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchGetHistory: () => dispatch(history())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History);
