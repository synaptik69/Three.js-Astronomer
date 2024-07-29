import { useLayoutEffect, useRef } from 'react';
import { Mesh } from 'three';
import useTimeline from '../../../Hooks/useOldTimeline';
// import { useControls } from 'leva';


const Spots = () => {

  const { tl } = useTimeline({ start: 0/5, end: 3/5 });

  const lSpotOne = useRef<Mesh>(null)
  const lSpotTwo = useRef<Mesh>(null)
  const lSpotThree = useRef<Mesh>(null)
  const lSpotFour = useRef<Mesh>(null)

  const rSpotOne = useRef<Mesh>(null)
  const rSpotTwo = useRef<Mesh>(null)
  const rSpotThree = useRef<Mesh>(null)
  const rSpotFour = useRef<Mesh>(null)
  
  // const { pos, radi } = useControls({
  //   pos: {
  //     value: {
  //       x: 0.56,
  //       y: -1.19
  //     },
  //     min: -5,
  //     max: 5,
  //     step: 0.01
  //   },
  //   radi: {
  //     value: 0.05,
  //     min: -0.05,
  //     max: 0.05,
  //     step: 0.001,
  //   }
  // })

  useLayoutEffect(() => {
    if(
      tl.current &&
      lSpotOne.current && lSpotTwo.current &&
      lSpotThree.current && lSpotFour.current &&
      rSpotOne.current && rSpotTwo.current &&
      rSpotThree.current && rSpotFour.current
    ) {
      tl.current
        .to(
          lSpotOne.current.position,
          {
            duration:1,
            x: -1.51,
            y: 0.08
          },0
        )
        .to(
          lSpotTwo.current.position,
          {
            duration:1,
            x: -1.48,
            y: 0.93
          },0
        )
        .to(
          lSpotThree.current.position,
          {
            duration:1,
            x: -2.34,
            y: 0.60
          },0
        )
        .to(
          lSpotFour.current.position,
          {
            duration:1,
            x: -1.79,
            y: 0.
          },0
        )
        .to(
          rSpotOne.current.position,
          {
            duration:1,
            x: 2.28,
            y: 0.92,
          },0
        )
        .to(
          rSpotTwo.current.position,
          {
            duration:1,
            x: 1.50,
            y: -0.80,
          },0
        )
        .to(
          rSpotThree.current.position,
          {
            duration:1,
            x: 1.85,
            y: -0.69,
          },0
        )
        .to(
          rSpotFour.current.position,
          {
            duration:1,
            x: 1.82,
            y: -0.88,
          },0
        )

        //Return
        .to(
          lSpotOne.current.position,
          {
            duration:1,
            x: -2.02,
            y: 0.89
          },1
        )
        .to(
          lSpotTwo.current.position,
          {
            duration:1,
            x: -2.23,
            y: 0.27
          },1
        )
        .to(
          lSpotThree.current.position,
          {
            duration:1,
            x: -1.80,
            y: 0.15
          },1
        )
        .to(
          lSpotFour.current.position,
          {
            duration:1,
            x: -2.42,
            y: 0.75
          },1
        )
        .to(
          rSpotOne.current.position,
          {
            duration:1,
            x: 1.72,
            y: 1.47,
          },1
        )
        .to(
          rSpotTwo.current.position,
          {
            duration:1,
            x: 1.86,
            y: -0.65,
          },1
        )
        .to(
          rSpotThree.current.position,
          {
            duration:1,
            x: 1.03,
            y: -1.16,
          },1
        )
        .to(
          rSpotFour.current.position,
          {
            duration:1,
            x: 0.56,
            y: -1.19,
          },1
        )
        
    }
  },[])

  const colors = ['#e4432b', '#61b3c5', '#fff01c']

  return (
    <>
      <mesh 
        ref={lSpotOne}
        position={[-2.02, 0.89, 0]}
        // position={[-1.51, 0.08, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.05, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      <mesh
        ref={lSpotTwo}
        position={[-2.23, 0.27, 0]}
        // position={[-1.48, 0.93, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.05, 10, 10]} />
        <meshBasicMaterial color={colors[0]} />
      </mesh>
      <mesh
        ref={lSpotThree}
        position={[-1.80, 0.15, 0]}
        // position={[-2.34, 0.60, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color={colors[0]} />
      </mesh>
      <mesh 
        position={[-2.18, -0.01, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color={colors[2]} />
      </mesh>
      <mesh 
        ref={lSpotFour}
        position={[-2.42, 0.75, 0]}
        // position={[-1.79, 0.18, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.025, 10, 10]} />
        <meshBasicMaterial color={colors[2]} />
      </mesh>
      <mesh 
        position={[-1.49, 0.65, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.02, 10, 10]} />
        <meshBasicMaterial color={colors[2]} />
      </mesh>
      <mesh 
        position={[-1.61, 1.07, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      
      // Ring Rings
      <mesh 
        ref={rSpotOne}
        position={[1.72, 1.47, 0]}
        // position={[2.28, 0.92, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.07, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      <mesh 
        ref={rSpotTwo}
        position={[1.86, -0.65, 0]}
        // position={[1.50, -0.80, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.02, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      <mesh 
        position={[1.70, -1.07, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      <mesh 
        position={[1.70, -1.07, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color={colors[1]} />
      </mesh>
      <mesh 
        ref={rSpotThree}
        position={[1.03, -1.16, 0]}
        // position={[1.85, -0.69, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.02, 10, 10]} />
        <meshBasicMaterial color={colors[2]} />
      </mesh>
      <mesh 
        position={[0.81, -0.99, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.01, 10, 10]} />
        <meshBasicMaterial color={colors[2]} />
      </mesh>
      <mesh 
        ref={rSpotFour}
        position={[0.56, -1.19, 0]}
        // position={[1.82, -0.88, 0]}
        // position={[pos.x, pos.y, 0]}
      >
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color={colors[0]} />
      </mesh>
    </>
  )
}

export default Spots