// app/components/hero/DrawingIconsHero.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./DrawingIconsHero.module.css";

// Import all our premium icons
import {
  DrawingSaloonCar,
  DrawingSUV,
  DrawingBus,
  DrawingHouse,
  DrawingShop,
  DrawingHealth,
  DrawingAirplane,
} from "../svgs/DrawingIcons";
import Hero from "../logo/logo";

// ============= BACKGROUND ICON MANAGER =============
const BackgroundIcons: React.FC = () => {
  const [activeIconIndex, setActiveIconIndex] = useState(0);
  const [isDrawing, setIsDrawing] = useState(true);

  const icons = [
    { id: "car", Component: DrawingSaloonCar },
    { id: "suv", Component: DrawingSUV },
    { id: "bus", Component: DrawingBus },
    { id: "house", Component: DrawingHouse },
    { id: "shop", Component: DrawingShop },
    { id: "health", Component: DrawingHealth },
    { id: "plane", Component: DrawingAirplane },
  ];

  const positions = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "center-left",
    "center-right",
    "top-center",
    "bottom-center",
  ];

  const handleIconComplete = () => {
    // Move to next icon
    setActiveIconIndex((prev) => (prev + 1) % icons.length);
  };

  return (
    <div className={styles.backgroundIcons}>
      {icons.map((icon, index) => {
        const IconComponent = icon.Component;
        // Calculate if this icon should be active (showing) or not
        // We want multiple icons active at once, each at different positions
        const isActive =
          index === activeIconIndex ||
          index === (activeIconIndex + 1) % icons.length ||
          index === (activeIconIndex + 2) % icons.length ||
          index === (activeIconIndex + 3) % icons.length;

        // Assign different positions for active icons
        let positionClass = "";

        if (index === activeIconIndex) positionClass = "top-left";
        else if (index === (activeIconIndex + 1) % icons.length)
          positionClass = "top-right";
        else if (index === (activeIconIndex + 2) % icons.length)
          positionClass = "bottom-left";
        else if (index === (activeIconIndex + 3) % icons.length)
          positionClass = "bottom-right";
        else positionClass = positions[index % positions.length];

        return (
          <div
            key={icon.id}
            className={`${styles.iconWrapper} ${styles[positionClass]} ${isActive ? styles.active : ""}`}
          >
            <IconComponent
              isActive={isActive}
              onComplete={handleIconComplete}
              duration={8000} // Even slower for background elegance
              size={180}
              strokeColor="#FFD700"
              strokeWidth={1.2} // Ultra thin
            />
          </div>
        );
      })}
    </div>
  );
};

const RotatingWords: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const words = [
    "HEALTH INSURANCE",
    "CAR INSURANCE",
    "BUSINESS INSURANCE",
    "SHOP INSURANCE",
    "TRAVEL INSURANCE",
    "HOME INSURANCE",
  ];

  const nextWordIndex = (currentWordIndex + 1) % words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentWordIndex(nextWordIndex);
        setIsAnimating(false);
      }, 200);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div className={styles.rotatingWordsContainer}>
      {/* <span className={styles.staticText}>Protect the</span> */}

      <div className={styles.wordSlider}>
        {/* Current word */}{" "}
        <span className={`${styles.corner} ${styles.topLeft}`}></span>
        <span className={`${styles.corner} ${styles.topRight}`}></span>
        <span className={`${styles.corner} ${styles.bottomLeft}`}></span>
        <span className={`${styles.corner} ${styles.bottomRight}`}></span>
        <span
          className={`${styles.rotatingWord} ${
            isAnimating ? styles.slideOut : styles.activeWord
          }`}
        >
          {words[currentWordIndex]}
        </span>
        {/* Next word */}
        {isAnimating && (
          <span className={`${styles.rotatingWord} ${styles.slideIn}`}>
            {words[nextWordIndex]}
          </span>
        )}
      </div>

      {/* <span className={styles.staticText}>you love</span> */}
    </div>
  );
};

// ============= SEQUENTIAL TEXT ANIMATION =============
const TextReveal: React.FC<{
  children: React.ReactNode;
  delay: number;
  direction: "left" | "right";
}> = ({ children, delay, direction }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${styles.textReveal} ${styles[direction]} ${isVisible ? styles.visible : ""}`}
    >
      {children}
    </div>
  );
};

// ============= MAIN HERO COMPONENT =============
const DrawingIconsHero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Background with deep navy and subtle gradient */}
      <div className={styles.heroBackground}>
        <div className={styles.gradientOverlay} />
        <div className={styles.particleField}>
          {[...Array(30)].map((_, i) => (
            <div key={i} className={styles.particle} />
          ))}
        </div>
      </div>

      {/* Background Drawing Icons */}
      <BackgroundIcons />

      {/* Main Content */}
      <div className={styles.contentContainer}>
        {/* Top badge - comes from right */}
        <TextReveal delay={500} direction="right">
          <div className={styles.topBadge}>
            <span className={styles.badgeLine} />
            <span className={styles.badgeText}>WELCOME TO</span>
            <span className={styles.badgeLine} />
          </div>
        </TextReveal>

        {/* Main heading - comes from left */}
        <TextReveal delay={1000} direction="left">
          <h1>
            {" "}
            <span className={styles.headingAccent}>NYANSAFO </span>{" "}
          </h1>
          {/* <h4 className={styles.subHeading}>INSURE-FINTECH</h4> */}
        </TextReveal>

        {/* Description - comes from left */}
        <TextReveal delay={1500} direction="right">
          <ul className={styles.description}>
            <li>Live Safe</li>
            <li>Live Protected</li>
            <li>Be Insured</li>
          </ul>
        </TextReveal>

        {/* Rotating words section - comes from right */}
        <TextReveal delay={2000} direction="left">
          <RotatingWords />
        </TextReveal>

        {/* CTA Buttons - comes from right */}
        <TextReveal delay={2500} direction="right">
          <div className={styles.ctaContainer}>
            <button className={styles.primaryCta}>
              Get Protected
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.secondaryCta}>Our Solutions</button>
          </div>
        </TextReveal>

        {/* Scroll indicator - subtle */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollLine} />
        </div>
      </div>

      {/* Corner accents */}
      <div className={`${styles.cornerAccent} ${styles.topLeft}`} />
      <div className={`${styles.cornerAccent} ${styles.topRight}`} />
      <div className={`${styles.cornerAccent} ${styles.bottomLeft}`} />
      <div className={`${styles.cornerAccent} ${styles.bottomRight}`} />
    </section>
  );
};

export default DrawingIconsHero;
