import React, {Component} from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

const css = 'About-Me';

export default class AboutMe extends Component {
    render() {
        return <React.Fragment>

            <Header/>
            <article className={css}>
                <h2>About us: Vermont Shelter</h2>

                <p>
                    Here is where we are going to a put a basic bio for
                    the about us page. Im going to keep typing words to fill up
                    space and see how much room I can take up on the page with
                    a paragraph. The quick brown fox jumped over the lazy sheep dog
                    and then went to KKD to get a shiner, that cost way to much money
                    and is not even that good. He should've went to Henry Street Deli
                    instead and got a bacon egg and cheese with Siracha on a hardroll
                </p>
            </article>

            <Footer/>

        </React.Fragment>;
    }
}