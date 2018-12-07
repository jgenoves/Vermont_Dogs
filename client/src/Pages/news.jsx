import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer.jsx';
import NewsComponent from '../components/newsComponent';


const css = 'newsArticle';

export default class News extends Component {

    state = {
        newsArticles: [

        ]
    };

    componentDidMount() {
        fetch('/news')
            .then(res => res.json())
            .then(newsArticles => this.setState( { newsArticles } ));
    };
    render() {
        return (
            <React.Fragment>
                <Top/>
                <article className="newsPage">
                    <h2 className={"newsHeader"}>News updates and more!</h2>
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


