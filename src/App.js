import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import ViewDogs from './Pages/view-dogs';
import {BrowserRouter, Route} from 'react-router-dom';
import AddDog from "./Pages/addDog";
import AddNews from "./Pages/addNews";
import AddUser from "./Pages/addUser";
import EditDog from "./Pages/editDog";
import Tables from "./Pages/tables"
class App extends Component {

  render() {

    return (

        /**This browser router is used to route the app to different pages based on the URl **/

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

                <Route exact={true} path={'/addUser'} render={() => (
                    <div className={"App"}>
                        <AddUser />

                    </div>
                )}/>

                <Route exact={true} path={'/editDog'} render={() => (
                    <div className={"App"}>
                        <EditDog />

                    </div>
                )}/>

                <Route exact={true} path={'/tables'} render={() => (
                    <div className={"App"}>
                        <Tables />

                    </div>
                )}/>

            </div>

        </BrowserRouter>

    );
  }


}

export default App;
