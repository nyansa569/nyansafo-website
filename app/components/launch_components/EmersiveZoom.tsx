// app/components/hero/ImmersiveZoom.tsx
'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './ImmersiveZoom.module.css';

interface ZoomStage {
  id: number;
  scale: number;
  title: string;
  description: string;
  particles: ParticleConfig[];
  color: string;
}

interface ParticleConfig {
  type: 'number' | 'shield' | 'currency' | 'document';
  value: string;
  size: number;
  speed: number;
}

const ImmersiveZoom: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomContentRef = useRef<HTMLDivElement>(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollVelocity, setScrollVelocity] = useState(0);
  
  const zoomStages: ZoomStage[] = [
    {
      id: 0,
      scale: 1,
      title: "Nyansafo",
      description: "Where Trust Meets Innovation",
      color: "#FFD700",
      particles: [
        { type: 'shield', value: '🛡️', size: 60, speed: 1 },
        { type: 'number', value: '100%', size: 40, speed: 1.5 },
        { type: 'currency', value: '₵', size: 50, speed: 2 },
      ]
    },
    {
      id: 1,
      scale: 2.5,
      title: "Security Layers",
      description: "Multi-level protection protocols",
      color: "#00C853",
      particles: [
        { type: 'shield', value: '🔒', size: 45, speed: 1.2 },
        { type: 'document', value: '📋', size: 35, speed: 1.8 },
        { type: 'number', value: '256-bit', size: 30, speed: 2.2 },
      ]
    },
    {
      id: 2,
      scale: 5,
      title: "Data Fortress",
      description: "Your information, impenetrable",
      color: "#2196F3",
      particles: [
        { type: 'shield', value: '🏰', size: 55, speed: 1 },
        { type: 'number', value: '99.99%', size: 40, speed: 1.6 },
        { type: 'currency', value: '∞', size: 60, speed: 2.5 },
      ]
    },
    {
      id: 3,
      scale: 10,
      title: "Quantum Safe",
      description: "Future-proof protection",
      color: "#9C27B0",
      particles: [
        { type: 'shield', value: '⚛️', size: 50, speed: 1.4 },
        { type: 'number', value: 'Q1', size: 45, speed: 2 },
        { type: 'document', value: '🔐', size: 40, speed: 2.8 },
      ]
    }
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse position (-1 to 1)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll zoom handler
  const handleScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isZooming) return;

    const direction = e.deltaY > 0 ? 'in' : 'out';
    const velocity = Math.min(Math.abs(e.deltaY) / 100, 3);
    setScrollVelocity(velocity);

    if (direction === 'in' && currentStage < zoomStages.length - 1) {
      setIsZooming(true);
      setCurrentStage(prev => prev + 1);
      
      // Zoom effect
      if (zoomContentRef.current) {
        zoomContentRef.current.style.transform = `scale(${1 + velocity * 0.5})`;
        setTimeout(() => {
          if (zoomContentRef.current) {
            zoomContentRef.current.style.transform = 'scale(1)';
          }
        }, 200);
      }
      
      setTimeout(() => setIsZooming(false), 800);
    } else if (direction === 'out' && currentStage > 0) {
      setIsZooming(true);
      setCurrentStage(prev => prev - 1);
      
      // Zoom out effect
      if (zoomContentRef.current) {
        zoomContentRef.current.style.transform = `scale(${1 - velocity * 0.3})`;
        setTimeout(() => {
          if (zoomContentRef.current) {
            zoomContentRef.current.style.transform = 'scale(1)';
          }
        }, 200);
      }
      
      setTimeout(() => setIsZooming(false), 800);
    }
  }, [currentStage, isZooming, zoomStages.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('wheel', handleScroll, { passive: false });
    
    // Also handle touchpad pinch zoom
    container.addEventListener('gesturestart', (e) => e.preventDefault());
    
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  // Generate random particles based on current stage
  const renderParticles = () => {
    const stage = zoomStages[currentStage];
    const particles = [];
    
    for (let i = 0; i < 30; i++) {
      const randomParticle = stage.particles[Math.floor(Math.random() * stage.particles.length)];
      const depth = Math.random() * 3; // Z-index depth
      const size = randomParticle.size * (1 + depth * 0.5);
      const speed = randomParticle.speed * (1 + depth);
      
      particles.push(
        <div
          key={i}
          className={styles.particle}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${size}px`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `floatParticle ${10 / speed}s infinite linear`,
            transform: `translateZ(${depth * 100}px)`,
            filter: `blur(${depth * 2}px)`,
            color: stage.color,
            textShadow: `0 0 20px ${stage.color}`,
            animationDelay: `${Math.random() * 5}s`,
            zIndex: Math.floor(depth * 10)
          }}
        >
          {randomParticle.value}
        </div>
      );
    }
    
    return particles;
  };

  return (
    <div ref={containerRef} className={styles.immersiveContainer}>
      {/* Background layers for depth */}
      <div className={styles.backgroundLayers}>
        <div className={`${styles.bgLayer} ${styles.bg1}`} />
        <div className={`${styles.bgLayer} ${styles.bg2}`} />
        <div className={`${styles.bgLayer} ${styles.bg3}`} />
      </div>

      {/* Particle field */}
      <div className={styles.particleField}>
        {renderParticles()}
      </div>

      {/* Main zoom content */}
      <div 
        ref={zoomContentRef}
        className={styles.zoomContent}
        style={{
          '--mouse-x': mousePosition.x,
          '--mouse-y': mousePosition.y,
        } as React.CSSProperties}
      >
        {/* Central core */}
        <div className={styles.coreContainer}>
          <div 
            className={styles.core}
            style={{
              background: `radial-gradient(circle at 30% 30%, ${zoomStages[currentStage].color}, #0B2A4A)`
            }}
          >
            <div className={styles.coreInner}>
              <div className={styles.coreRing1} />
              <div className={styles.coreRing2} />
              <div className={styles.coreRing3} />
            </div>
          </div>
        </div>

        {/* Text that zooms with perspective */}
        <div className={styles.textCore}>
          <h1 
            className={styles.zoomTitle}
            style={{ 
              color: zoomStages[currentStage].color,
              textShadow: `0 0 30px ${zoomStages[currentStage].color}`
            }}
          >
            {zoomStages[currentStage].title}
          </h1>
          <p className={styles.zoomDescription}>
            {zoomStages[currentStage].description}
          </p>
        </div>

        {/* Floating orbs */}
        <div className={styles.floatingOrbs}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={styles.orb}
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                borderColor: zoomStages[currentStage].color,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.1 - i * 0.02,
                transform: `rotate(${i * 72}deg)`
              }}
            />
          ))}
        </div>

        {/* Data streams */}
        <div className={styles.dataStreams}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={styles.stream}
              style={{
                left: `${(i / 8) * 100}%`,
                animationDelay: `${i * 0.2}s`,
                background: `linear-gradient(180deg, transparent, ${zoomStages[currentStage].color}, transparent)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Zoom depth indicator */}
      <div className={styles.zoomIndicator}>
        <div className={styles.depthMeter}>
          <div 
            className={styles.depthFill}
            style={{ 
              width: `${((currentStage + 1) / zoomStages.length) * 100}%`,
              background: zoomStages[currentStage].color
            }}
          />
        </div>
        <div className={styles.depthText}>
          DEPTH: {currentStage + 1}/{zoomStages.length} • {zoomStages[currentStage].scale}x ZOOM
        </div>
      </div>

      {/* Velocity indicator */}
      <div 
        className={styles.velocityRing}
        style={{
          transform: `scale(${1 + scrollVelocity * 0.1})`,
          borderColor: zoomStages[currentStage].color,
          opacity: scrollVelocity * 0.3
        }}
      />

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>SCROLL TO ZOOM</span>
        <div className={styles.scrollHintArrow}>
          <div className={styles.arrowInner} />
        </div>
      </div>
    </div>
  );
};

export default ImmersiveZoom;