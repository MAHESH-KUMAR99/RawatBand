import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const outlineRef = useRef(null);

  // Variables for animation/state
  const delay = 8;
  let _x = 0;
  let _y = 0;
  let endX = window.innerWidth / 2;
  let endY = window.innerHeight / 2;
  let cursorVisible = true;
  let cursorEnlarged = false;
  let requestId;

  const toggleCursorVisibility = (visible) => {
    if (cursorRef.current && outlineRef.current) {
      cursorRef.current.style.opacity = visible ? '1' : '0';
      outlineRef.current.style.opacity = visible ? '1' : '0';
    }
  };

  const toggleCursorSize = (enlarged) => {
    if (cursorRef.current && outlineRef.current) {
      if (enlarged) {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
        outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    }
  };

  useEffect(() => {
    // Animate outline to follow the dot
    const animateDotOutline = () => {
      _x += (endX - _x) / delay;
      _y += (endY - _y) / delay;

      if (outlineRef.current) {
        outlineRef.current.style.top = _y + 'px';
        outlineRef.current.style.left = _x + 'px';
      }
      requestId = requestAnimationFrame(animateDotOutline);
    };

    // Event listeners setup
    const onMouseMove = (e) => {
      cursorVisible = true;
      toggleCursorVisibility(true);

      endX = e.pageX;
      endY = e.pageY;

      if (cursorRef.current) {
        cursorRef.current.style.top = endY + 'px';
        cursorRef.current.style.left = endX + 'px';
      }
    };

    const onMouseDown = () => {
      cursorEnlarged = true;
      toggleCursorSize(true);
    };

    const onMouseUp = () => {
      cursorEnlarged = false;
      toggleCursorSize(false);
    };

    const onMouseEnter = () => {
      cursorVisible = true;
      toggleCursorVisibility(true);
    };

    const onMouseLeave = () => {
      cursorVisible = false;
      toggleCursorVisibility(false);
    };

    // Handle anchor hover enlarge effect
    const anchorElements = document.querySelectorAll('a');
    const onAnchorHover = () => {
      cursorEnlarged = true;
      toggleCursorSize(true);
    };
    const onAnchorLeave = () => {
      cursorEnlarged = false;
      toggleCursorSize(false);
    };

    anchorElements.forEach((el) => {
      el.addEventListener('mouseover', onAnchorHover);
      el.addEventListener('mouseout', onAnchorLeave);
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseleave', onMouseLeave);

    animateDotOutline();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseleave', onMouseLeave);

      anchorElements.forEach((el) => {
        el.removeEventListener('mouseover', onAnchorHover);
        el.removeEventListener('mouseout', onAnchorLeave);
      });

      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot fixed rounded-full pointer-events-none transition-opacity transition-transform duration-300 ease-in-out"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#52A3B6',
          top: '50%',
          left: '50%',
          opacity: '0',
          transform: 'translate(-50%, -50%) scale(1)',
          zIndex: 9999,
          position: 'absolute',
        }}
        ref={cursorRef}
      ></div>
      <div
        className="cursor-dot-outline fixed rounded-full pointer-events-none transition-opacity transition-transform duration-300 ease-in-out"
        style={{
          width: '40px',
          height: '40px',
         backgroundColor: 'rgba(255, 105, 0, 0.4)',
          top: '50%',
          left: '50%',
          opacity: '0',
          transform: 'translate(-50%, -50%) scale(1)',
          position: 'absolute',
          zIndex: 9998,
        }}
        ref={outlineRef}
      ></div>
    </>
  );
};

export default CustomCursor;
