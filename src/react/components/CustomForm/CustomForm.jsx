import React from "react";
import {Formik, Form, Field, ErrorMessage, FieldArray} from "formik";
import * as Yup from 'yup'

const CustomForm = (props) => {

  const initialValues = {
    profile: {
      name: '',
      surname: '',
      email: '',
      address: '',
      phoneNumbers: [''],
      social: {
        facebook: '',
        instagram: ''
      },
    },
    education: [{
      name: '',
      school: '',
      location: '',
      start: '',
      end: '',
    }],
    skills: [''],
    work: [{
      position: '',
      company: '',
      responsibility: '',
      location: '',
      start: '',
      end: '',
    }],
    comments: '',
  }
  const onSubmit = values => {
    console.log(values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    surname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required')
  })


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='custom-form'>
        <label htmlFor="name">Name</label>
        <Field type="text"
               name="name"
               id="name"
        />
        <ErrorMessage name='name'/>

        <label htmlFor="name">Surname</label>
        <Field type="text"
               name="surname"
               id="surname"
        />
        <ErrorMessage name='surname'/>

        <label htmlFor="name">Email</label>
        <Field type="text"
               name="email"
               id="email"
        />
        <ErrorMessage name='email'/>

        <label htmlFor="comment">Comment</label>
        <Field as='textarea' id='comments' name='comments'/>

        <label htmlFor="address">Address</label>
        <Field name='address'>
          {()=> {
            return <input id='address'/>
          }}
        </Field>

        <label htmlFor="instagram">Instagram</label>
        <Field name='social.instagram'/>

        <label htmlFor="facebook">Facebook</label>
        <Field name='social.facebook'/>

        <FieldArray name='phoneNumbers'>
          {
            fieldArrayProps => {
              // console.log('fieldArrayProps ----', fieldArrayProps);
              // console.log('fieldArrayProps ----', fieldArrayProps.form.values);
              const {push, remove, form} = fieldArrayProps
              const {values} = form
              const {phoneNumbers} = values

              return (
                <div>
                  <button type='button' onClick={()=> push('')}>{' '}+{' '}</button>
                  {
                    phoneNumbers.map((phoneNumber, index) => (
                      <div key={index}>
                        <Field name={`phoneNumbers[${index}]`}/>
                        <button type='button' onClick={()=> remove(index)}>{' '}-{' '}</button>
                      </div>
                    ))
                  }
                </div>
              )
            }
          }
        </FieldArray>


        <br/>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default CustomForm