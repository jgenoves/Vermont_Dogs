import React, {Component} from 'react';


const css = "dogInfo";
export default class Dog extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <React.Fragment>

                <li className='dogRow'>
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

