import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {switchActiveStep} from '../store/step'

function Content() {

  const dispatch = useDispatch();
  const {activeStep, steps} = useSelector(state => state.step)

  const onStart = useCallback(() => {
    dispatch(switchActiveStep(steps.profile))
  }, [])

  const onBack = useCallback(() => {
    dispatch(switchActiveStep(steps.start))
  }, [])

  if (activeStep === steps.profile) {
    return (
      <div className="content">
        <h1 className='content__logo logo'>
          <span className='logo__first'>Resume</span>
          <span className='logo__second'>Generator</span>
        </h1>

        <button onClick={() => onBack()} className="content__btn btn">Start</button>
      </div>
    );
  }

  return (
    <div className="content">
      <h1 className='content__logo logo'>
        <span className='logo__first'>Resume</span>
        <span className='logo__second'>Generator</span>
      </h1>
      <p className="content__description">
        Say goodbye to the times when you looked at a blank document and wondered why you never took a creative writing
        class in college. Introducing ResumeGenerator, an app that will turn your boring work history into a compelling
        story that will have hiring managers begging for interviews. With our easy-to-use platform, you can put your
        best foot forward by crafting a resume that matches your skills and experience. So don't wait any longer, use
        ResumeGenerator today and let us help you get your dream job!
      </p>
      <button onClick={() => onStart()} className="content__btn btn">Start</button>
    </div>
  );
}

export default Content;