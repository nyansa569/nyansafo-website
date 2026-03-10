// app/components/hero/HeroAlt.tsx
'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './HeroAlt.module.css';

interface CoverageLayer {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  stats: string;
}

const HeroAlt: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const coverageLayers: CoverageLayer[] = [
    {
      id: 0,
      title: "Life Insurance",
      description: "Because their future isn't optional",
      icon: "🛡️",
      color: "#FFD700",
      stats: "100% Payout Rate"
    },
    {
      id: 1,
      title: "Health Coverage",
      description: "Wellness that watches your back",
      icon: "❤️",
      color: "#00C853",
      stats: "5000+ Hospitals"
    },
    {
      id: 2,
      title: "Investment Plans",
      description: "Your money working harder",
      icon: "📈",
      color: "#2196F3",
      stats: "15% Avg Returns"
    },
    {
      id: 3,
      title: "Property Shield",
      description: "Protecting what you built",
      icon: "🏛️",
      color: "#9C27B0",
      stats: "100% Coverage"
    }
  ];

  // Scroll handler - THIS IS WHERE THE MAGIC HAPPENS
  const handleScroll = useCallback((e: WheelEvent) => {
    e.preventDefault();
    
    if (isAnimating) return;

    // Clear any pending scroll timeouts
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    const direction = e.deltaY > 0 ? 'down' : 'up';
    
    scrollTimeout.current = setTimeout(() => {
      if (direction === 'down' && activeLayer < coverageLayers.length - 1) {
        // Scrolling down - reveal next layer
        setIsAnimating(true);
        setActiveLayer(prev => prev + 1);
        
        // Add vibration effect (subtle)
        if (containerRef.current) {
          containerRef.current.style.transform = 'translateY(-5px)';
          setTimeout(() => {
            if (containerRef.current) {
              containerRef.current.style.transform = 'translateY(0)';
            }
          }, 100);
        }
        
        setTimeout(() => setIsAnimating(false), 800);
      } else if (direction === 'up' && activeLayer > 0) {
        // Scrolling up - go to previous layer
        setIsAnimating(true);
        setActiveLayer(prev => prev - 1);
        
        setTimeout(() => setIsAnimating(false), 800);
      }
      
      setHasScrolled(true);
    }, 50); // Debounce scroll

  }, [activeLayer, isAnimating, coverageLayers.length]);

  // Lock scroll and add wheel listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventDefaultScroll = (e: Event) => {
      e.preventDefault();
    };

    // Prevent default scroll on container
    container.addEventListener('wheel', handleScroll as unknown as EventListener, { 
      passive: false 
    });
    
    // Also prevent touchpad/touchscreen scroll
    container.addEventListener('touchmove', preventDefaultScroll, { 
      passive: false 
    });

    return () => {
      container.removeEventListener('wheel', handleScroll as unknown as EventListener);
      container.removeEventListener('touchmove', preventDefaultScroll);
    };
  }, [handleScroll]);

  // On-load animations trigger
  useEffect(() => {
    // Trigger entrance animations
    setTimeout(() => {
      if (layersRef.current) {
        layersRef.current.classList.add(styles.entered);
      }
    }, 100);
  }, []);

  return (
    <div ref={containerRef} className={styles.heroAltContainer}>
      {/* Premium background with floating orbs */}
      <div className={styles.backgroundOrbs}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
      </div>

      {/* Main content */}
      <div className={styles.heroContent}>
        {/* Left side - The Shield/Visual */}
        <div className={styles.visualSide}>
          <div className={styles.shieldContainer}>
            {/* Animated shield that transforms based on layer */}
            <div 
              className={styles.shield}
              style={{
                background: `radial-gradient(circle at 30% 30%, ${coverageLayers[activeLayer].color}, #0B2A4A)`
              }}
            >
              <div className={styles.shieldIcon}>
                {coverageLayers[activeLayer].icon}
              </div>
              
              {/* Protective rings */}
              <div className={styles.ring1} />
              <div className={styles.ring2} />
              <div className={styles.ring3} />
              
              {/* Floating particles (protection symbols) */}
              <div className={styles.particles}>
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className={styles.particle}
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Stats that change with each layer */}
            <div className={styles.shieldStats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{coverageLayers[activeLayer].stats}</span>
                <span className={styles.statLabel}>Active Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text layers */}
        <div ref={layersRef} className={styles.textSide}>
          {/* Brand comes in from top on load */}
          <div className={`${styles.brandReveal} ${hasScrolled ? styles.scrolled : ''}`}>
            <span className={styles.brandName}>NYANSAFO</span>
            <span className={styles.brandTagline}>InsureFintech</span>
          </div>

          {/* Coverage layers - each scroll reveals new one */}
          <div className={styles.layersContainer}>
            {coverageLayers.map((layer, index) => (
              <div
                key={layer.id}
                className={`${styles.layerItem} ${
                  index === activeLayer ? styles.active : ''
                } ${
                  index < activeLayer ? styles.passed : ''
                }`}
                style={{
                  transform: `translateY(${(index - activeLayer) * 100}%)`,
                  opacity: index === activeLayer ? 1 : 0,
                  zIndex: coverageLayers.length - Math.abs(index - activeLayer)
                }}
              >
                <h1 className={styles.layerTitle}>
                  <span 
                    className={styles.layerIcon}
                    style={{ color: layer.color }}
                  >
                    {layer.icon}
                  </span>
                  {layer.title}
                </h1>
                <p className={styles.layerDescription}>
                  {layer.description}
                </p>
                
                {/* Progress bar that fills on active */}
                <div className={styles.layerProgress}>
                  <div 
                    className={styles.progressFill}
                    style={{
                      width: index === activeLayer ? '100%' : 
                             index < activeLayer ? '100%' : '0%',
                      background: layer.color
                    }}
                  />
                </div>

                {/* Action button appears on active layer */}
                {index === activeLayer && (
                  <button className={styles.layerCta}>
                    Secure This Coverage
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Scroll indicator with counter */}
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollCounter}>
              {String(activeLayer + 1).padStart(2, '0')}
              <span>/{String(coverageLayers.length).padStart(2, '0')}</span>
            </div>
            <div className={styles.scrollText}>
              {activeLayer < coverageLayers.length - 1 ? 'Scroll for more coverage' : 'Fully Protected'}
            </div>
            <div className={styles.scrollArrow}>
              <div className={styles.arrow} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating navigation dots */}
      <div className={styles.layerNav}>
        {coverageLayers.map((layer, index) => (
          <button
            key={layer.id}
            className={`${styles.navDot} ${index === activeLayer ? styles.active : ''}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setActiveLayer(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            style={{ '--dot-color': layer.color } as React.CSSProperties}
          >
            <span className={styles.navTooltip}>{layer.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroAlt;