import React, {Component} from 'react';



const css = 'Nav';

export default class Nav extends Component {
    render() {
        return (
            <nav className={css}>
                <a className={css} href='News'>News</a>
                <a className={css} href='AboutUs'>About Us</a>
                <a className={css} href='OurDogs'>View our Dogs</a>
                <a className={css} href='addDog'>Add a dog</a>
                <a className={css} href='addUser'>Add a User</a>
                <a className={css} href='Table'>View Tables</a>
            </nav>
        );
    }
}


