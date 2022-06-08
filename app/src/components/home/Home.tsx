import React from 'react'
import LeftContainer from '../containers/LeftContainer'
import RightContainer from '../containers/RightContainer'

import '../../App.css'

/**
 * Component for the home view.
 *
 * @returns
 */
const Home = () => {
  return (
    <div className='home-container'>
      <LeftContainer/>
      <RightContainer/>
    </div>
  )
}

export default Home
