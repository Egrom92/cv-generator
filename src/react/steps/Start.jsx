import React from "react";
import {Logo} from "../components";

const Start = (props) => {
  const {onStart} = props
  return (
    <>
      <Logo/>
      <p className="start__description">
        Say goodbye to the times when you looked at a blank document and wondered why you never took a creative writing
        class in college. Introducing ResumeGenerator, an app that will turn your boring work history into a compelling
        story that will have hiring managers begging for interviews. With our easy-to-use platform, you can put your
        best foot forward by crafting a resume that matches your skills and experience. So don't wait any longer, use
        ResumeGenerator today and let us help you get your dream job!
      </p>
      <button onClick={onStart} className="start__btn btn">Start</button>
    </>
  )

}

export default Start