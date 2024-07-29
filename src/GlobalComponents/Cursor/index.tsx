import { useEffect, useRef } from 'react';
import './Cursor.scss';

const CURSOR_SPEED = 0.06;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;


const Cursor = () => {

  const cursorOutline = useRef<HTMLDivElement>(null);

  const animate = () => {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;
    
    if(cursorOutline.current) {
      cursorOutline.current.style.left = `${outlineX}px`;
      cursorOutline.current.style.top = `${outlineY}px`;
    }

    requestAnimationFrame(animate);
  };


  const mouseMovement = (e:MouseEvent) => {
    mouseX = e.pageX
    mouseY = e.pageY
  }

  useEffect(() => {
    addEventListener('mousemove', mouseMovement);
    const animateEvent = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animateEvent)
      removeEventListener('mousemove', mouseMovement)
    }
  },[])




  return (
    <div ref={cursorOutline} className='cursor_outline'></div>
  )
}

export default Cursor