import React, {useEffect, useState} from "react";
import {Btn} from "./index";
import {useSelector, useDispatch} from 'react-redux';
import {useCallback} from "react";
import {setActiveStep, setActiveState, STATE_NAMES, toggleActiveState} from "../store/step";
import {hasNonEmptyValue} from "../helpers";

const Navbar = () => {
  const [hasFormInputs, setHasFormInputs] = useState(false);

  const dispatch = useDispatch();
  const {activeStepId, steps, activeState, formInputs} = useSelector(state => state.step)

  useEffect(() => {
    console.log('formInputs ----', formInputs);
    setHasFormInputs(hasNonEmptyValue(formInputs));
  }, [formInputs]);

  const onClickHandler = useCallback((stepId) => {
      dispatch(setActiveState(STATE_NAMES.FORM))
      dispatch(setActiveStep(stepId))
    },
    [dispatch]
  );


  const btnText = activeState === STATE_NAMES.PDF ? 'edit' : 'make'

  const createPDFHandler = useCallback(
    () => dispatch(toggleActiveState()),
    [dispatch]
  );

  return (
    <div className="navbar">
      <ul className="navbar__list">
        {steps.map(({id, name}) => (
          <li
            key={id}
            onClick={() => onClickHandler(id)}
            className={`navbar__point ${activeStepId === id ? "active" : ""}`}
          >
            {name.toUpperCase()}
          </li>
        ))}
      </ul>
      <Btn disabled={!hasFormInputs} text={btnText} onClick={createPDFHandler}/>
    </div>
  );
};

export default Navbar;