import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react'

interface useTimelineI {
  start: number,
  end: number,
}

const useTimeline = (props?:useTimelineI,debug?:boolean) => {
  const scroll = useScroll()
  const tl = useRef<GSAPTimeline | null>(null);

  useFrame(() => {
    
    if(props && tl.current){
        const { start, end } = props;
        
        tl.current?.seek(scroll.range(start,end) * tl.current.duration())
    } else
      tl.current?.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
  },[])

  return { tl }
}

export default useTimeline