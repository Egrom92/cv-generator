import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setActiveStep, selectActiveStep} from '../store/step'
import {Start} from "../steps";
import {Resume} from "../components";

function Content() {

  const dispatch = useDispatch();
  const activeStep = useSelector(selectActiveStep)
  const {activeStepId, activeStepIdOnStart} = useSelector(state => state.step)

  useEffect(()=> {
    dispatch(setActiveStep(activeStepId))
  }, [dispatch])

  const onStart = () => {
    dispatch(setActiveStep(activeStepIdOnStart))
  }

  const content = activeStep.name === 'start' ? <Start  onStart={onStart}/> : <Resume/>

  return (
    <div className="content">
      {content}
    </div>
  );
}

export default Content;