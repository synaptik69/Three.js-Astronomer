import { useRef } from 'react'
import { Group } from 'three';
import DoubleRingPlanet from './DoubleRingPlanet';
import TopCornerRing from './TopCornerRing';
import MoonSystem from './MoonSystem';
import Spots from './Spots';

const Background = () => {
  const container = useRef<Group>(null);
  return (
    <group ref={container} >
      <Spots 
        // count={20} 
        // colored 
      />
      {/* <Spots count={30} /> */}
      <DoubleRingPlanet/>
      <TopCornerRing/>
      <MoonSystem/>
    </group>
  )
}

export default Background