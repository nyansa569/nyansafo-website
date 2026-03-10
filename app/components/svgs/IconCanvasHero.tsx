// app/components/hero/IconCanvasHero.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './IconCanvasHero.module.css';

// Individual SVG Components with stroke animation
interface IconSVGProps {
  onComplete?: () => void;
  isActive?: boolean;
}

const SaloonCarSVG: React.FC<IconSVGProps> = ({ onComplete, isActive }) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const duration = 4000; // 4 seconds to draw

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={styles.drawingIcon}>
      {/* Car body */}
      <path 
        d="M25 70 L95 70 L85 40 L35 40 L25 70" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="200"
        strokeDashoffset={200 - (progress * 200)}
        strokeLinecap="round"
      />
      {/* Roof */}
      <path 
        d="M45 40 L55 25 L75 25 L85 40" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="120"
        strokeDashoffset={120 - (progress * 120)}
        strokeLinecap="round"
      />
      {/* Wheels */}
      <circle 
        cx="40" cy="70" r="8" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="50"
        strokeDashoffset={50 - (progress * 50)}
      />
      <circle 
        cx="80" cy="70" r="8" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="50"
        strokeDashoffset={50 - (progress * 50)}
      />
      {/* Window */}
      <path 
        d="M50 40 L55 30 L70 30 L75 40" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
        strokeLinecap="round"
      />
    </svg>
  );
};

const HealthSVG: React.FC<IconSVGProps> = ({ onComplete, isActive }) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const duration = 4000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={styles.drawingIcon}>
      {/* Heart outline */}
      <path 
        d="M60 95 L50 85 C30 70, 15 55, 15 40 C15 25, 25 15, 40 15 C50 15, 60 25, 60 25 C60 25, 70 15, 80 15 C95 15, 105 25, 105 40 C105 55, 90 70, 70 85 L60 95" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="350"
        strokeDashoffset={350 - (progress * 350)}
        strokeLinecap="round"
      />
      {/* Plus sign */}
      <line 
        x1="60" y1="45" x2="60" y2="65" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
      <line 
        x1="50" y1="55" x2="70" y2="55" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
    </svg>
  );
};

const HouseSVG: React.FC<IconSVGProps> = ({ onComplete, isActive }) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const duration = 4000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={styles.drawingIcon}>
      {/* Roof */}
      <path 
        d="M20 60 L60 20 L100 60" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="150"
        strokeDashoffset={150 - (progress * 150)}
        strokeLinecap="round"
      />
      {/* House body */}
      <rect 
        x="35" y="60" width="50" height="35" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="170"
        strokeDashoffset={170 - (progress * 170)}
      />
      {/* Door */}
      <rect 
        x="50" y="75" width="20" height="20" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="80"
        strokeDashoffset={80 - (progress * 80)}
      />
      {/* Window */}
      <circle 
        cx="70" cy="70" r="5" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      {/* Chimney */}
      <rect 
        x="75" y="25" width="10" height="20" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
      />
    </svg>
  );
};

const TravelSVG: React.FC<IconSVGProps> = ({ onComplete, isActive }) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const startTime = Date.now();
    const duration = 4000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      
      setProgress(newProgress);
      
      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className={styles.drawingIcon}>
      {/* Airplane body */}
      <path 
        d="M70 40 L85 55 L70 70 L55 55 L70 40" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="120"
        strokeDashoffset={120 - (progress * 120)}
        strokeLinecap="round"
      />
      {/* Wings */}
      <path 
        d="M40 55 L55 55 L70 40 L85 55 L95 55" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="3"
        strokeDasharray="150"
        strokeDashoffset={150 - (progress * 150)}
        strokeLinecap="round"
      />
      {/* Tail */}
      <path 
        d="M80 30 L90 25 L85 35" 
        fill="none" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="30"
        strokeDashoffset={30 - (progress * 30)}
        strokeLinecap="round"
      />
      {/* Contrails */}
      <path 
        d="M90 50 L105 45 M90 55 L105 55 M90 60 L105 65" 
        stroke="#FFD700" 
        strokeWidth="2"
        strokeDasharray="40"
        strokeDashoffset={40 - (progress * 40)}
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

// Main component
const IconCanvasHero: React.FC = () => {
  const [icons, setIcons] = useState([
    { id: 0, type: 'car', Component: SaloonCarSVG, position: 'bottom-left', isDrawing: true },
    { id: 1, type: 'health', Component: HealthSVG, position: 'top-right', isDrawing: true },
    { id: 2, type: 'house', Component: HouseSVG, position: 'top-left', isDrawing: true },
    { id: 3, type: 'travel', Component: TravelSVG, position: 'bottom-right', isDrawing: true },
  ]);

  const iconTypes = [
    { type: 'car', Component: SaloonCarSVG },
    { type: 'health', Component: HealthSVG },
    { type: 'house', Component: HouseSVG },
    { type: 'travel', Component: TravelSVG },
  ];

  const handleIconComplete = (iconId: number) => {
    setIcons(prev => prev.map(icon => {
      if (icon.id === iconId) {
        // Get random next icon type
        const availableTypes = iconTypes.filter(t => t.type !== icon.type);
        const nextType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
        
        return {
          ...icon,
          type: nextType.type,
          Component: nextType.Component,
          isDrawing: true
        };
      }
      return icon;
    }));
  };

  return (
    <section className={styles.heroCanvas}>
      {/* Background gradient */}
      <div className={styles.backgroundGradient} />
      
      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} />
        ))}
      </div>

      {/* Icon positions */}
      {icons.map(icon => {
        const IconComponent = icon.Component;
        return (
          <div 
            key={icon.id} 
            className={`${styles.iconPosition} ${styles[icon.position]}`}
          >
            <IconComponent 
              onComplete={() => handleIconComplete(icon.id)}
              isActive={icon.isDrawing}
            />
          </div>
        );
      })}

      {/* Center content */}
      <div className={styles.centerContent}>
        <div className={styles.contentWrapper}>
          <span className={styles.badge}>Nyansafo</span>
          <h1 className={styles.mainTitle}>
            Protecting What
            <span className={styles.highlight}> Matters Most</span>
          </h1>
          <p className={styles.subtitle}>
            Insurance • Finance • Security
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryCta}>
              Get Protected
            </button>
            <button className={styles.secondaryCta}>
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className={styles.cornerDecoration} />
    </section>
  );
};

export default IconCanvasHero;