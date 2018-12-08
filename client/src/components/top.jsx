import React, {Component} from 'react';
import Header from './header.jsx';
import Nav from './nav.jsx';


/**Top for site **/

export default class Top extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Nav/>
            </React.Fragment>
        );
    }
}


