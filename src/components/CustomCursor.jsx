import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for non-touch pointer devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest(
        'button, a, input, textarea, [data-interactive="true"], .interactive-badge, .filter-chip'
      );
      setIsHovered(!!interactiveEl);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing animation loop
    let frameId;
    let currentTrail = { x: -100, y: -100 };

    const animateTrail = () => {
      currentTrail.x += (pos.x - currentTrail.x) * 0.2;
      currentTrail.y += (pos.y - currentTrail.y) * 0.2;
      setTrailingPos({ x: currentTrail.x, y: currentTrail.y });
      frameId = requestAnimationFrame(animateTrail);
    };

    frameId = requestAnimationFrame(animateTrail);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      {/* Primary Dot */}
      <div
        className={`cursor-dot ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`
        }}
      />
      {/* Trailing Aura Ring */}
      <div
        className={`cursor-ring ${isHovered ? 'hovered' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`
        }}
      />
    </div>
  );
}
