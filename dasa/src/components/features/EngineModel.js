import React from "react"
import '../../App.css'

/**
 * Component for setting the vehicle engine model.
 *
 * @param {object} props - Properties.
 * @returns 
 */
const EngineModel = (props) => { 
  const models = props.models // An array of all possible engine models.
  // TODO: set state variable for user choice here.

  const modelOptions = () => {
    return (
      <select id="models" className="input-options">
        {models.map(model => {
          return (
            <option>{model}</option>
          )
        })}
      </select>
    )
  }
  
    return (
        <div className="model-container">
          <label>Engine Model
            {modelOptions()}
          </label>
        </div>
    )
  }

export default EngineModel