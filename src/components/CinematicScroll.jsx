import React, { useRef, useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { CINEMATIC_STORYBOARD, PRODUCTS } from '../data/noularData';
import { ArrowRight, Eye } from 'lucide-react';

export const CinematicScroll = ({ onExploreCollection, onProductSelect }) => {
  const containerRef = useRef(null);
  const scrollProgress = useScrollProgress(containerRef, 0.08);
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();
  const { isDark } = useTheme();

  // Active scene calculation: map 0.0 - 1.0 into 6 scenes
  const totalScenes = CINEMATIC_STORYBOARD.length;
  const activeIndex = Math.min(
    totalScenes - 1,
    Math.max(0, Math.floor(scrollProgress * totalScenes))
  );
  const currentScene = CINEMATIC_STORYBOARD[activeIndex];

  // Primary lamp for the sequence: Warda Sienna
  const lamp = PRODUCTS[0];

  // Visual state transitions derived from progress:
  // Darkness (0-0.16) -> Warm light ignition (0.16-0.33) -> Zoom to Form (0.33-0.5) ->
  // Macro Material (0.5-0.66) -> Full reveal with price (0.66-0.83) -> Calm home interior (0.83-1.0)
  const isLightIgnited = scrollProgress > 0.14;
  const zoomScale = prefersReducedMotion ? 1.0 : 1.0 + scrollProgress * 0.16;
  const ambientOpacity = Math.min(1, Math.max(0.15, scrollProgress * 1.2));

  // Determine current image
  let activeImage = lamp.images.coverDark;
  if (scrollProgress >= 0.33 && scrollProgress < 0.5) {
    activeImage = lamp.images.angle1;
  } else if (scrollProgress >= 0.5 && scrollProgress < 0.68) {
    activeImage = lamp.images.angle2;
  } else if (scrollProgress >= 0.68) {
    activeImage = lamp.images.coverLight;
  } else if (scrollProgress < 0.16) {
    activeImage = lamp.images.coverDark;
  }

  const handleJumpToScene = (idx) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const totalDist = containerRef.current.scrollHeight - window.innerHeight;
    const targetScroll = containerTop + (idx / totalScenes) * totalDist + 20;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="cinematic-story"
      style={{
        position: 'relative',
        height: prefersReducedMotion ? 'auto' : '420vh',
        backgroundColor: '#0F0E0D',
        color: '#F2EEE6'
      }}
    >
      {/* Sticky 100vh Viewport Theater */}
      <div
        style={{
          position: prefersReducedMotion ? 'relative' : 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at 50% 50%, #1A1816 0%, #0B0A09 85%)'
        }}
      >
        {/* Ambient Warm 2700K Volumetric Glow Effect */}
        <div
          style={{
            position: 'absolute',
            width: '650px',
            height: '650px',
            borderRadius: '50%',
            background: isLightIgnited
              ? 'radial-gradient(circle, rgba(217, 164, 91, 0.42) 0%, rgba(198, 93, 50, 0.18) 45%, transparent 75%)'
              : 'radial-gradient(circle, rgba(217, 164, 91, 0.05) 0%, transparent 60%)',
            filter: 'blur(45px)',
            opacity: ambientOpacity,
            transition: 'opacity 600ms ease, background 800ms ease',
            pointerEvents: 'none'
          }}
        />

        {/* Real Product Stage */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: '680px',
            width: '88%',
            maxHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img
            src={activeImage}
            alt="NOULAR Warda Lampe Réelle en immersion cinématographique"
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              transform: `scale(${zoomScale})`,
              filter: scrollProgress < 0.15 ? 'brightness(0.35) contrast(1.15)' : 'brightness(1) contrast(1.02)',
              transition: 'filter 500ms ease, opacity 400ms ease',
              borderRadius: '3px'
            }}
          />
        </div>

        {/* Storyboard Narrative Overlay Card */}
        <div
          style={{
            position: 'absolute',
            bottom: 'clamp(2rem, 5vh, 4rem)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            width: 'min(92%, 760px)',
            backgroundColor: 'rgba(23, 22, 20, 0.78)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(242, 238, 230, 0.14)',
            padding: '1.6rem 2rem',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Chapter Eyebrow Tag */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                color: 'var(--color-warm-amber)',
                textTransform: 'uppercase'
              }}
            >
              {currentScene.tag} · {activeIndex + 1} / {totalScenes}
            </span>
          </div>

          {/* Major Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
              color: '#F2EEE6',
              letterSpacing: '0.04em',
              fontWeight: 400
            }}
          >
            {t(currentScene.headline)}
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.92rem',
              color: '#D9CEBD',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.5
            }}
          >
            {t(currentScene.subtitle)}
          </p>

          {/* Interactive Scene Stepper Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '0.6rem'
            }}
          >
            {CINEMATIC_STORYBOARD.map((scene, i) => (
              <button
                key={scene.id}
                onClick={() => handleJumpToScene(i)}
                style={{
                  width: activeIndex === i ? '28px' : '8px',
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: activeIndex === i ? 'var(--color-warm-amber)' : 'rgba(255, 255, 255, 0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 300ms ease'
                }}
                title={`Aller à la scène ${i + 1}`}
              />
            ))}
          </div>

          {/* Scene 5 or 6 CTA */}
          {activeIndex >= 4 && (
            <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                onClick={() => onProductSelect(lamp.slug)}
                className="btn-noular-primary"
                style={{
                  padding: '0.65rem 1.6rem',
                  fontSize: '0.72rem',
                  backgroundColor: 'var(--color-warm-amber)',
                  color: '#171614',
                  borderColor: 'var(--color-warm-amber)'
                }}
              >
                {t({ fr: 'WARDA SIENNA · 799 DH', en: 'EXPLORE SIENNA · 799 DH' })}
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Scroll Progress Bar at Bottom of Viewport */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 20
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${scrollProgress * 100}%`,
              backgroundColor: 'var(--color-warm-amber)',
              transition: 'width 100ms linear'
            }}
          />
        </div>
      </div>
    </section>
  );
};
