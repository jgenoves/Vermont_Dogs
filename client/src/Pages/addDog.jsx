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
                name="fldTagIds"
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
                                        checked={values.fldTagIds.includes(tag.id)}
                                        onChange={e => {
                                            if (e.target.checked) arrayHelpers.push(tag.id);
                                            else {
                                                const idx = values.fldTagIds.indexOf(tag.id);
                                                arrayHelpers.remove(idx);
                                            }
                                        }}
                                    />{" "}
                                    {tag.name}
                                </label>

                            </fieldset>
                        ))}
                        { touched.fldTagIds && errors.fldTagIds && <p className="errors">{errors.fldTagIds}</p> }
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
            fldName: name || 'Name',
            fldBreed: breed || 'Breed',
            fldAge: age || '1',
            fldDescription: desc || 'Description',
            fldTagIds: ["1"]
        }
    },
    validationSchema: Yup.object().shape({
        fldName: Yup.string().required("Please enter a name"),
        fldBreed: Yup.string().required("Please enter a breed"),
        fldAge: Yup.number().required("Please enter a valid age"),
        fldDescription: Yup.string().required("Please enter a description for the dog"),
        fldTagIds: Yup.array().required("At least one tag is required")

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


