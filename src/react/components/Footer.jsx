import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setPrevStep, setNextStep, STATE_NAMES} from '../store/step'
import {Btn, ProgressBar} from "./index";

const Footer = () => {
  const dispatch = useDispatch()
  const {activeState} = useSelector(state => state.step)

  return (
    <>
      <div className="sticky-footer"></div>
      <div className='footer'>
        <Btn disabled={activeState === STATE_NAMES.PDF} onClick={() => dispatch(setPrevStep())} text='prev'/>
        <ProgressBar/>
        <Btn disabled={activeState === STATE_NAMES.PDF} onClick={() => dispatch(setNextStep())} text='next'/>
      </div>
    </>

  )
}

export default Footer