import { useRef } from 'react';
import { DoubleSide, Group } from 'three';
import { useThree } from '@react-three/fiber';

const TopCornerRing = () => {
  const ringRef = useRef<Group>(null);
  
  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  return (
    <group 
      position={[
        isMobile?(viewport.width/2) -1.7 :-2.3,
        isMobile?(viewport.height/2) + 0.7:1.2,
        1
      ]} 
      ref={ringRef} 
      >
        <mesh>
          <ringGeometry args={[0.8 ,0.805, 100, 100]} />
          <meshBasicMaterial color='#e4432b' side={DoubleSide} />
        </mesh>
      </group>
  )
}

export default TopCornerRing