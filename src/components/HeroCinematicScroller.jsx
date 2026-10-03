import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { CINEMATIC_STORYBOARD, PRODUCTS, BRAND } from '../data/noularData';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Lightbulb,
  ArrowDown,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
  Maximize2,
  Minimize2,
  Sliders,
  RotateCcw
} from 'lucide-react';

export const HeroCinematicScroller = ({ onExploreCollection, onProductSelect }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const theaterRef = useRef(null);
  const { t, isAr, dir } = useLanguage();
  const { isDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  // Scroll scrubbing & timeline state (0.0 to 1.0)
  const [progress, setProgress] = useState(0);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isLightManuallyOn, setIsLightManuallyOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const heroProduct = PRODUCTS[0]; // Warda Sienna (Orange Base)
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const rafId = useRef(null);
  const autoPlayRaf = useRef(null);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);

  // Touch Swipe Tracking for Mobile Story Navigation
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Preloaded image element references for Canvas rendering
  const imagesRef = useRef({
    coverDark: null,
    coverLight: null,
    angle1: null,
    angle2: null,
    workshop: null,
    loadedCount: 0
  });

  // Preload images into memory for zero-lag canvas compositing
  useEffect(() => {
    const urls = {
      coverDark: heroProduct.images.coverDark,
      coverLight: heroProduct.images.coverLight,
      angle1: heroProduct.images.angle1,
      angle2: heroProduct.images.angle2,
      workshop: '/assets/noular/process/workshop-print.webp'
    };

    let count = 0;
    const total = Object.keys(urls).length;

    Object.entries(urls).forEach(([key, src]) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imagesRef.current[key] = img;
        count++;
        imagesRef.current.loadedCount = count;
      };
    });
  }, [heroProduct]);

  // Atmospheric Particles for Canvas
  const particlesRef = useRef(
    Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      radius: Math.random() * 2.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.0003,
      speedY: -Math.random() * 0.0004 - 0.0001,
      opacity: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2
    }))
  );

  // Smooth Scroll Lerp Loop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isPlayingAuto) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) {
        targetProgress.current = 0;
        return;
      }

      const scrolled = -rect.top;
      const raw = Math.max(0, Math.min(1, scrolled / totalScrollable));
      targetProgress.current = raw;
    };

    const updateLoop = () => {
      if (!isPlayingAuto) {
        currentProgress.current += (targetProgress.current - currentProgress.current) * 0.12;
        if (Math.abs(targetProgress.current - currentProgress.current) < 0.0003) {
          currentProgress.current = targetProgress.current;
        }
        setProgress(currentProgress.current);
      }
      rafId.current = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    rafId.current = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isPlayingAuto]);

  // Auto-play cinema loop mode (Smooth 18-20s visual film loop)
  useEffect(() => {
    if (!isPlayingAuto) {
      if (autoPlayRaf.current) cancelAnimationFrame(autoPlayRaf.current);
      return;
    }

    let lastTime = performance.now();
    const speed = 0.00028; // ~18 seconds full cycle

    const autoLoop = (now) => {
      const delta = now - lastTime;
      lastTime = now;
      let next = currentProgress.current + speed * delta;
      if (next > 1) next = 0;
      currentProgress.current = next;
      targetProgress.current = next;
      setProgress(next);
      autoPlayRaf.current = requestAnimationFrame(autoLoop);
    };

    autoPlayRaf.current = requestAnimationFrame(autoLoop);
    return () => {
      if (autoPlayRaf.current) cancelAnimationFrame(autoPlayRaf.current);
    };
  }, [isPlayingAuto]);

  // Ambient Atelier Harmonic Soundscape Generator (Web Audio API)
  const toggleSound = () => {
    if (!isSoundOn) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!audioCtxRef.current) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;

          // Warm harmonic drone (soothing peaceful frequency: 108Hz & 216Hz)
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const subOsc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(108, ctx.currentTime);

          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(216, ctx.currentTime);

          subOsc.type = 'sine';
          subOsc.frequency.setValueAtTime(54, ctx.currentTime);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(280, ctx.currentTime);

          gain.gain.setValueAtTime(0.04, ctx.currentTime); // Gentle soothing volume

          osc1.connect(filter);
          osc2.connect(filter);
          subOsc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc1.start();
          osc2.start();
          subOsc.start();
          gainNodeRef.current = gain;
        } else {
          if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
          }
          if (gainNodeRef.current) {
            gainNodeRef.current.gain.setTargetAtTime(0.04, audioCtxRef.current.currentTime, 0.4);
          }
        }
        setIsSoundOn(true);
      } catch (err) {
        console.warn('Audio context blocked or unsupported:', err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.3);
      }
      setIsSoundOn(false);
    }
  };

  // Tactile Lamp Switch Sound (Synthesized acoustic click)
  const playClickSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = audioCtxRef.current || new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();

      const osc = ctx.createOscillator();
      const clickGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);

      clickGain.gain.setValueAtTime(0.08, ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);

      osc.connect(clickGain);
      clickGain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignored if sound not allowed
    }
  };

  const handleToggleLight = () => {
    playClickSound();
    setIsLightManuallyOn((prev) => !prev);
  };

  // Timeline Seeking Handler
  const handleSeek = (newVal) => {
    currentProgress.current = newVal;
    targetProgress.current = newVal;
    setProgress(newVal);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const topPos = window.scrollY + rect.top;
      const totalDist = containerRef.current.scrollHeight - window.innerHeight;
      window.scrollTo({ top: topPos + newVal * totalDist, behavior: 'auto' });
    }
  };

  // Chapter Jump Helper
  const totalScenes = CINEMATIC_STORYBOARD.length;
  const activeIndex = Math.min(
    totalScenes - 1,
    Math.max(0, Math.floor(progress * totalScenes))
  );
  const currentScene = CINEMATIC_STORYBOARD[activeIndex];

  const handleJumpChapter = (index) => {
    const ratio = (index + 0.05) / totalScenes;
    handleSeek(ratio);
  };

  // Mobile Touch Gestures for Story Navigation
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe threshold: 50px, with minimal vertical deviation
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 60) {
      if (deltaX < 0) {
        // Swipe Left (in LTR: Next Chapter, in RTL: Prev Chapter)
        const nextIdx = isAr ? Math.max(0, activeIndex - 1) : Math.min(totalScenes - 1, activeIndex + 1);
        handleJumpChapter(nextIdx);
      } else {
        // Swipe Right (in LTR: Prev Chapter, in RTL: Next Chapter)
        const nextIdx = isAr ? Math.min(totalScenes - 1, activeIndex + 1) : Math.max(0, activeIndex - 1);
        handleJumpChapter(nextIdx);
      }
    }
  };

  // Fullscreen Cinema Toggle
  const toggleFullscreen = () => {
    if (!theaterRef.current) return;
    if (!document.fullscreenElement) {
      theaterRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Canvas Video Compositing Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) {
        animId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Atmosphere Base Background
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.48,
        height * 0.1,
        width * 0.5,
        height * 0.48,
        height * 0.8
      );
      bgGrad.addColorStop(0, '#1E1B18');
      bgGrad.addColorStop(0.5, '#131210');
      bgGrad.addColorStop(1, '#080706');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Volumetric 2700K Warm Light Glow
      const isLit = progress > 0.14 ? isLightManuallyOn : false;
      const glowIntensity = isLit ? Math.min(1, (progress - 0.1) * 3) : 0.08;

      if (glowIntensity > 0.05) {
        const glowGrad = ctx.createRadialGradient(
          width * 0.5,
          height * 0.45,
          20,
          width * 0.5,
          height * 0.45,
          Math.min(width, height) * 0.46
        );
        glowGrad.addColorStop(0, `rgba(217, 164, 91, ${0.42 * glowIntensity})`);
        glowGrad.addColorStop(0.35, `rgba(198, 93, 50, ${0.22 * glowIntensity})`);
        glowGrad.addColorStop(0.7, `rgba(180, 80, 40, ${0.06 * glowIntensity})`);
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Floating Atmospheric Golden Particles
      ctx.save();
      const pCount = particlesRef.current.length;
      for (let i = 0; i < pCount; i++) {
        const p = particlesRef.current[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.phase) * 0.00015;
        p.phase += 0.015;

        if (p.y < 0) p.y = 1;
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;

        const px = p.x * width;
        const py = p.y * height;
        const currentAlpha = p.opacity * (isLit ? 0.75 : 0.25);

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 210, 165, ${currentAlpha})`;
        ctx.fill();
      }
      ctx.restore();

      // 4. Multi-Angle Lamp Drawing with Camera Motion
      const imgs = imagesRef.current;
      const targetImg = isLit
        ? (progress > 0.72 && !isLightManuallyOn ? imgs.coverLight : imgs.coverDark)
        : imgs.coverDark;

      // Determine active primary and crossfade secondary image
      let primaryImg = imgs.coverDark;
      let secondaryImg = null;
      let blendRatio = 0;

      if (progress < 0.16) {
        primaryImg = imgs.coverDark;
      } else if (progress >= 0.16 && progress < 0.35) {
        primaryImg = isLit ? imgs.coverDark : imgs.coverLight;
      } else if (progress >= 0.35 && progress < 0.55) {
        primaryImg = imgs.angle1 || imgs.coverDark;
      } else if (progress >= 0.55 && progress < 0.75) {
        primaryImg = imgs.angle2 || imgs.angle1 || imgs.coverDark;
      } else {
        primaryImg = isLightManuallyOn ? imgs.coverDark : (imgs.coverLight || imgs.coverDark);
      }

      const activeImageToDraw = primaryImg || targetImg;

      if (activeImageToDraw && activeImageToDraw.complete && activeImageToDraw.naturalWidth > 0) {
        ctx.save();

        // Subtle camera zoom & floating sway
        const zoomScale = prefersReducedMotion ? 1.0 : 1.0 + progress * 0.12;
        const swayY = Math.sin(progress * Math.PI * 4) * 4;

        ctx.translate(width * 0.5, height * 0.48 + swayY);
        ctx.scale(zoomScale, zoomScale);

        // Aspect fit image inside stage
        const isNarrowViewport = width < 700;
        const maxH = isNarrowViewport
          ? Math.min(height * 0.44, width * 0.9)
          : height * 0.56;
        const scale = maxH / activeImageToDraw.naturalHeight;
        const drawW = activeImageToDraw.naturalWidth * scale;
        const drawH = maxH;

        // Darkness filter on first scene
        if (progress < 0.14) {
          ctx.filter = 'brightness(0.35) contrast(1.2)';
        } else {
          ctx.filter = 'brightness(1) contrast(1.02)';
        }

        ctx.drawImage(activeImageToDraw, -drawW / 2, -drawH / 2, drawW, drawH);
        ctx.restore();
      }

      // 5. Soft vignette overlay
      const vig = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        height * 0.35,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.65
      );
      vig.addColorStop(0, 'rgba(0,0,0,0)');
      vig.addColorStop(1, 'rgba(5,4,4,0.65)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, width, height);

      animId = requestAnimationFrame(render);
    };

    // Resize canvas with high DPI
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [progress, isLightManuallyOn, prefersReducedMotion]);

  // Formatted Video Timecode: 00:00 to 00:18
  const currentSeconds = Math.min(18, Math.floor(progress * 18));
  const timeFormatted = `00:${currentSeconds < 10 ? '0' : ''}${currentSeconds} / 00:18`;

  return (
    <section
      ref={containerRef}
      id="hero-video-story"
      className="hero-video-scroller-container"
      style={{
        position: 'relative',
        backgroundColor: '#0D0C0B',
        color: '#F2EEE6',
        direction: dir
      }}
    >
      {/* Sticky 100vh Fullscreen Cinematic Theater Window */}
      <div
        ref={theaterRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: prefersReducedMotion ? 'relative' : 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080706'
        }}
      >
        {/* Hardware-Accelerated 60 FPS Video Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* Top Floating Cinematic HUD Header */}
        <header
          style={{
            position: 'absolute',
            top: 'clamp(0.8rem, 2.5vh, 1.8rem)',
            left: 0,
            right: 0,
            zIndex: 20,
            padding: '0 clamp(1rem, 3.5vw, 3rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'auto'
          }}
        >
          {/* Eyebrow & Live 4K Cinema Badge */}
          <div className="hero-hud-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-terracotta)',
                boxShadow: '0 0 10px var(--color-terracotta)'
              }}
            />
            <span
              style={{
                fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: isAr ? '0.04em' : '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(242, 238, 230, 0.9)',
                fontWeight: 700
              }}
            >
              {t({
                ar: 'نولار · فيلم تجربة النور والتمرير',
                fr: 'NOULAR · EXPÉRIENCE VIDÉO DÉFILÉE',
                en: 'NOULAR · SCROLL-DRIVEN FILM'
              })}
            </span>

            <span
              className="hidden-mobile"
              style={{
                fontSize: '0.62rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                backgroundColor: 'rgba(217, 164, 91, 0.18)',
                color: 'var(--color-warm-amber)',
                padding: '0.15rem 0.55rem',
                borderRadius: '12px',
                border: '1px solid rgba(217, 164, 91, 0.3)'
              }}
            >
              4K HDR · 60 FPS
            </span>
          </div>

          {/* Interactive Cinema Action Controls */}
          <div className="hero-hud-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Interactive Light Power Toggle */}
            <button
              onClick={handleToggleLight}
              style={{
                background: isLightManuallyOn ? 'rgba(217, 164, 91, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '30px',
                padding: '0.35rem 0.75rem',
                color: isLightManuallyOn ? 'var(--color-warm-amber)' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                transition: 'all 200ms ease'
              }}
              title={isLightManuallyOn ? 'Éteindre la lampe' : 'Allumer la lampe (2700K)'}
            >
              <Lightbulb size={13} />
              <span className="hidden-mobile">
                {isLightManuallyOn
                  ? t({ ar: 'مضاء 2700K', fr: 'Allumé 2700K', en: 'Lit 2700K' })
                  : t({ ar: 'إضاءة', fr: 'Éteint', en: 'Unlit' })}
              </span>
            </button>

            {/* Atelier Ambient Soundscape Toggle */}
            <button
              onClick={toggleSound}
              style={{
                background: isSoundOn ? 'rgba(217, 164, 91, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '30px',
                padding: '0.35rem 0.75rem',
                color: isSoundOn ? 'var(--color-warm-amber)' : '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
                transition: 'all 200ms ease'
              }}
              title={isSoundOn ? 'Couper le son d’ambiance' : 'Activer le son d’ambiance atelier'}
            >
              {isSoundOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span className="hidden-mobile">
                {isSoundOn
                  ? t({ ar: 'صوت الورشة', fr: 'Ambiance', en: 'Sound' })
                  : t({ ar: 'صامت', fr: 'Muet', en: 'Muted' })}
              </span>
            </button>

            {/* Auto Play Cinema Film Mode Button */}
            <button
              onClick={() => setIsPlayingAuto(!isPlayingAuto)}
              style={{
                background: isPlayingAuto ? 'var(--color-warm-amber)' : 'rgba(255, 255, 255, 0.08)',
                color: isPlayingAuto ? '#171614' : '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '30px',
                padding: '0.35rem 0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
                transition: 'all 200ms ease'
              }}
            >
              {isPlayingAuto ? <Pause size={13} /> : <Play size={13} />}
              <span>
                {isPlayingAuto
                  ? t({ ar: 'إيقاف الفيلم', fr: 'Pause', en: 'Pause' })
                  : t({ ar: 'تشغيل سينمائي', fr: 'Cinéma Auto', en: 'Auto Film' })}
              </span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="hidden-mobile"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '30px',
                padding: '0.35rem 0.6rem',
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)'
              }}
              title={isFullscreen ? 'Quitter le plein écran' : 'Plein écran'}
            >
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </header>

        {/* Narrative Storytelling Floating Card */}
        <div
          className="hero-story-card"
          style={{
            position: 'absolute',
            bottom: 'clamp(5.2rem, 12vh, 6.8rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            width: 'min(92%, 660px)',
            backgroundColor: 'rgba(20, 19, 17, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(242, 238, 230, 0.16)',
            padding: 'clamp(1rem, 2.4vw, 1.6rem) clamp(1.2rem, 3.2vw, 2.2rem)',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            textAlign: 'center',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85)',
            transition: 'all 300ms ease'
          }}
        >
          {/* Chapter badge & scene counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: isAr ? '0.06em' : '0.2em',
                color: 'var(--color-warm-amber)',
                textTransform: 'uppercase'
              }}
            >
              {currentScene.tag} · {activeIndex + 1} / {totalScenes}
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: isAr ? 'var(--font-arabic-serif)' : 'var(--font-serif)',
              fontSize: 'clamp(1.45rem, 3.2vw, 2.2rem)',
              color: '#F2EEE6',
              fontWeight: isAr ? 700 : 400,
              letterSpacing: isAr ? 'normal' : '0.02em',
              lineHeight: 1.2
            }}
          >
            {t(currentScene.headline)}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
              fontSize: 'clamp(0.85rem, 1.2vw, 0.94rem)',
              color: '#D9CEBD',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.55
            }}
          >
            {t(currentScene.subtitle)}
          </p>

          {/* Action CTAs on later scenes (04, 05, 06) */}
          {activeIndex >= 3 && (
            <div className="hero-story-cta" style={{ marginTop: '0.6rem', display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onProductSelect(heroProduct.slug)}
                className="btn-noular-primary"
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.74rem',
                  backgroundColor: 'var(--color-warm-amber)',
                  color: '#171614',
                  borderColor: 'var(--color-warm-amber)'
                }}
              >
                {t({
                  ar: 'اكتشف وردة سيينا · 799 درهم',
                  fr: 'WARDA SIENNA · 799 DH',
                  en: 'EXPLORE SIENNA · 799 DH'
                })}
                {isAr ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
              </button>

              <button
                onClick={onExploreCollection}
                className="btn-noular-secondary"
                style={{
                  padding: '0.6rem 1.4rem',
                  fontSize: '0.74rem',
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#FFFFFF'
                }}
              >
                {t({
                  ar: 'المجموعة الكاملة',
                  fr: 'La Collection',
                  en: 'Full Collection'
                })}
              </button>
            </div>
          )}

          {/* Mobile One-Thumb Story Navigation Arrows */}
          <div
            className="mobile-only hero-mobile-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.4rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '0.2rem'
            }}
          >
            <button
              onClick={() => handleJumpChapter(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              style={{
                background: 'none',
                border: 'none',
                color: activeIndex === 0 ? 'rgba(255,255,255,0.2)' : '#FFFFFF',
                fontSize: '0.74rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                cursor: 'pointer'
              }}
            >
              {isAr ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
              <span>{t({ ar: 'السابق', fr: 'Précédent', en: 'Prev' })}</span>
            </button>

            <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.5)' }}>
              {t({ ar: 'اسحب بإصبعك للتنقل', fr: 'Glissez pour naviguer', en: 'Swipe to navigate' })}
            </span>

            <button
              onClick={() => handleJumpChapter(Math.min(totalScenes - 1, activeIndex + 1))}
              disabled={activeIndex === totalScenes - 1}
              style={{
                background: 'none',
                border: 'none',
                color: activeIndex === totalScenes - 1 ? 'rgba(255,255,255,0.2)' : '#FFFFFF',
                fontSize: '0.74rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                cursor: 'pointer'
              }}
            >
              <span>{t({ ar: 'التالي', fr: 'Suivant', en: 'Next' })}</span>
              {isAr ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>
          </div>
        </div>

        {/* Bottom Interactive Video Scrubbing Timeline Bar */}
        <footer
          className="hero-timeline"
          style={{
            position: 'absolute',
            bottom: 'clamp(0.6rem, 1.8vh, 1.2rem)',
            left: 0,
            right: 0,
            padding: '0 clamp(1rem, 3.5vw, 3rem)',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            pointerEvents: 'auto'
          }}
        >
          {/* Chapter Quick-Jump Pins & Titles (Desktop & Tablet) */}
          <div
            className="hidden-mobile"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 0.2rem'
            }}
          >
            {CINEMATIC_STORYBOARD.map((scene, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={i}
                  onClick={() => handleJumpChapter(i)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.2rem 0',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.2rem',
                    color: isActive ? 'var(--color-warm-amber)' : 'rgba(242, 238, 230, 0.45)',
                    transition: 'color 200ms ease'
                  }}
                >
                  <span
                    style={{
                      fontFamily: isAr ? 'var(--font-arabic-sans)' : 'var(--font-sans)',
                      fontSize: '0.65rem',
                      fontWeight: isActive ? 700 : 500
                    }}
                  >
                    0{i + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Scrub Timeline Track */}
          <div
            className="hero-timeline-track"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              handleSeek(ratio);
            }}
            style={{
              position: 'relative',
              width: '100%',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {/* Progress Fill */}
            <div
              style={{
                position: 'absolute',
                left: dir === 'rtl' ? 'auto' : 0,
                right: dir === 'rtl' ? 0 : 'auto',
                width: `${progress * 100}%`,
                height: '100%',
                borderRadius: '4px',
                backgroundColor: 'var(--color-warm-amber)',
                boxShadow: '0 0 10px rgba(217, 164, 91, 0.65)'
              }}
            />

            {/* 6 Chapter Pin Dots on Timeline */}
            {CINEMATIC_STORYBOARD.map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${(i / (totalScenes - 1)) * 100}%`,
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: progress >= i / (totalScenes - 1) ? '#FFFFFF' : 'rgba(255,255,255,0.4)',
                  transform: 'translateX(-50%)',
                  pointerEvents: 'none'
                }}
              />
            ))}
          </div>

          {/* Timecode & Scroll Instruction Indicator */}
          <div
            className="hero-time-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.68rem',
              color: 'rgba(242, 238, 230, 0.7)',
              letterSpacing: '0.08em'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ArrowDown size={12} className="animate-bounce" />
              <span>
                {t({
                  ar: 'مرر للأسفل للتحكم في الفيلم والمشاهد',
                  fr: 'Défilez pour contrôler le film',
                  en: 'Scroll or scrub the visual story'
                })}
              </span>
            </div>

            {/* Timecode readout: 00:03 / 00:18 */}
            <div style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--color-warm-amber)' }}>
              {timeFormatted}
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        .hero-video-scroller-container {
          height: 480vh;
        }
        @media (max-width: 640px) {
          .hero-video-scroller-container {
            height: 320vh;
          }
          .hidden-mobile {
            display: none !important;
          }
        }
        @media (min-width: 641px) {
          .mobile-only {
            display: none !important;
          }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        .animate-bounce {
          animation: bounceSlow 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};
