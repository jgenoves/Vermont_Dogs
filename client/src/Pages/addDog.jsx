import React, {Component} from 'react';
import { Formik, Field, FieldArray, } from "formik";
import * as Yup from 'yup';
import Top from '../components/top';
import Footer from '../components/footer';

const tags = [
    { id: "1", name: "Good Dog"},
    { id: "2", name: "Large"},
    { id: "3", name: "Sheds a lot"},

];

const addDog = () => (
    <React.Fragment>
        <Formik
            initialValues={{
                name: 'Name',
                breed: 'Breed',
                age: '1',
                desc: 'Description',
                photo: 'photo.png',
                status: "Available",

            }}
            validationSchema={Yup.object().shape({
                    name: Yup.string().required("Please enter a name"),
                    breed: Yup.string().required("Please enter a breed"),
                    age: Yup.number().required("Please enter a valid age"),
                    desc: Yup.string().required("Please enter a description for the dog"),
                    photo: Yup.string('Please enter a valid file'),
                    status: Yup.string().required("Please select a status")
                })
            }
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

                <br/>
                    <fieldset className="formInput">
                        <label className="formLabel">
                            Photo(Optional):
                            <Field type="textbox" name="photo"/>
                        </label>
                        {touched.photo && errors.photo && <p className="errors">{errors.photo}</p>}
                    </fieldset>

                <br/>


                <button type="submit" disabled={isSubmitting}> Submit Dog </button>

            </form>
            )}

            />


    </React.Fragment>
);

const addTags = () => (
    <React.Fragment>

        <Formik
            initialValues={{
                tagIds: ["1"],
            }}
            validationSchema={Yup.object().shape({
                tagIds: Yup.array().required("Please select a checkbox")
            })
            }

            onSubmit={(values, {resetForm, setErrors, setSubmitting}) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    window.alert("Thank you for your tags submission!");
                    fetch("/tags/", {
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

            render={({handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting}) =>  ( <form onSubmit={handleSubmit} method={'POST'}>


                <FieldArray
                    name="tagIds"
                    render={arrayHelpers => (
                        <React.Fragment>
                            <legend>Choose some tags for your dog</legend>
                            {tags.map(tag => (
                                <fieldset key={tag.id}>
                                    <label>

                                        <input
                                            name="tagIds"
                                            type="checkbox"
                                            value={tag.id}
                                            checked={values.tagIds.includes(tag.id)}
                                            onChange={e => {
                                                if (e.target.checked) arrayHelpers.push(tag.id);
                                                else {
                                                    const idx = values.tagIds.indexOf(tag.id);
                                                    arrayHelpers.remove(idx);
                                                }
                                            }}
                                        />{" "}
                                        {tag.name}
                                    </label>

                                </fieldset>
                            ))}
                            { touched.tagIds && errors.tagIds && <p className="errors">{errors.tagIds}</p> }
                        </React.Fragment>
                        ) }
                    />
                    <br/>
                    <button type="submit" disabled={isSubmitting}> Submit Tags </button>
                </form>
            )}
            />
    </React.Fragment>
    );

export default class AddDog extends Component {

    render() {
        return (
            <React.Fragment>
                <Top/>
                <h2 className="addDogHeader">Add a new dog to our shelter</h2>
                {addDog()}
                {addTags()}
                <Footer/>
            </React.Fragment>
        );
    }
}


