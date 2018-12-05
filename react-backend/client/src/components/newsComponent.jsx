import React, {Component} from 'react';


const css = 'newsComponent';

export default class NewsComponent extends Component {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <article className={css}>

                <h3>{this.props.newsData.title}</h3>
                <br />
                <p>{this.props.newsData.author}</p>
                <p>{this.props.newsData.date}</p>
                <p>{this.props.newsData.content}</p>
            </article>
        );
    }
}


