import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react'
import { TOTAL_PAGES } from '../utils/constants';

interface useTimelineI {
  start: number,
  end: number,
}

const useTimeline = (props?:useTimelineI,debug?:boolean) => {
  const scroll = useScroll()
  const tl = useRef<GSAPTimeline | null>(null);
  const [isInRange, setIsInRange] = useState<boolean>(false);

  const isOnRange = (start?:number, end?: number) => {
    if(debug) console.log('ping');
    

    return getRange(start || props?.start || 0, end ||props?.end || 0) !== 0 && 
          getRange(start || props?.start || 0, end || props?.end || 0) !== 1
  }

  const getRange = (start: number, end:number):number => {
    const { offset } = scroll;
    if( offset < start ) {
      return 0
    } else if( offset > end ) {
      return 1 ;
    }

    const tot = end - start;
    const distance = offset - start;

    return distance/tot;
  }

  const currentTimeline = () => {

    if(props) {
      const { start, end } = props;
      return getRange(start,end) * TOTAL_PAGES;
    }

    return 0;

  }

  const convertCurve = (n: number) => {
    if(n>=1) return 1
    else if(n<=0) return 0

    return n;
  }

  const curve = (p1:number, p2:number, m: number): number => {
    const { offset } = scroll;
    if( offset < p1 ) {
      return 0
    } else if( offset > p2 ) {
      return 1 ;
    }

    // const T = p2 - p1;
    const t1 = m - p1;
    // const t2 = p2 - m;

    const d1 = scroll.offset - p1
    // const d2 = scroll.offset - m;
    // console.log('T:',T);
    
    console.log('t1:',convertCurve(d1/t1),'t2:',);
    // console.log();
    

    return 0
  }

  useFrame(() => {
    
    if(props && tl.current){
        const { start, end } = props;

        setIsInRange(getRange(start || props?.start || 0, end ||props?.end || 0) !== 0 && 
          getRange(start || props?.start || 0, end || props?.end || 0) !== 1)

        if(debug) {
          // curve(0,1/ TOTAL_PAGES, .009849548645937813);
          // console.log(getRange(start,0.009849548645937813));
          console.log(getRange(start || props?.start || 0, end || props?.end || 0));
        }
        
        tl.current?.seek(getRange(start,end) * tl.current.duration())
    } else
      tl.current?.seek(scroll.offset * tl.current.duration())
  })



  useLayoutEffect(() => {
    tl.current = gsap.timeline()
  },[])

  return { tl, isInRange, getRange, isOnRange, currentTimeline, curve  }
}

export default useTimeline