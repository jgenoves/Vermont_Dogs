
import React, {Component} from 'react';
import { Formik, Field, FieldArray, withFormik} from "formik";
import * as Yup from 'yup';
import Top from '../components/top';
import Footer from '../components/footer';


/**This file is for handling editing a dog **/


const tags = {};
 fetch('/api/dogtag/2')
  .then(res => res.json())
  .then(tags => this.setState( { tags } ))
     .catch(()=>{
         console.log("Error")
     })

     {console.log(tags)}





//Component to render a single radio button
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
//Component for a group of radio buttons
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


//Main component for editing dog
const editDogComponent = ({
                              handleSubmit,
                              setFieldValue,
                              setFieldTouched,
                              values,
                              errors,
                              touched,
                              isSubmitting
                          }) => (
    <form onSubmit={handleSubmit}>



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
);

//Formik handler for dog form, allowing us to pass in values

const editDogForm = withFormik({

    mapPropsToValues: (id, name, breed, age, desc, photo, status) => ({
        id: id,
        name: name,
        breed: breed,
        age: age,
        desc: desc,
        photo: photo,
        status: status,
    }),
    validationSchema: (Yup.object().shape({
            name: Yup.string().required("Please enter a name"),
            breed: Yup.string().required("Please enter a breed"),
            age: Yup.number().required("Please enter a valid age"),
            desc: Yup.string().required("Please enter a description for the dog"),
            photo: Yup.string('Please enter a valid file'),
            status: Yup.string().required("Please select a status")
        })
    ),
    onSubmit: (values, {resetForm, setErrors, setSubmitting}) => {
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
    }

})(editDogComponent);


//Main component for tags form
const editTags = ({
                      handleSubmit,
                      setFieldValue,
                      setFieldTouched,
                      values,
                      errors,
                      touched,
                      isSubmitting

                  }) => (

    <form onSubmit={handleSubmit} method={'POST'}>


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
);


//Formik handler for tag form, allowing us to pass in the tags associated with the dogs ID from db
const editTagsForm = withFormik({

    mapPropsToValues: (tags, dogId) => ({
        tagIds: tags,
        dogId: dogId
    }),
    validationSchema: (Yup.object().shape({
            tagIds: Yup.array().required("Please select a checkbox")
        })
    ),
    onSubmit: (values, {resetForm, setErrors, setSubmitting}) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            window.alert("Thank you for your submission!");


            for(var i = 0; i < this.state.tagIds.size; i++){
                const insert = [{pfkDogId: this.state.dogId, pfkTagId: this.state.tagIds.get(i)}];

                fetch("/dogstags/", {
                    method: 'POST',
                    body: JSON.stringify(insert)
                }).then(function (response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                }).then(function (insert) {
                    console.log(JSON.stringify(insert, null, 2));
                })
            }



        }, 500);
    }
})(editTags);


//Button for removing dog from DB
const deleteDog = (
    <Formik initialValues={{
        deleteDog: 0
    }}

        //delete dog on submit

            render={({
                         handleSubmit,
                         setFieldValue,
                         setFieldTouched,
                         values,
                         errors,
                         touched,
                         isSubmitting
                     }) => ( <form onSubmit={handleSubmit} method={'POST'}>

                    <legend className="formLegend">Delete Dog?</legend>

                    <button type="submit" disabled={isSubmitting}> Delete Dog </button>

                </form>
            )}
    />

);


//Main component for rendering the EditDog page
export default class EditDog extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <Top/>
                {/*<h2 className="addDogHeader">Edit a dog in our shelter</h2>*/}
                {/*{editDogForm(this.props.dogData.pmkDogs, this.props.dogData.fldName, this.props.dogData.fldBreed, this.props.dogData.fldAge,*/}
                    {/*this.props.dogData.fldDescription, this.props.dogData.fldPhoto, this.props.dogData.fldStatus)}*/}
                {/*{editTagsForm(this.props.tags, this.props.dogData.pmkDogs)}*/}
                {/*{deleteDog()}*/}
                {/*<Footer/>*/}
            </React.Fragment>
        );
    }
}
