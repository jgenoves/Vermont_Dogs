import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import ViewDogs from './Pages/view-dogs';
import {BrowserRouter, Route} from 'react-router-dom';
import AddDog from "./Pages/addDog";

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
                <Route exact={true} path={'/AboutUs'} render={() => (
                    <div className={"App"}>
                        <AboutMe/>
                    </div>
                )}/>
                <Route exact={true} path={'/OurDogs'} render={() => (
                    <div className={"App"}>
                        <ViewDogs />

                    </div>
                )}/>
                <Route exact={true} path={'/addDog'} render={() => (
                    <div className={"App"}>
                        <AddDog />

                    </div>
                )}/>
            </div>

        </BrowserRouter>

    );
  }


}

export default App;
