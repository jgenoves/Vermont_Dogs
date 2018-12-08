import React, {Component} from 'react';
import { Formik, Field, FieldArray, } from "formik";
import * as Yup from 'yup';
import Top from '../components/top';
import Footer from '../components/footer';

/**This file is for adding a new dog to the db **/


//This function is for rendering a singular radio button
const RadioButton = ({
                         field: { name, value, onChange, onBlur },
                         id,
                         label,
                         className,
                         ...props
                     }) => {
    return (
        <React.Fragment>
            <input
                name={name}
                id={id}
                type="radio"
                value={id}
                checked={id === value}
                onChange={onChange}
                onBlur={onBlur}
                className={"radio-button"}
                {...props}
            />
            <label htmlFor={id}>{label}</label>
        </React.Fragment>
    );
};

//This function will render a group of radio buttons
const RadioButtonGroup = ({
                              value,
                              error,
                              touched,
                              id,
                              label,
                              className,
                              children
                          }) => {
    return (

            <fieldset>
                <legend>{label}</legend>
                {children}

            </fieldset>
    );
};


//Main component for adding a new dog, made using Formik npm
const addDog = () => (

        <Formik
            //Initialize values
            initialValues={{
                name: 'Name',
                breed: 'Breed',
                age: '1',
                desc: 'Description',
                photo: 'photo.png',
                status: "Available",

            }}

            //validation schema (functions for validation done through npm library Yup
            validationSchema={Yup.object().shape({
                    name: Yup.string().required("Please enter a name"),
                    breed: Yup.string().required("Please enter a breed"),
                    age: Yup.number().required("Please enter a valid age"),
                    desc: Yup.string().required("Please enter a description for the dog"),
                    photo: Yup.string('Please enter a valid file'),
                    status: Yup.string().required("Please select a status")
                })
            }

            //Handling when form is submitted
            onSubmit={(values, {resetForm, setErrors, setSubmitting}) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    window.alert("Thank you for your submission!");
                    fetch("/dogs/", {
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

            //Rendering of actual form component
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

                <legend className="formLegend">Dog Information</legend>
                <fieldset className="formInput">
                    <label className="formLabel">
                        Name of Dog:
                        <Field type="text" name="name"/>

                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                </fieldset>

                <br/>

                <fieldset className="formInput">
                    <label className="formLabel">
                        Dog Breed:
                        <Field type="textbox" name="breed"/>
                    </label>
                    {touched.breed && errors.breed && <p className="errors">{errors.breed}</p>}
                </fieldset>

                <br/>

                <fieldset className="formInput">
                    <label className="formLabel">
                        Age:
                        <Field type="number" name="age"/>

                    </label>
                    {touched.age && errors.age && <p className="errors">{errors.age}</p>}
                </fieldset>

                <br/>

                <fieldset className="formInput">
                    <label className="formLabel">

                        <Field type="textarea" component="textarea" rows={4} col={50} name="desc"/>

                    </label>
                    {touched.desc && errors.desc && <p className="errors">{errors.desc}</p>}
                </fieldset>


                    <fieldset className="formInput">
                        <label className="formLabel">
                            Photo(Optional):
                            <Field type="textbox" name="photo"/>
                        </label>
                        {touched.photo && errors.photo && <p className="errors">{errors.photo}</p>}
                    </fieldset>


                    <legends>Choose the status of the dog</legends>
                    <RadioButtonGroup
                        id="status"
                        value={values.status}
                        error={errors.status}
                        touched={touched.status}
                    >
                        <Field
                            component={RadioButton}
                            name="status"
                            id="Adopted"
                            label="Adopted"
                        />
                        <Field
                            component={RadioButton}
                            name="status"
                            id="Available"
                            label="Available"
                        />

                        <Field
                            component={RadioButton}
                            name="status"
                            id="Fostered"
                            label="Fostered"
                        />
                    </RadioButtonGroup>



                <button type="submit" disabled={isSubmitting}> Submit Dog </button>

            </form>
            )}

            />



);


//Main component for running the page AddDog

export default class AddDog extends Component {

    render() {
        return (
            <React.Fragment>
                <Top/>
                <h2 className="addDogHeader">Add a new dog to our shelter</h2>
                {addDog()}
                <Footer/>
            </React.Fragment>
        );
    }
}


