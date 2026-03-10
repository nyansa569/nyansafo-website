// app/components/icons/DrawingIcons.tsx
'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './DrawingIcons.module.css';

interface DrawingIconProps {
  onComplete?: () => void;
  isActive?: boolean;
  duration?: number; // in milliseconds
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

// ============= SALOON CAR =============
export const DrawingSaloonCar: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000, // Slower: 6 seconds
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5 // Thinner stroke
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
      style={{ filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.2))' }}
    >
      {/* Main body - elegant sedan shape */}
      <path 
        d="M40 140 L160 140 L145 90 L55 90 L40 140" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="320"
        strokeDashoffset={320 - (progress * 320)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Roof line */}
      <path 
        d="M70 90 L85 60 L115 60 L130 90" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="150"
        strokeDashoffset={150 - (progress * 150)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Windows */}
      <path 
        d="M75 90 L85 65 L105 65 L115 90" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="120"
        strokeDashoffset={120 - (progress * 120)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Front wheel */}
      <circle 
        cx="70" cy="140" r="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="75"
        strokeDashoffset={75 - (progress * 75)}
      />
      {/* Rear wheel */}
      <circle 
        cx="130" cy="140" r="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="75"
        strokeDashoffset={75 - (progress * 75)}
      />
      
      {/* Wheel details */}
      <circle 
        cx="70" cy="140" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      <circle 
        cx="130" cy="140" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      
      {/* Door line */}
      <line 
        x1="100" y1="90" x2="100" y2="120" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="30"
        strokeDashoffset={30 - (progress * 30)}
        strokeLinecap="round"
      />
    </svg>
  );
};

// ============= SUV =============
export const DrawingSUV: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* SUV Body - taller and more robust */}
      <path 
        d="M35 140 L165 140 L150 80 L50 80 L35 140" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="360"
        strokeDashoffset={360 - (progress * 360)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Roof line - higher for SUV */}
      <path 
        d="M60 80 L75 50 L125 50 L140 80" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="180"
        strokeDashoffset={180 - (progress * 180)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Roof rack - SUV characteristic */}
      <line 
        x1="70" y1="45" x2="130" y2="45" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
        strokeLinecap="round"
      />
      <line 
        x1="70" y1="40" x2="70" y2="50" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="10"
        strokeDashoffset={10 - (progress * 10)}
        strokeLinecap="round"
      />
      <line 
        x1="130" y1="40" x2="130" y2="50" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="10"
        strokeDashoffset={10 - (progress * 10)}
        strokeLinecap="round"
      />
      
      {/* Windows */}
      <path 
        d="M65 80 L75 55 H125 L135 80" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="140"
        strokeDashoffset={140 - (progress * 140)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Wheels - larger for SUV */}
      <circle 
        cx="70" cy="140" r="14" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="88"
        strokeDashoffset={88 - (progress * 88)}
      />
      <circle 
        cx="130" cy="140" r="14" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="88"
        strokeDashoffset={88 - (progress * 88)}
      />
      
      {/* Wheel details */}
      <circle 
        cx="70" cy="140" r="7" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="44"
        strokeDashoffset={44 - (progress * 44)}
      />
      <circle 
        cx="130" cy="140" r="7" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="44"
        strokeDashoffset={44 - (progress * 44)}
      />
      
      {/* Side step */}
      <line 
        x1="85" y1="125" x2="115" y2="125" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="30"
        strokeDashoffset={30 - (progress * 30)}
        strokeLinecap="round"
      />
    </svg>
  );
};

