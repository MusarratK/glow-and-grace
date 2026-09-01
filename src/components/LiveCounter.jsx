import React, { useState, useEffect, useRef } from 'react';

const LiveCounter = ({
  target = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2000,
  className = '',
  style = {}
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Cubic ease-out formula for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOut * target;

      setCount(currentVal);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [hasAnimated, target, duration]);

  const formattedCount = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={domRef} className={className} style={style}>
      {prefix}{hasAnimated ? formattedCount : (decimals > 0 ? (0).toFixed(decimals) : '0')}{suffix}
    </span>
  );
};

export default LiveCounter;
