import React from "react";
import {PDF} from "./PDF";
import {Footer, Logo, Navbar} from "./index";
import {CustomForm} from "./CustomForm";
import {useSelector} from "react-redux";


const Resume = () => {

  const componentMap = {
    FORM: CustomForm,
    PDF: PDF
  }

  const {activeState} = useSelector(state => state.step)
  const Component = componentMap[activeState];

  return (
    <div className='resume'>
      <Navbar/>
      <div className="resume__wrapper">
        <Logo/>
        <Component/>
        <Footer/>
      </div>
    </div>
  )
}
export default Resume