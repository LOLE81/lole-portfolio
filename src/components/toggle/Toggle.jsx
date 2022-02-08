import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./toggle.css"
import Sun from "../../images/sun3.png"
import Moon from "../../images/moon2.png"
import { changeMode } from "../../redux/actions"


function Toggle() {
    const darkMode = useSelector(state => state.darkMode)
    const dispatch = useDispatch()
    const handleClick = () => {        
        dispatch(changeMode())
    }

  return (
  <div className="toggle">
      <img src={Sun} alt="sun icon" className="toggle-icon" />
      <img src={Moon} alt="moon icon" className="toggle-icon" />
      <div className="toggle-button" onClick={handleClick} style={{left: darkMode ? 0 : 25}}></div>
  </div>
  );
};

export default Toggle;

