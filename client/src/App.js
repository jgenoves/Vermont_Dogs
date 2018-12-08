import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import ViewDogs from './Pages/view-dogs';
import {Route,Switch} from 'react-router-dom';
import AddDog from "./Pages/addDog";

class App extends Component {
    render() {
        const App = () => (

        <div>
        <Switch>
                <Route exact={true} path={'/'} component={News}/>
                <Route exact={true} path={'/news'} component={News}/>
                <Route exact={true} path={'/AboutUs'} component={AboutMe}/>
                <Route exact={true} path={'/OurDogs'} component={ViewDogs}/>
                <Route exact={true} path={'/addDog'} component={AddDog}/>

        </Switch>
        </div>
    );
        return (
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;
