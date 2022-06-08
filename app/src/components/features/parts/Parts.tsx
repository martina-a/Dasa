import React, { useState } from 'react'
import '../../../App.css'

/**
 * A table-like component for vehicle parts.
 *
 * @param {object} props - Properties.
 * @returns
 */
const Parts = (props: any = {}) => {
  const firstLabel = props.firstLabel // First vehicle part label.
  const secondLabel = props.secondLabel // Second vehicle part label.
  const maxValue = props.max // The max value for the input fields.
  const minValue = props.min // The min value for the input fields.
  const [firstVal, setFirstVal] = useState('0')
  const [secondVal, setSecondVal] = useState('0')

  /**
   * Creates the contents of the input elements.
   *
   * @returns
   */
  const renderInputContent = () => {
    return (
      <form className="parts-form">
        <label aria-labelledby="first-val" className='parts-label'>
          {firstLabel}
          <input
          type="number"
          className="parts-input"
          name="first-val"
          value={firstVal}
          onChange={(e) => setFirstVal(e.target.value)}
          max={maxValue}
          min={minValue}
        />
        </label>
        <label aria-labelledby="second-val" className='parts-label'>
          {secondLabel}
          <input
          type="number"
          className="parts-input"
          name="second-val"
          value={secondVal}
          onChange={(e) => setSecondVal(e.target.value)}
          max={maxValue}
          min={minValue}
          />
        </label>
      </form>
      )
}
  
  return (
        <div className="table-container">
            <div className="value-container">
              {renderInputContent()}
            </div>
        </div>
    )
}

export default Parts