// ============= BUS =============
export const DrawingBus: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* Bus body - long rectangle */}
      <rect 
        x="25" y="60" width="150" height="80" rx="8" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="460"
        strokeDashoffset={460 - (progress * 460)}
      />
      
      {/* Roof line */}
      <line 
        x1="25" y1="60" x2="175" y2="60" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="150"
        strokeDashoffset={150 - (progress * 150)}
        strokeLinecap="round"
      />
      
      {/* Windows row */}
      <rect 
        x="40" y="75" width="20" height="25" rx="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="90"
        strokeDashoffset={90 - (progress * 90)}
      />
      <rect 
        x="70" y="75" width="20" height="25" rx="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="90"
        strokeDashoffset={90 - (progress * 90)}
      />
      <rect 
        x="100" y="75" width="20" height="25" rx="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="90"
        strokeDashoffset={90 - (progress * 90)}
      />
      <rect 
        x="130" y="75" width="20" height="25" rx="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="90"
        strokeDashoffset={90 - (progress * 90)}
      />
      
      {/* Front window */}
      <rect 
        x="160" y="70" width="12" height="30" rx="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="84"
        strokeDashoffset={84 - (progress * 84)}
      />
      
      {/* Headlights */}
      <circle 
        cx="35" cy="105" r="5" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      <circle 
        cx="165" cy="105" r="5" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      
      {/* Wheels - bus has larger wheels */}
      <circle 
        cx="60" cy="140" r="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="75"
        strokeDashoffset={75 - (progress * 75)}
      />
      <circle 
        cx="140" cy="140" r="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="75"
        strokeDashoffset={75 - (progress * 75)}
      />
      
      {/* Wheel details */}
      <circle 
        cx="60" cy="140" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      <circle 
        cx="140" cy="140" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      
      {/* Door */}
      <rect 
        x="90" y="95" width="20" height="35" rx="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="110"
        strokeDashoffset={110 - (progress * 110)}
      />
      <circle 
        cx="98" cy="112" r="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="12.5"
        strokeDashoffset={12.5 - (progress * 12.5)}
      />
    </svg>
  );
};

// ============= HOUSE =============
export const DrawingHouse: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* Roof */}
      <path 
        d="M40 100 L100 40 L160 100" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="200"
        strokeDashoffset={200 - (progress * 200)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Chimney */}
      <rect 
        x="120" y="45" width="15" height="30" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="90"
        strokeDashoffset={90 - (progress * 90)}
      />
      
      {/* Smoke */}
      <circle 
        cx="135" cy="35" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      <circle 
        cx="145" cy="28" r="5" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      
      {/* House body */}
      <rect 
        x="50" y="100" width="100" height="70" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="340"
        strokeDashoffset={340 - (progress * 340)}
      />
      
      {/* Door */}
      <rect 
        x="85" y="130" width="30" height="40" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="140"
        strokeDashoffset={140 - (progress * 140)}
      />
      <circle 
        cx="100" cy="155" r="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="19"
        strokeDashoffset={19 - (progress * 19)}
      />
      
      {/* Windows */}
      <rect 
        x="60" y="115" width="15" height="15" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
      />
      {/* Window panes */}
      <line 
        x1="67.5" y1="115" x2="67.5" y2="130" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="15"
        strokeDashoffset={15 - (progress * 15)}
      />
      <line 
        x1="60" y1="122.5" x2="75" y2="122.5" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="15"
        strokeDashoffset={15 - (progress * 15)}
      />
      
      <rect 
        x="125" y="115" width="15" height="15" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
      />
      {/* Window panes */}
      <line 
        x1="132.5" y1="115" x2="132.5" y2="130" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="15"
        strokeDashoffset={15 - (progress * 15)}
      />
      <line 
        x1="125" y1="122.5" x2="140" y2="122.5" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="15"
        strokeDashoffset={15 - (progress * 15)}
      />
    </svg>
  );
};

// ============= SHOP =============
export const DrawingShop: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* Shop front - wider than house */}
      <rect 
        x="30" y="80" width="140" height="90" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="460"
        strokeDashoffset={460 - (progress * 460)}
      />
      
      {/* Roof with decorative edge */}
      <path 
        d="M20 80 L180 80 L165 60 L35 60 L20 80" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="300"
        strokeDashoffset={300 - (progress * 300)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Awning */}
      <path 
        d="M40 80 L40 70 L160 70 L160 80" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="240"
        strokeDashoffset={240 - (progress * 240)}
      />
      
      {/* Large display window */}
      <rect 
        x="45" y="95" width="40" height="45" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="170"
        strokeDashoffset={170 - (progress * 170)}
      />
      {/* Window display items */}
      <circle 
        cx="65" cy="115" r="5" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      <rect 
        x="55" y="125" width="8" height="8" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="32"
        strokeDashoffset={32 - (progress * 32)}
      />
      
      {/* Second window */}
      <rect 
        x="115" y="95" width="40" height="45" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="170"
        strokeDashoffset={170 - (progress * 170)}
      />
      {/* Window display */}
      <rect 
        x="125" y="105" width="8" height="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="40"
        strokeDashoffset={40 - (progress * 40)}
      />
      <rect 
        x="137" y="110" width="8" height="10" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="36"
        strokeDashoffset={36 - (progress * 36)}
      />
      
      {/* Door */}
      <rect 
        x="85" y="130" width="30" height="40" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="140"
        strokeDashoffset={140 - (progress * 140)}
      />
      <circle 
        cx="100" cy="155" r="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="19"
        strokeDashoffset={19 - (progress * 19)}
      />
      
      {/* Open sign */}
      <text 
        x="135" y="45" fontSize="12" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="50"
        strokeDashoffset={50 - (progress * 50)}
      >OPEN</text>
    </svg>
  );
};

