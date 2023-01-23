import React from 'react';
import {Btn, Input} from "../index";
import {ErrorMessage, Field, FieldArray} from "formik";
import _ from 'lodash'

const AddButton = ({onClick}) => <Btn className='input-button' onClick={onClick} text='+'/>;
const RemoveButton = ({onClick, disabled}) => (
  <Btn className='input-button'
       onClick={onClick}
       disabled={disabled}
       text='-'
  />);

const InputArray = props => {
  const {type = 'text', name, id, label, startHelp, className, onChange, onBlur} = props
  const CN = `inputArray ${className ? className : ''}`

  return (
    <FieldArray name={name}>
      {
        ({form, push, remove}) => {
          const {values, setFieldValue} = form;
          const fields = _.get(values, name);

          const handleAdd = () => setFieldValue(name, [...fields, '']);
          const handleRemove = (index) => setFieldValue(name, fields?.filter((_, i) => i !== index));


          return (
            <div className={CN}>
              {fields?.map((field, index) => {
                  return (
                    <div key={index} className='field-wrap'>
                      <Field type={type}
                             placeholder=' '
                             name={`${name}[${index}]`}
                             id={id}
                             onChange={event => {
                               setFieldValue(`${name}[${index}]`, event.target.value);
                             }}
                             onBlur={onBlur}
                      />
                      {startHelp && <span className='startHelp'>{startHelp}</span>}
                      <ErrorMessage name={`fields[${index}]`} render={msg => <div className='error'>{msg}</div>}/>
                      <RemoveButton onClick={() => handleRemove(index)} disabled={fields.length === 1}/>
                      <AddButton onClick={handleAdd}/>
                    </div>
                  )
                }
              )}
              {label ? <label htmlFor={name}>{label}</label> : ''}
            </div>
          )
        }
      }
    </FieldArray>
  )
}

export default InputArray

