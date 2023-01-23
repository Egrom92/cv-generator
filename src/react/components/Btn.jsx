import React from "react";

const Btn = (props) => {
  const {text, onClick, className, disabled} = props
  const CN = `btn ${className ? className : null}`

  return (
    <button disabled={disabled} onClick={onClick} className={CN}>
      {text}
    </button>
  )
}

export default Btn