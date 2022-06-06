import React from "react"
import '../../App.css'

/**
 * A table-like component for vehicle parts.
 *
 * @param {object} props - Properties.
 * @returns 
 */
const PartTable = (props) => {
  const partValues = props.partValues // An array containing the different part value types.
  const maxValue = props.max // The max value for the input fields.
  const minValue = props.min // The min value for the input fields.

  /**
   * Creates the contents of the list.
   *
   * @returns 
   */
  const renderListContent = () => {
    return (
      <ul>
        {partValues.map(value => {
          return (
            <li key={partValues.indexOf(value)}>{value}</li>
          )
        })}
      </ul>)
  }

  /**
   * Creates the contents of the input elements. 
   *
   * @returns
   */
  const renderInputContent = () => {
    return (
      <ul>
        {partValues.map(value => {
          return (
            <input 
            type="number"
            className="input"
            max={maxValue}
            min={minValue}
            key={partValues.indexOf(value)}
            />
          )
        })}
      </ul>)
  }
  
    return (
        <div className="table-container">
          <h3 className="table-title">{props.title}</h3>
            <div className="value-container">
              {renderListContent()}
              {renderInputContent()}
            </div>
        </div>
    )
  }

export default PartTable