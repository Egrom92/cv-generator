import React, {useCallback} from "react";
import {Formik, Form} from "formik";
import * as Yup from 'yup'
import {useSelector} from "react-redux";
import {selectActiveStep, setFormInputs} from "../../store/step";
import {Educations, Profile, Skills, Works} from "./index";
import {useDispatch} from "react-redux";

const CustomForm = () => {

  const componentMap = {
    profile: Profile,
    educations: Educations,
    skills: Skills,
    works: Works
  }

  const dispatch = useDispatch()

  const activeStep = useSelector(selectActiveStep)
  const {formInputs} = useSelector(state => state.step)
  const Component = componentMap[activeStep.name];
  const componentProps = {userValueName: activeStep.name};

  const initialValues = {
    profile: formInputs.profile,
    educations: formInputs.educations,
    skills: formInputs.skills,
    works: formInputs.works,
  }

  const handleBlur = useCallback(
    values => {
      dispatch(setFormInputs(values));
    },
    [dispatch],
  );

  const validationSchema = Yup.object().shape({
    profile: Yup.object().shape({
      name: Yup.string().required('Required'),
      surname: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format'),
      phone: Yup.string().min(5, "Must be more than 5 characters").matches(/^[0-9]+$/, 'Phone number is not valid'),
    })
  });

  return (
    <div className='custom-form-wrap'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >

        {({values, handleChange}) => {
          return (
            <>
              <Form className='custom-form'>
                <Component onChange={handleChange} onBlur={() => handleBlur(values)}  {...componentProps} />
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default CustomForm