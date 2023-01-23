import React from "react";
import {InputArray} from "../index";



const Skills = (props) => {
  const {userValueName} = props
  return <InputArray label='Skills' title='Skills' name={userValueName} className='skills' {...props}/>
}

export default Skills