// ============= HEALTH with HEARTBEAT =============
export const DrawingHealth: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* Heart shape */}
      <path 
        d="M100 170 L80 150 C50 125, 30 100, 30 75 C30 50, 50 30, 75 30 C90 30, 100 45, 100 45 C100 45, 110 30, 125 30 C150 30, 170 50, 170 75 C170 100, 150 125, 120 150 L100 170" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="450"
        strokeDashoffset={450 - (progress * 450)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Heartbeat line - ZIGZAG through the heart */}
      <path 
        d="M45 90 L70 90 L80 70 L90 110 L100 80 L110 100 L120 85 L130 90 L155 90" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="200"
        strokeDashoffset={200 - (progress * 200)}
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Small pulse dots */}
      <circle 
        cx="70" cy="90" r="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="12.5"
        strokeDashoffset={12.5 - (progress * 12.5)}
      />
      <circle 
        cx="130" cy="90" r="2" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="12.5"
        strokeDashoffset={12.5 - (progress * 12.5)}
      />
    </svg>
  );
};

// ============= AIRPLANE for Travel =============
export const DrawingAirplane: React.FC<DrawingIconProps> = ({ 
  onComplete, 
  isActive,
  duration = 6000,
  size = 200,
  strokeColor = '#FFD700',
  strokeWidth = 1.5
}) => {
  const [progress, setProgress] = useState(0);
  const animationRef =useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();

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
  }, [isActive, duration, onComplete]);

  if (!isActive) return null;

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      className={styles.drawingIcon}
    >
      {/* Main fuselage */}
      <path 
        d="M100 70 L100 130" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
        strokeLinecap="round"
      />
      
      {/* Wings - main */}
      <path 
        d="M40 100 L160 100" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="120"
        strokeDashoffset={120 - (progress * 120)}
        strokeLinecap="round"
      />
      
      {/* Wing tips - angled */}
      <path 
        d="M40 100 L30 85" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
      <path 
        d="M40 100 L30 115" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
      <path 
        d="M160 100 L170 85" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
      <path 
        d="M160 100 L170 115" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
      />
      
      {/* Tail wing */}
      <path 
        d="M130 70 L145 60 L145 80 L130 70" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="60"
        strokeDashoffset={60 - (progress * 60)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Tail fin */}
      <path 
        d="M130 70 L120 50 L140 50 L130 70" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="70"
        strokeDashoffset={70 - (progress * 70)}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Cockpit window */}
      <circle 
        cx="115" cy="85" r="5" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.8}
        strokeDasharray="31"
        strokeDashoffset={31 - (progress * 31)}
      />
      
      {/* Windows along fuselage */}
      <circle 
        cx="100" cy="95" r="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="19"
        strokeDashoffset={19 - (progress * 19)}
      />
      <circle 
        cx="100" cy="105" r="3" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="19"
        strokeDashoffset={19 - (progress * 19)}
      />
      
      {/* Engine pods under wings */}
      <circle 
        cx="70" cy="115" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      <circle 
        cx="130" cy="115" r="6" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth}
        strokeDasharray="38"
        strokeDashoffset={38 - (progress * 38)}
      />
      
      {/* Contrails */}
      <path 
        d="M170 90 L190 85" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="25"
        strokeDashoffset={25 - (progress * 25)}
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M170 100 L190 100" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="20"
        strokeDashoffset={20 - (progress * 20)}
        strokeLinecap="round"
        opacity="0.6"
      />
      <path 
        d="M170 110 L190 115" 
        stroke={strokeColor} 
        strokeWidth={strokeWidth * 0.5}
        strokeDasharray="25"
        strokeDashoffset={25 - (progress * 25)}
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};