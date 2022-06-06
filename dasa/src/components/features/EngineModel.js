import React from "react"
import '../../App.css'

/**
 * Component for setting the vehicle engine model.
 *
 * @param {object} props - Properties.
 * @returns 
 */
const EngineModel = (props) => { 
  
  /**
   * Creates a datalist for the input options. 
   *
   * @returns 
   */
  const renderDataList = () => {
    return (
      <datalist id="models">
        <option value="Diesel"/>
        <option value="Gasoline"/>
        <option value="E32"/>
      </datalist>
    )
  }

    return (
        <div className="model-container">
          <h3 className="model-title">{props.title}</h3>
            <div className="value-container">
              <input list="models"/>
              {renderDataList()}
            </div>
        </div>
    )
  }

export default EngineModel