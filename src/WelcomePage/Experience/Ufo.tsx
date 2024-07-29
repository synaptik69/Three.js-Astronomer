import * as THREE from 'three'

import { useTexture } from '@react-three/drei'
import useTimeline from '../../Hooks/useOldTimeline'
import { useLayoutEffect, useRef } from 'react'


export function Ufo() {
    const texture = useTexture('images/ufo.svg')

  const ufoRef = useRef<THREE.Mesh>(null)
  const { tl } = useTimeline({ start: 2.8/5, end: 0.4 });
  const isMobile = window.innerWidth < 750;

  useLayoutEffect(() => {
    if(tl.current && ufoRef.current)
    tl.current
    .to(
      ufoRef.current.position,
      {
        duration: 3.5,
        x: 0,
        y: -0.65,

      },0
    )
    .to(
      ufoRef.current.rotation,
      {
        duration: 1.5,
        z: 0
      },2.5
    )
    .to(
      ufoRef.current.position,
      {
        duration: 2,
        x: isMobile?0.5:1.6,
        y:isMobile?-1:-0.65
      },5.5
    ) 
    .to(
      ufoRef.current.rotation,
      {
        duration: 1,
        z: -0.20
      },5.5
    ) 
    .to(
      ufoRef.current.rotation,
      {
        duration: 2,
        y: 0
      },5.5
    )
  });


  return (
    <mesh
      ref={ufoRef}
      position={[-2.98, -0.56, 1]}
      rotation-z={Math.PI * 0.05}
    >
      <planeGeometry args={[0.7, 0.6]} />
      <meshStandardMaterial transparent  map={texture} />
    </mesh>
  )
}
