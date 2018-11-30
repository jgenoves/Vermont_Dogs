import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact={true} path={'/'} render={() => (
                    <div className={"App"}>
                        <News/>
                    </div>
                )}/>
                <Route exact={true} path={'/news'} render={() => (
                    <div className={"App"}>
                        <News/>
                    </div>
                )}/>
                <Route exact={true} path={'/about-me'} render={() => (
                    <div className={"App"}>
                        <AboutMe/>
                    </div>
                )}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
