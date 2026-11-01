import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#a855f7', '#10b981', '#f59e0b', '#ec4899']
    });
  } catch {
    // fallback if canvas-confetti issues
  }
};

export const triggerFireworks = () => {
  try {
    const end = Date.now() + 1000;
    const colors = ['#00f0ff', '#8b5cf6', '#3b82f6'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // fallback
  }
};
