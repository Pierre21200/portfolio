import React, { useState, useRef, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { Parallax } from 'react-scroll-parallax';

const ParallaxExample = () => {
  const [scrollEl, setScrollElement] = useState(null);
  const ref = useRef();

  useEffect(() => {
    setScrollElement(ref.current);
  }, [scrollEl]);

  console.log(scrollEl);
  return (
    <div className='content' ref={ref}>
      <ParallaxProvider>
        <Parallax translateX={['0vw', '100vw']} startScroll={0} endScroll={1000} className='red'>
          {/* <div className='red' /> */}
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default ParallaxExample;
