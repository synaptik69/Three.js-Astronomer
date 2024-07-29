import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react'

const scrollOffsets: number[] = [
  0,
  0.29889,
  0.49468,
  0.75085,
  1,
];

const ScrollEvent = () => {
  const scroll = useScroll()

  const prvPage = useRef<number>(0);
  const crntPage = useRef<number>(0);
  const prvOffset = useRef<number>(0);
  const [isScrollingEnable, setIsScrollingEnable] = useState<boolean>(true);
  

  useFrame(() => {
    scroll.el.scrollTo({top: scrollOffsets[crntPage.current]*(scroll.el.scrollHeight - scroll.el.clientHeight)})
      
    
    if(scrollOffsets[crntPage.current].toFixed(2) === scroll.offset.toFixed(2)) {
      prvPage.current = crntPage.current;
      setIsScrollingEnable(true);
    } else {
      setIsScrollingEnable(true);
    }

    prvOffset.current = scroll.el.scrollTop;
  })



  const onScroll = () => {
    if(isScrollingEnable && Math.abs(crntPage.current - prvPage.current) < 1 ) {
      setIsScrollingEnable(false)
      if (prvOffset.current > scroll.el.scrollTop && crntPage.current != 0) {
        crntPage.current = crntPage.current - 1
      } else if(prvOffset.current < scroll.el.scrollTop && crntPage.current != 4) {
        crntPage.current = crntPage.current + 1
      } 
    }
    
  }

  useEffect(() => {
    scroll.el.onscroll = onScroll
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return <></>
}

export default ScrollEvent