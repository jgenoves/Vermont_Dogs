import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer.jsx';


export default class News extends Component {
    render() {
        return (
            <React.Fragment>
                <Top />
                <p>News goes here</p>
                <Footer />
            </React.Fragment>
        );
    }
}


