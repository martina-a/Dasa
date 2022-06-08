import React, { useState } from 'react'
import { Select, MenuItem, SelectChangeEvent } from '@mui/material'
import '../../../App.css'

/**
 * Component for setting the vehicle engine model.
 *
 * @param {object} props - Properties.
 * @returns
 */
const EngineModel = (props: any = {}) => {
  const models = props.models // An array of all possible engine models.
  const [model, setModel] = useState(models[0])

  const selectionChange = (selected: SelectChangeEvent<any>) => {
    setModel(selected.target.value)
  }

  const modelOptions = () => {
    return (
      <Select
      className='select-model'
      value={model}
      onChange={e => selectionChange(e)}
      >
        {models.map((model: string) => {
          return (
            <MenuItem key={models.indexOf(model)} value={model} className='options'>{model}</MenuItem>
          )
        })}
      </Select>
    )
  }

  return (
        <div className="model-container">
          <p>Engine Model</p>
          <div>
          {modelOptions()}
          </div>
        </div>
  )
}

export default EngineModel
