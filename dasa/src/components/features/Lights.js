import React from "react"
import '../../App.css'

/**
 * Component for setting the vehicle lights.
 *
 * @param {object} props - Properties.
 * @returns 
 */
const Lights = (props) => { 
    return (
        <div className="light-switch-container">
          <p className='lights-name'>{props.name}</p>
          <label className="switch">
            <input id="lights-input" type="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>
    )
  }

export default Lights