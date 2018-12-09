import React, {Component} from 'react';




const Link = require('react-router-dom').Link;
const css = "dogInfo";
export default class Dog extends Component {



    constructor(props){

        //Load in Dog tags from query
        super(props);


        this.state={
            tags: []
        };

    }

    //Query dog tags
    componentDidMount() {
        fetch('/tags/'+(this.props.dogData.pmkDogId))

            .then(res => res.json())
            .then(tags => this.setState( { tags } ));

    }
    render() {
        return (
            <React.Fragment>

                <li className='dogRow'>

                    <Link to='editDog' params={(this.props.dogData, this.state.tags)}> Edit </Link>

                    <article  className = 'dogPhotoC'>

                        <figure className='dogPhotoFrame'>
                            <img className = 'dogPhoto' src={require('../'+ this.props.dogData.fldPhoto)}/>
                            <figcaption className={css}>Name: {this.props.dogData.fldName}</figcaption>
                        </figure>
                    </article>

                    <article className='dogInfoC'>
                        <p className={css} width="100%">Age: {this.props.dogData.fldAge}</p>
                        <br/>
                        <p className={css}>Breed: {this.props.dogData.fldBreed}</p>
                        <br/>
                        <p className={css}>Description: {this.props.dogData.fldDescription}</p>
                    </article>
                </li>


            </React.Fragment>
        );
    }
}