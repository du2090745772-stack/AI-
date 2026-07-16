import { useRef, useEffect } from 'react';

export default function FadingVideo({ src, className = '', style = {} }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => video.play().catch(() => {});
    video.addEventListener('loadeddata', onLoaded);

    return () => {
      video.removeEventListener('loadeddata', onLoaded);
    };
  }, []);

  return (
    <video ref={videoRef} autoPlay muted loop playsInline preload="auto"
      className={className} style={{ opacity: 1, ...style }}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
