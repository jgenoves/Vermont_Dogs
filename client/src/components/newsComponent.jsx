import React, {Component} from 'react';


const css = 'newsComponent';

/**This component renders a news component based on query from db passed in by props **/
export default class NewsComponent extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <article className={css}>

                <h3>{this.props.newsData.title}</h3>
                <h2>{this.props.newsData.topic}</h2>
                <br />
                <p>{this.props.newsData.author}</p>
                <p>{this.props.newsData.date}</p>
                <p>{this.props.newsData.content}</p>
            </article>
        );
    }
}


