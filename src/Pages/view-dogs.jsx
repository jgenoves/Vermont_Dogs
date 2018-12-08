import React, {Component} from 'react';
import Top from '../components/top';
import Footer from '../components/footer';
import Dog from '../components/dog.jsx'



/** This component is for rendering the ViewDogs page based on each row quereied in the DB**/
export default class ViewDogs extends Component {
    //set array of dogs to be queried from db in the state
    state = {
        dogs: [

        ],
    };

    //query the db
    componentDidMount() {
         fetch('/dogs')
             .then(res => res.json())
             .then(dogs => this.setState( { dogs } ))
             .catch(()=>{
                 console.log("Error")
             });

     }

     //render the page and each dog component based on query
    render() {

        return (
            <React.Fragment>
                <Top/>
                <article className="dogPage">
                    <h2 className={"viewDogsHeader"}>Here are our dogs that we currently have at our shelter</h2>
                    <ul>
                        {this.state.dogs.map(dog =>
                            <Dog
                                key={dog.pmkDogs}
                                dogData={dog}

                            />
                        )}
                    </ul>
                </article>
                <Footer/>
            </React.Fragment>
        );
    }
}


