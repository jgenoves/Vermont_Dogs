import React, {Component} from 'react';
import Top from '../components/top.jsx';
import Footer from '../components/footer';
import {Field, Formik} from "formik";
import * as Yup from "yup";

/** Thie file is for adding a new user to the DB **/
const addUser = () => (
    <Formik

        //Initialize values
        initialValues={{
            firstName: 'First Name',
            lastName: 'Last Name',
            address: '10 Cloverfield',
            email: 'email@email.com',
            phoneNumber: '2031234567'
        }}

        //Validation schema, provided by npm library Yup
        validationSchema={Yup.object().shape({
            firstName: Yup.string('Please enter a valid name').max(15, 'Please enter a valid name').required("Please enter your First Name"),
            lastName: Yup.string('Please enter a valid name').max(15, 'Please enter a valid name').required("Please enter your Last Name"),
            address: Yup.string('Please enter a valid address').max(25, "Please enter a valid address").required('Please enter your address'),
            email: Yup.string().email("Please enter a valid email").required("Please enter your email address"),
            phoneNumber: Yup.number().required("Please enter your phone number")
        })}

        //Handling for when form is submitted
        onSubmit={(values, {resetForm, setErrors, setSubmitting}) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));
                setSubmitting(false);
                window.alert("Thank you for your submission!");
                fetch("/users/", {
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

            <legend className="formLegend">Article Information</legend>

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    First Name:
                    <Field type="text" name="firstName" />
                </label>
                {touched.firstName && errors.firstName && <p className="errors">{errors.firstName}</p>}
            </fieldset>


            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    Last Name:
                    <Field type="text" name="lastName" />
                </label>
                {touched.lastName && errors.lastName && <p className="errors">{errors.lastName}</p>}
            </fieldset>

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    Address:
                    <Field type="text" name="address" />
                </label>
                {touched.address && errors.address && <p className="errors">{errors.address}</p>}
            </fieldset>

            <br/>


            <fieldset className="formInput">
                <label className="formLabel">
                    Email:
                    <Field type="email" name="email"/>

                </label>
                {touched.email && errors.email && <p className="errors">{errors.email}</p>}
            </fieldset>

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    Phone Number:
                    <Field type="text" name="phoneNumber"/>
                </label>
                {touched.phoneNumber && errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
            </fieldset>





            <button type="submit" disabled={isSubmitting}> Submit User Entry </button>

        </form>)}




    />
);


/** Main component for AddUser page **/
export default class AddUser extends Component {
    render() {
        return (
            <React.Fragment>
                <Top />
                {addUser()}
                <Footer />
            </React.Fragment>
        );
    }
}