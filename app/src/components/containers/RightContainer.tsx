import React from 'react'
import EngineModel from '../features/model/EngineModel'
import Parts from '../features/parts/Parts'

import '../../App.css'

/**
 * Component for the right container.
 *
 * @returns
 */
function RightContainer () {
  return (
    <div className='feature-container' id='right-container'>
      <h3>Breaks</h3>
      <Parts
      firstLabel='Breaks value 1'
      secondLabel='Breaks value 2'
      max={100}
      min={0}
      />
      <hr/>
      <h3>Model</h3>
      <EngineModel models={['Diesel', 'Petrol']}/>
      <hr/>
    </div>
  )
}

export default RightContainer
