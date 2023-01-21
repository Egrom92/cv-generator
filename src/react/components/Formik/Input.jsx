import React from "react";
import {ErrorMessage, Field} from "formik";

const Input = (props) => {
  const {type = 'text', name, id, label} = props
  return (
    <div className="field-wrap">
      <Field type={type}
             name={name}
             id={id}
             placeholder=' '
      />
      <ErrorMessage name={name} render={msg => <div className='error'>{msg}</div>}/>
      <label htmlFor={name}>{label}</label>
    </div>
  )

}

export default Input