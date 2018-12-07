import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import ViewDogs from './Pages/view-dogs';
import {BrowserRouter, Route} from 'react-router-dom';
import AddDog from "./Pages/addDog";
import AddNews from "./Pages/addNews";
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
                <Route exact={true} path={'/view-dogs'} render={() => (
                    <div className={"App"}>
                        <ViewDogs />

                    </div>
                )}/>
                <Route exact={true} path={'/addDog'} render={() => (
                    <div className={"App"}>
                        <AddDog />

                    </div>
                )}/>
                <Route exact={true} path={'/addNews'} render={() => (
                    <div className={"App"}>
                        <AddNews />

                    </div>
                )}/>
            </div>

        </BrowserRouter>

    );
  }


}

export default App;
