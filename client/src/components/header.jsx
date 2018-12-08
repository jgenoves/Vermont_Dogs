import React, {Component} from 'react';
import logo from '../logo.png';




/** Header for site **/
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="App-Header">
                    <h1>Vermont Dogs</h1>
                    <img className='logo' src={logo} width="400" height="400" alt='logo'/>
                </header>
            </React.Fragment>
        );
    }
}