import React from "react";
import {ErrorMessage, Field, useField} from "formik";

const Input = (props) => {
  const {type = 'text', name, id, label, startHelp, className, children, onChange, onBlur} = props
  const CN = `field-wrap ${className ? className : ''}`

  const [field] = useField(name);
  const { value } = field;

  return (
    <div className={CN}>
      <Field type={type}
             placeholder=' '
             name={name}
             id={id}
             onChange={onChange}
             onBlur={onBlur}
             value={value || ''}
      />
      {startHelp && <span className='startHelp'>{startHelp}</span>}
      <ErrorMessage name={name} render={msg => <div className='error'>{msg}</div>}/>
      {label ? <label htmlFor={name}>{label}</label> : ''}
      {children}
    </div>
  )

}

export default Input