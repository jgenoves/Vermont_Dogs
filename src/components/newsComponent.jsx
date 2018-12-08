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

                <h3>{this.props.newsData.fldTitle}</h3>
                <h2>{this.props.newsData.fldTopic}</h2>
                <br />
                <p>{this.props.newsData.fldAuthor}</p>
                <p>{this.props.newsData.fldDate}</p>
                <p>{this.props.newsData.fldContent}</p>
            </article>
        );
    }
}


