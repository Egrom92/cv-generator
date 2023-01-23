import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';

const ProgressBar = () => {
  const [progressBarWidth, setProgressBarWidth] = useState(0)
  const {activeStepId, steps} = useSelector(state => state.step)

  useEffect(() => {
    const partWidth = 100 / steps.length
    setProgressBarWidth(partWidth * activeStepId)
  }, [activeStepId, steps.length])

  return (
    <div className='progress-bar'>
      <div className="progress-bar__inner" style={{ width: `${progressBarWidth}%` }}></div>
    </div>
  )
}

export default ProgressBar