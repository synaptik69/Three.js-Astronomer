import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react'



const useSnapScroll = (scrollOffsets:number[],stopPages?:number[],preventBack?:boolean) => {
  const scroll = useScroll()

  const prvPage = useRef<number>(0);
  const crntPage = useRef<number>(0);
  const prvOffset = useRef<number>(0);
  const [isStopPoint, setIsStopPoint] = useState<boolean>(true);
  const [isScrollingEnable, setIsScrollingEnable] = useState<boolean>(true);

  const onScroll = () => {
    if(stopPages && stopPages.includes(crntPage.current)) {
      scroll.el.scrollTo({
        top: scrollOffsets[crntPage.current]*(scroll.el.scrollHeight - scroll.el.clientHeight),
        behavior: 'instant'
      })
      return;
    }

    if(isScrollingEnable && Math.abs(crntPage.current - prvPage.current) < 1 ) {
      setIsScrollingEnable(false)
      if (prvOffset.current > scroll.el.scrollTop && crntPage.current != 0 && !preventBack) {
        crntPage.current = crntPage.current - 1
      } else if(prvOffset.current < scroll.el.scrollTop && crntPage.current != scrollOffsets.length -1) {
        crntPage.current = crntPage.current + 1
      } else {
        scroll.el.scrollTo({
          top: scrollOffsets[crntPage.current]*(scroll.el.scrollHeight - scroll.el.clientHeight),
          behavior: 'instant'
        })
      }
    }
    
  }

  const next = () => {
    setIsScrollingEnable(false);
    crntPage.current = crntPage.current + 1;
  }

  const back = () => {
    setIsScrollingEnable(false)
    crntPage.current = crntPage.current - 1;
  }

  const to = (pageNo: number) => {
    setIsScrollingEnable(false)
    crntPage.current = pageNo;
  }

  useEffect(() => {
    prvOffset.current = scroll.el.scrollTop;
    setTimeout(() => {
      scroll.el.onscroll = onScroll
    },1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  useFrame(() => {
    scroll.el.scrollTo({
      top: scrollOffsets[crntPage.current]*(scroll.el.scrollHeight - scroll.el.clientHeight),
      behavior: 'instant'
    })
      
    
    if(scrollOffsets[crntPage.current].toFixed(3) === scroll.offset.toFixed(3)) {
      prvPage.current = crntPage.current;
      setIsScrollingEnable(true);
    }

    if(stopPages)
      setIsStopPoint(stopPages.includes(crntPage.current));

    prvOffset.current = scroll.el.scrollTop;
  })


  return { next, back, to, crntPage: crntPage.current, isStopPoint }
}

export default useSnapScroll