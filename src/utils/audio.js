// Procedural Web Audio API sound generator for futuristic UI feedback

class SoundSystem {
  constructor() {
    this.audioCtx = null;
    this.enabled = false; // default off or muted for respectful UX, can be toggled by user
  }

  init() {
    if (!this.audioCtx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setEnabled(val) {
    this.enabled = val;
    if (val) this.init();
  }

  playHover() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, this.audioCtx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch {
      // Audio context error handling
    }
  }

  playClick() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch {
      // fallback
    }
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.value = freq;

        const startTime = now + idx * 0.07;
        gain.gain.setValueAtTime(0.03, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.18);
      });
    } catch {
      // ignore
    }
  }

  playGlitch() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.audioCtx.currentTime);
      osc.frequency.linearRampToValueAtTime(890, this.audioCtx.currentTime + 0.04);
      osc.frequency.linearRampToValueAtTime(220, this.audioCtx.currentTime + 0.09);

      gain.gain.setValueAtTime(0.03, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.09);
    } catch {
      // ignore
    }
  }
}

export const sound = new SoundSystem();
