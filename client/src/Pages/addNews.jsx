import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer';
import {Field, Formik} from "formik";
import * as Yup from "yup";

/** This file is for adding a new News article to the DB **/
const addNews = () => (
   <Formik
            //Initialize Values
            initialValues={{
                author: 'Author',
                title: 'Title',
                date: '12/1/12',
                content: 'Content',
                topic: 'default'
            }}

            //Validation Schema, provided by npm library Yup
           validationSchema={Yup.object().shape({
               author: Yup.string().required("Please enter an Author"),
               title: Yup.string().required("Please provide a title"),
               date: Yup.date().required("Please enter a valid date"),
               content: Yup.string().max(255).required("Please provide content for your news post"),
               topic: Yup.string().max(11).required("Please select a topic")
           })}

            //Handling for when form is submitted
           onSubmit={(values, {resetForm, setErrors, setSubmitting}) => {
               setTimeout(() => {
                   console.log(JSON.stringify(values, null, 2));
                   setSubmitting(false);
                   window.alert("Thank you for your submission!");
                   fetch("/news/", {
                       method: 'POST',
                       body: JSON.stringify(values)
                   }).then(function (response) {
                       if (response.status >= 400) {
                           throw new Error("Bad response from server");
                       }
                       return response.json();
                   }).then(function (values) {
                       console.log(JSON.stringify(values, null, 2));
                   });

               }, 500);
           }}

            //Rendering of form component
            render={({
                         handleSubmit,
                         setFieldValue,
                         setFieldTouched,
                         values,
                         errors,
                         touched,
                         isSubmitting
                     }) => ( <form onSubmit={handleSubmit} method={'POST'}>

                    <legend className="formLegend">Article Information</legend>

                    <br/>

                    <fieldset className="formInput">
                        <label className="formLabel">
                            Select a topic:
                            <Field component="select" name="topic">
                                <option value="Update">Updates</option>
                                <option value="URGENT">URGENT</option>
                                <option value="New Foster">New foster</option>
                                <option value="Good News!">Good News!</option>
                            </Field>
                        </label>
                        {touched.topic && errors.topic && <p className="errors">{errors.topic}</p>}
                    </fieldset>


                    <br/>


                    <fieldset className="formInput">
                        <label className="formLabel">
                             Author:
                            <Field type="text" name="author"/>

                        </label>
                        {touched.author && errors.author && <p className="errors">{errors.author}</p>}
                    </fieldset>

                    <br/>

                    <fieldset className="formInput">
                        <label className="formLabel">
                            Title:
                            <Field type="text" name="title"/>
                        </label>
                        {touched.title && errors.title && <p className="errors">{errors.title}</p>}
                    </fieldset>

                    <br/>

                    <fieldset className="formInput">
                        <label className="formLabel">
                            Date:
                            <Field type="date" name="date"/>

                        </label>
                        {touched.date && errors.date && <p className="errors">{errors.date}</p>}
                    </fieldset>

                    <br/>

                    <fieldset className="formInput">
                        <label className="formLabel">

                            <Field type="textarea" component="textarea" rows={4} col={50} name="content"/>

                        </label>
                        {touched.content && errors.content && <p className="errors">{errors.content}</p>}
                    </fieldset>



                <button type="submit" disabled={isSubmitting}> Submit News Article </button>

                </form>)}




   />
);


/** Main component for AddNews page **/
export default class AddNews extends Component {
    render() {
        return (
            <React.Fragment>
                <Top />
                {addNews()}
                <Footer />
            </React.Fragment>
        );
    }
}


