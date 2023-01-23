import React, {useCallback, useState} from "react";
import {ErrorMessage, Field, useField, useFormikContext} from "formik";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {updateWorkDate} from "../../store/step";
import {useDispatch} from "react-redux";

export const DatePickerField = props => {
  const {label, name, inputName, index, direction, labelActive=false} = props

  const dispatch = useDispatch()

  const handleChangeDate = useCallback(
    (value) => {
      dispatch(updateWorkDate({index, inputValue: inputName, direction, date: new Date(value).getTime()}));
    },
    [dispatch],
  );

  return (
    <div className={`field-wrap ${labelActive ? 'label-active' : null}`}>
      <Field type='text' name={name} placeholder=' '>
        {({form, field}) => {
          const {setFieldValue} = form
          const {value} = field
          return (
            <DateView
              {...field}
              {...props}
              selected={value}
              onChange={val => {
                handleChangeDate(val)
                setFieldValue(name, new Date(val).getTime());
              }}
              value={new Date(value).getTime() || ''}
            />
          )
        }}

      </Field>
      <ErrorMessage name={name} render={msg => <div className='error'>{msg}</div>}/>
      {label ? <label htmlFor={name}>{label}</label> : ''}
    </div>
  );
};

export default DatePickerField;
