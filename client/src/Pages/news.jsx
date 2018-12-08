import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer.jsx';
import NewsComponent from '../components/newsComponent';

/**This component will render news components based on the rows queried from the DB **/

export default class News extends Component {
    //set array of news articles to be queried in state
    state = {
        newsArticles: [

        ]
    };

    //query news articles, assign to state
    componentDidMount() {
         fetch('/news/')
             .then(res => res.json())
             .then(newsArticles => this.setState( { newsArticles } ));
     };

    //Render Page
    render() {
        return (
            <React.Fragment>
                <Top/>
                <article className="newsPage">
                    <h2 className={"newsHeader"}>News updates and more!</h2>
                    <br />
                    <a className='newsNav' href='addNews'>Add News </a>
                    <a className='newsNav' href='addUser'>Register to receive updates by email!</a>
                    <ul>
                        {this.state.newsArticles.map(article =>
                            <NewsComponent newsData={article}/>
                        )}
                    </ul>
                </article>
                <Footer/>
            </React.Fragment>
        );
    }
}


