import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../config/logo_animation.json'; // Adjust the path accordingly

export default function Loader() {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    instance.setSpeed(0.6);
    return () => instance.destroy();
  }, []);

  return (
    <div className="h-[50vh]">
      <div ref={lottieContainer} />
    </div>
  );
}
