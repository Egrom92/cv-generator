import React from "react";
import {Input, InputArray} from "../index";

const Profile = (props) => {
  const {userValueName} = props
  return (
    <>
      <Input type='text' name={`${userValueName}.name`} label='Name' {...props}/>
      <Input type='text' name={`${userValueName}.surname`} label='Surname' {...props}/>
      <Input type='text' name={`${userValueName}.profession`} label='Profession' {...props}/>
      <Input type='email' name={`${userValueName}.email`} label='Email' {...props}/>
      <Input type='text' name={`${userValueName}.phone`} label='Phone' startHelp='+' className='phoneInput' {...props}/>


      <Input type='text' name={`${userValueName}.location`} label='Location' {...props}/>

      <InputArray label='Links' title='Links' name={`${userValueName}.links`} className='links' {...props}/>

      <Input type='text' name={`${userValueName}.social.instagram`} label='Instagram' {...props}/>
      <Input type='text' name={`${userValueName}.social.facebook`} label='Facebook' {...props}/>
    </>
  )
}

export default Profile