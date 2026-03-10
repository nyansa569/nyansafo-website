// // app/components/hero/HeroSection.tsx
// 'use client';

// import { useRef, useEffect } from 'react';
// import styles from './HeroSection.module.css';

// interface HeroSectionProps {
//   title: string;
//   subtitle: string;
//   description: string;
//   imageSrc: string;
//   imageAlt: string;
//   ctaText: string;
//   ctaLink: string;
//   index: number;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({
//   title,
//   subtitle,
//   description,
//   imageSrc,
//   imageAlt,
//   ctaText,
//   ctaLink,
//   index,
// }) => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const leftRef = useRef<HTMLDivElement>(null);
//   const rightRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;
      
//       // Calculate how far the section is from the top of viewport
//       const distanceFromTop = rect.top;
//       const distanceFromBottom = rect.bottom;
      
//       // Only animate when section is in view
//       if (distanceFromBottom > 0 && distanceFromTop < viewportHeight) {
//         // Progress from 0 to 1 as we scroll through the section
//         const progress = Math.max(0, Math.min(1, 
//           (viewportHeight - distanceFromTop) / (viewportHeight + rect.height)
//         ));
        
//         // Slide left element LEFT (negative translation)
//         // Slide right element RIGHT (positive translation)
//         // Intensity increases as we scroll
//         const translateLeft = -progress * 100; // Moves left off screen
//         const translateRight = progress * 100;  // Moves right off screen
        
//         leftRef.current.style.transform = `translateX(${translateLeft}%)`;
//         rightRef.current.style.transform = `translateX(${translateRight}%)`;
        
//         // Fade out as they slide
//         const opacity = Math.max(0, 1 - progress * 1.5);
//         leftRef.current.style.opacity = opacity.toString();
//         rightRef.current.style.opacity = opacity.toString();
//       }
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll(); // Initial check

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section ref={sectionRef} className={styles.heroSection} data-index={index}>
//       <div className={styles.heroContainer}>
//         {/* Left side - Text */}
//         <div ref={leftRef} className={`${styles.heroLeft} ${styles.heroSplit}`}>
//           <div className={styles.heroContent}>
//             <span className={styles.heroSubtitle}>{subtitle}</span>
//             <h1 className={styles.heroTitle}>{title}</h1>
//             <p className={styles.heroDescription}>{description}</p>
//             <a href={ctaLink} className={styles.heroCta}>
//               {ctaText}
//               <svg className={styles.ctaArrow} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Right side - Image */}
//         <div ref={rightRef} className={`${styles.heroRight} ${styles.heroSplit}`}>
//           <div className={styles.heroImageWrapper}>
//             <img 
//               src={imageSrc} 
//               alt={imageAlt}
//               className={styles.heroImage}
//             />
//             <div className={styles.heroImageOverlay} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  ctaLink: string;
  index: number;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText,
  ctaLink,
  index
}: HeroSectionProps) {

  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {

    const handleScroll = () => {

      if (!sectionRef.current || !leftRef.current || !rightRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      // progress starts ONLY when the section scrolls past the top
      const progress = Math.max(
        0,
        Math.min(1, -rect.top / rect.height)
      );

      const translateLeft = -progress * 100;
      const translateRight = progress * 100;

      const opacity = Math.max(0, 1 - progress * 1.3);

      leftRef.current.style.transform = `translateX(${translateLeft}vw)`;
      rightRef.current.style.transform = `translateX(${translateRight}vw)`;

      leftRef.current.style.opacity = opacity.toString();
      rightRef.current.style.opacity = opacity.toString();
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>

      <div className={styles.heroContainer}>

        {/* LEFT TEXT */}
        <div ref={leftRef} className={`${styles.heroLeft} ${styles.heroSplit}`}>

          <div className={styles.heroContent}>

            <span className={styles.heroSubtitle}>
              {subtitle}
            </span>

            <h1 className={styles.heroTitle}>
              {title}
            </h1>

            <p className={styles.heroDescription}>
              {description}
            </p>

            <a href={ctaLink} className={styles.heroCta}>
              {ctaText}

              <svg
                className={styles.ctaArrow}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </a>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div ref={rightRef} className={`${styles.heroRight} ${styles.heroSplit}`}>

          <div className={styles.heroImageWrapper}>

            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority={index === 0}
              sizes="50vw"
              className={styles.heroImage}
            />

            <div className={styles.heroImageOverlay} />

          </div>

        </div>

      </div>

    </section>
  );
}