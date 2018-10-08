import React, {Component, Fragment} from 'react';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div id="footer" className='row'>
                    <div className="container text-center">
                        <p className="text-muted credit" style={{color: '#000000'}}>Copy right by Quang Dai - 2018</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Footer;
