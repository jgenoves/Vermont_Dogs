import React, { Component } from 'react';
import './App.css';
import AboutMe from './Pages/about-me.jsx';
import News from './Pages/news.jsx';
import ViewDogs from './Pages/view-dogs';
import {Route,Switch} from 'react-router-dom';
import AddDog from "./Pages/addDog";
import AddUser from "./Pages/addUser";
//import Tables from "./Pages/tables";
//import EditDog from "./Pages/editDog";

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
            <Route exact={true} path={'/AddUser'} component={AddUser}/>
            {/*<Route exact={true} path={'/Tables'} component={Tables}/>*/}
            {/*<Route exact={true} path={'/Edit'} component={EditDog}/>*/}

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
