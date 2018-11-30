import React, {Component} from 'react';



const logo = require('../logo.png');



export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="App-Header">
                    <h1>Vermont Dogs</h1>
                    <image source={logo}>Vermont Dog Shelter</image>
                </header>
            </React.Fragment>
        );
    }
}