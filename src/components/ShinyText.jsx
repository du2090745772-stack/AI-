import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

const ShinyText = ({
  text,
  disabled = false,
  speed = 3,
  className = '',
  color = 'rgba(255,255,255,0.3)',
  shineColor = '#fff',
  spread = 120,
  direction = 'left',
}) => {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const dirRef = useRef(direction === 'left' ? 1 : -1);

  useAnimationFrame(time => {
    if (disabled) return;
    if (lastTimeRef.current === null) { lastTimeRef.current = time; return; }
    elapsedRef.current += time - lastTimeRef.current;
    lastTimeRef.current = time;
    const cycleTime = elapsedRef.current % (speed * 1000);
    const p = (cycleTime / (speed * 1000)) * 100;
    progress.set(dirRef.current === 1 ? p : 100 - p);
  });

  useEffect(() => {
    dirRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
  }, [direction]);

  const bgPos = useTransform(progress, p => `${150 - p * 2}% center`);

  return (
    <motion.span
      className={className}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundPosition: bgPos,
      }}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
