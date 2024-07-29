import { Group, Mesh } from 'three'
import { useLayoutEffect, useRef } from 'react';
import { DoubleSide } from 'three';
import useTimeline from '../../../Hooks/useOldTimeline';
import { useThree } from '@react-three/fiber';
// import { useControls } from 'leva';

const DoubleRingPlanet = () => {
  const { tl } = useTimeline({ start: 0, end: 3/5});

  const { viewport } = useThree();
  const isMobile = window.innerWidth < 750;

  const containerRef = useRef<Group>(null);
  const bigRingRef = useRef<Mesh>(null);
  const smallRingRef = useRef<Mesh>(null);
  const planetRef = useRef<Mesh>(null);

  useLayoutEffect(() => {

    if(smallRingRef.current && planetRef.current && containerRef.current && tl.current)
    tl.current
    .to(
      smallRingRef.current.position,
      {
        duration: 1,
        x: -0.11,
        y: 1.23,
      },0
    )
    .to(
      smallRingRef.current.rotation,
      {
        duration: 1,
        y: -0.40,
      },0
    )
    .to(
      smallRingRef.current.scale,
      {
        duration: 1,
        x: 1.75,
        y: 1.75,
        z: 1.75,
      },0
    )
    .to(
      planetRef.current.position,
      {
        x: 0.47,
        y: 1.59,
        z: -0.19
      },0
    ).to(
      containerRef.current.position,
      {
        duration: 2,
        x: 4,
        y: 2
      },2
    )
  },[])

  return (
    <group 
      ref={containerRef}
      position={[
        isMobile? (viewport.width/2) + 0.3 :2.6,
        isMobile?isMobile? (viewport.height/2) + 0.1 :2.6:0.5,
        0
      ]} 
      rotation={[ -10.6, -13.6, 16.4]}
      >
          <mesh ref={bigRingRef}  >
            <ringGeometry args={[1.3, 1.34, 100, 100]} />
            <meshBasicMaterial color='#e4432b' side={DoubleSide} />
          </mesh>
          <mesh ref={smallRingRef} >
            <ringGeometry args={[0.8 ,0.82, 100, 100]} />
            <meshBasicMaterial color='#e9b28c' side={DoubleSide} />
          </mesh>
          <mesh ref={planetRef} position={[0.65, 0.31, -0.53 ]} >
            <sphereGeometry args={[0.5, 32,32]} />
            <meshBasicMaterial color='#e4432b' />  
          </mesh>
      </group>
  )
}

export default DoubleRingPlanet