import React, { useState } from 'react'
import Switch from '@mui/material/Switch'
import '../../App.css'

/**
 * Component for setting the vehicle lights.
 *
 * @param {object} props - Properties.
 * @returns 
 */
const Lights = (props) => { 
  const [switchState, setSwitchState] = useState(false)

  const toggleSwitch = () => {
    setSwitchState(!switchState)
  }

    return (
        <div className="light-switch-container">
          <p className='lights-name'>{props.name}</p>
          <Switch
          checked={switchState}
          onChange={() => toggleSwitch()}
          />
        </div>
    )
  }

export default Lights