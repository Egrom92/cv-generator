import React from 'react';
import {Btn, Input} from "../index";
import {FieldArray} from "formik";
import _ from 'lodash'

const AddButton = ({onClick}) => <Btn className='input-button' onClick={onClick} text='+'/>;
const RemoveButton = ({onClick, disabled}) => (
  <Btn className='input-button'
       onClick={onClick}
       disabled={disabled}
       text='-'
  />);

const InputArray = props => {
  const {title, name, className} = props
  const CN = `inputArray ${className ? className : ''}`

  return (
    <FieldArray name={name}>
      {
        ({form}) => {
          const {values, setFieldValue} = form;
          const items = _.get(values, name);

          const handleAdd = () => setFieldValue(name, [...items, '']);
          const handleRemove = (index) => setFieldValue(name, items.filter((_, i) => i !== index));


          return (
            <div className={CN}>
              {title ? <h4 className='field-array-title'>{title}</h4> : ''}
              {
                items.map((item, index) => (
                  <Input key={index} type='text' name={`${name}[${index}]`}>
                    <RemoveButton onClick={() => handleRemove(index)} disabled={items.length === 1}/>
                    <AddButton onClick={handleAdd}/>
                  </Input>
                ))
              }
            </div>
          )
        }
      }
    </FieldArray>
  )
}

export default InputArray

