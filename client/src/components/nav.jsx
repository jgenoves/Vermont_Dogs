import React, {Component} from 'react';

const css = 'Nav';

/**Nav for site **/
export default class Nav extends Component {
    render() {
        return (
            <nav className={css}>
                <a className={css} href='news'>News</a>
                <a className={css} href='about-me'>About Us</a>
                <a className={css} href='view-dogs'>View our Dogs</a>
                <a className={css} href='addDog'>Add a dog</a>
                <a className={css} href='tables'>Tables</a>
            </nav>
        );
    }
}




