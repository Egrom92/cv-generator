import React from "react";
import {FieldArray} from "formik";
import _ from "lodash";
import {Btn, DatePicker, Input} from "../index";

const AddButton = ({onClick}) => <Btn className='input-button' onClick={onClick} text='+'/>;
const RemoveButton = ({onClick, disabled}) => (
  <Btn className='input-button'
       onClick={onClick}
       disabled={disabled}
       text='-'
  />);

const Works = (props) => {
  const {userValueName} = props

  return (
    <>
      <FieldArray name={userValueName}>
        {
          ({form}) => {
            const {values, setFieldValue} = form;
            const items = _.get(values, userValueName);

            const handleAdd = () => setFieldValue(userValueName, [...items, {position: '', company: '', responsibility: '', location: '', start: '', end: ''}]);
            const handleRemove = (index) => setFieldValue(userValueName, items.filter((_, i) => i !== index));

            return (
              items.map((item, index) => (
                  <div className='input-group-array' key={index}>
                    <Input type='text' label='Position' name={`${userValueName}[${index}].position`} {...props}/>
                    <Input type='text' label='Company' name={`${userValueName}[${index}].company`} {...props}/>
                    <Input type='text' label='Responsibility' name={`${userValueName}[${index}].responsibility`} {...props}/>
                    <Input type='text' label='Location' name={`${userValueName}[${index}].location`} {...props}/>
                    <div className="date-picker-wrap">
                      <DatePicker name={`${userValueName}[${index}].start`} label='Start' labelActive inputName={userValueName} index={index} direction='start'  {...props}/>
                      <DatePicker name={`${userValueName}[${index}].end`} label='End' labelActive inputName={userValueName} index={index} direction='end'  {...props}/>
                    </div>

                    <div className="input-group-array__actions">
                      <RemoveButton onClick={() => handleRemove(index)} disabled={items.length === 1}/>
                      <AddButton onClick={handleAdd}/>
                    </div>

                  </div>
                )
              )
            )
          }
        }
      </FieldArray>
    </>
  )
}

export default Works