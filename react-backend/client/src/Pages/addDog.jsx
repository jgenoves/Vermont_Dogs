import React, {Component} from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage, withFormik } from "formik";
import * as Yup from 'yup';
import Top from '../components/top';
import Footer from '../components/footer';



const addDog = ({
    values,
    errors,
    touched,
    isSubmitting,

                }) => (
    <Form className="addDogForm">

        <article>
            <legend className="formLegend">Dog Information</legend>
            <fieldset className="formInput">
                <label className="formLabel">
                    Name of Dog:
                <Field type="text" name="name" />

                </label>
                { touched.name && errors.name && <p className="errors">{errors.name}</p> }
            </fieldset>

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    Dog Breed:
                <Field type="textbox" name="breed" />
                </label>
                { touched.breed && errors.breed && <p className="errors">{errors.breed}</p> }
            </fieldset>

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">
                    Age:
                <Field type="number" name="age" />

                </label>
                { touched.age && errors.age && <p className="errors">{errors.age}</p> }
            </fieldset >

            <br/>

            <fieldset className="formInput">
                <label className="formLabel">

                    <Field type="textarea" component="textarea" rows={4} col={50} name="desc" />

                </label>
                { touched.desc && errors.desc && <p className="errors">{errors.desc}</p> }
            </fieldset>

            <FieldArray
                name="tagIds"
                render={arrayHelpers => (
                    <React.Fragment>
                        <label className="tagsLabel">
                            Choose some tags for your dog
                        </label>
                        {tags.map(tag => (
                            <fieldset className="tags" key={"tag"+ tag.id}>
                                <label>
                                    <Field
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
                )}
            />
            <br/>

            <button type="submit" disabled={isSubmitting}> Submit </button>
        </article>
    </Form>
);


const tags = [
    { id: "1", name: "Friendly" },
    { id: "2", name: "Large" },
    { id: "3", name: "Good with Kids" }
];


const FormikApp = withFormik({
    mapPropsToValues({name, breed, age, desc}){
        return{
            name: name || 'Name',
            breed: breed || 'Breed',
            age: age || '1',
            desc: desc || 'Description',
            tagIds: ["1"],


        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter a name"),
        breed: Yup.string().required("Please enter a breed"),
        age: Yup.number().required("Please enter a valid age"),
        desc: Yup.string().required("Please enter a description for the dog"),
        tagIds: Yup.array().required("At least one tag is required")

    }),

    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            window.alert("Thank you for your submission!");

        }, 1500);






    },



})(addDog);



export default class AddDog extends Component {

    render() {
        return (
            <React.Fragment>
                <Top/>
                <h2 className="addDogHeader">Add a new dog to our shelter</h2>
                <FormikApp/>

                <Footer/>
            </React.Fragment>
        );
    }
}


