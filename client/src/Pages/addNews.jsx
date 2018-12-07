import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer';
import {Field, Formik} from "formik";
import * as Yup from "yup";


const addNews = () => (
   <Formik
            initialValues={{
                author: 'Author',
                title: 'Title',
                date: '12/1/12',
                content: 'Content',


            }}
           validationSchema={Yup.object().shape({
               author: Yup.string().required("Please enter an Author"),
               title: Yup.string().required("Please provide a title"),
               date: Yup.date().required("Please enter a valid date"),
               content: Yup.string().max(255).required("Please provide content for your news post"),
           })}
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

            render={({
                         handleSubmit,
                         setFieldValue,
                         setFieldTouched,
                         values,
                         errors,
                         touched,
                         isSubmitting
                     }) => ( <form onSubmit={handleSubmit} method={'POST'}>


                    <br/>

                    <legend className="formLegend">Article Information</legend>
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


