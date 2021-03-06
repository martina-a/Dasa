import React from 'react'
import Lights from '../features/lights/Lights'
import Parts from '../features/parts/Parts'

import '../../App.css'

/**
 * Component for the left container.
 *
 * @returns
 */
function LeftContainer () {
  return (
    <div className='feature-container' id='left-container'>
      <h3>Engine</h3>
      <Parts
      firstLabel='Engine value 1'
      secondLabel='Engine value 2'
      max={100}
      min={10}
      />
      <hr/>
      <h3>Transmission</h3>
      <Parts
      firstLabel='Transmission value 1'
      secondLabel='Transmission value 2'
      max={900}
      min={100}
      />
      <hr/>
      <h3>Lights</h3>
      <Lights name='Forward Lights'/>
    </div>
  )
}

export default LeftContainer
