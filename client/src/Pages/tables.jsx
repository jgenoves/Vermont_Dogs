import React, {Component} from 'react';
import Top from '../components/top';
import Footer from '../components/footer';


/** This page is for displaying all the tables in the DB **/
export default class Tables extends Component {

    state ={
        tblNews: [],
        tblDogs: [],
        tblPeople: [],
        tblTag: [],
        tblDogsTags: []

    };

    // componentDidMount() {
    //     fetch('/news/')
    //         .then(res => res.json())
    //         .then(tblNews => this.setState( { tblNews } ));
    // };


    // componentDidMount() {
    //     fetch('/dogs/')
    //
    //         .then(res => res.json())
    //         .then(tblDogs => this.setState( { tblDogs } ));
    //
    // }

    // componentDidMount() {
    //     fetch('/people')
    //
    //         .then(res => res.json())
    //         .then(tblPeople => this.setState( { tblPeople } ));
    //
    // }

    // componentDidMount() {
    //     fetch('/tags')
    //
    //         .then(res => res.json())
    //         .then(tblTags => this.setState( { tblTags } ));
    //
    // }

    // componentDidMount() {
    //     fetch('/DogsTags')
    //
    //         .then(res => res.json())
    //         .then(tblDogsTags => this.setState( { tblDogsTags } ));
    //
    // }


    render() {
        return (
            <React.Fragment>
                <Top/>
                <article>

                    <h2>tbl News</h2>
                    <p>{this.state.tblNews}</p>

                    <h2>tbl Dogs</h2>
                    <p>{this.state.tblDogs}</p>

                    <h2>tbl People</h2>
                    <p>{this.state.tblPeople}</p>

                    <h2>tbl Tags</h2>
                    <p>{this.state.tblTag}</p>

                    <h2>tbl DogsTags</h2>
                    <p>{this.state.tblDogsTags}</p>



                </article>
                <Footer/>


            </React.Fragment>
        );
    }
}
