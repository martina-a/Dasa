import LeftContainer from '../containers/LeftContainer'
import RightContainer from '../containers/RightContainer'

import '../../App.css'

/**
 * Component for the home view. 
 *
 * @returns 
 */
function Home() {
  return (
    <div id='home-container'>
      <LeftContainer/>
      <RightContainer/>
    </div>
  );
}

export default Home
