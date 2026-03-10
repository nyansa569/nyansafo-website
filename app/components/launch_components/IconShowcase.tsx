// app/components/icons/IconShowcase.tsx
'use client';

import React, { useState } from 'react';
import { 
  SaloonCarIcon, 
  SUVCarIcon, 
  BusIcon, 
  HouseIcon, 
  HealthIcon, 
  TravelIcon, 
  ShopIcon 
} from '../svgs/icons';
import styles from './IconShowcase.module.css';

interface IconCard {
  component: React.FC<any>;
  name: string;
  category: string;
  description: string;
}

const IconShowcase: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [colorScheme, setColorScheme] = useState<'premium' | 'light' | 'dark'>('premium');

  const icons: IconCard[] = [
    { 
      component: SaloonCarIcon, 
      name: 'Saloon Car', 
      category: 'Vehicle',
      description: 'Personal auto insurance'
    },
    { 
      component: SUVCarIcon, 
      name: 'SUV', 
      category: 'Vehicle',
      description: 'Family vehicle coverage'
    },
    { 
      component: BusIcon, 
      name: 'Bus', 
      category: 'Vehicle',
      description: 'Commercial fleet insurance'
    },
    { 
      component: HouseIcon, 
      name: 'House', 
      category: 'Property',
      description: 'Homeowners protection'
    },
    { 
      component: HealthIcon, 
      name: 'Health', 
      category: 'Life',
      description: 'Medical insurance'
    },
    { 
      component: TravelIcon, 
      name: 'Travel', 
      category: 'Life',
      description: 'Trip protection'
    },
    { 
      component: ShopIcon, 
      name: 'Shop', 
      category: 'Property',
      description: 'Business insurance'
    },
  ];

  const getColors = () => {
    switch(colorScheme) {
      case 'premium':
        return { primary: '#0B2A4A', accent: '#FFD700' };
      case 'light':
        return { primary: '#2C3E50', accent: '#3498DB' };
      case 'dark':
        return { primary: '#1A1A2E', accent: '#E94560' };
      default:
        return { primary: '#0B2A4A', accent: '#FFD700' };
    }
  };

  const colors = getColors();

  return (
    <div className={styles.showcaseContainer}>
      <div className={styles.showcaseHeader}>
        <h2 className={styles.showcaseTitle}>
          Nyansafo Insurance <span className={styles.titleAccent}>Icons</span>
        </h2>
        
        <div className={styles.colorSelector}>
          <button 
            className={`${styles.colorBtn} ${colorScheme === 'premium' ? styles.active : ''}`}
            onClick={() => setColorScheme('premium')}
          >
            Premium
          </button>
          <button 
            className={`${styles.colorBtn} ${colorScheme === 'light' ? styles.active : ''}`}
            onClick={() => setColorScheme('light')}
          >
            Light
          </button>
          <button 
            className={`${styles.colorBtn} ${colorScheme === 'dark' ? styles.active : ''}`}
            onClick={() => setColorScheme('dark')}
          >
            Dark
          </button>
        </div>
      </div>

      <div className={styles.iconGrid}>
        {icons.map((icon) => {
          const IconComponent = icon.component;
          const isHovered = hoveredIcon === icon.name;
          
          return (
            <div 
              key={icon.name}
              className={`${styles.iconCard} ${isHovered ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredIcon(icon.name)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <div className={styles.iconWrapper}>
                <IconComponent 
                  color={colors.primary}
                  accentColor={colors.accent}
                  size={isHovered ? 72 : 64}
                />
              </div>
              
              <div className={styles.iconInfo}>
                <h3 className={styles.iconName}>{icon.name}</h3>
                <span className={styles.iconCategory}>{icon.category}</span>
                <p className={styles.iconDescription}>{icon.description}</p>
              </div>

              {isHovered && (
                <div className={styles.iconOverlay}>
                  <button className={styles.useIconBtn}>
                    Use Icon
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Code snippet section */}
      <div className={styles.codeSection}>
        <h3 className={styles.codeTitle}>Implementation</h3>
        <pre className={styles.codeBlock}>
          <code>{`
import { SaloonCarIcon, HealthIcon, HouseIcon } from '@/components/icons/VehicleIcons';

// Use in your component
const MyComponent = () => (
  <div>
    <SaloonCarIcon color="#0B2A4A" accentColor="#FFD700" size={48} />
    <HealthIcon color="#0B2A4A" accentColor="#FFD700" size={48} />
    <HouseIcon color="#0B2A4A" accentColor="#FFD700" size={48} />
  </div>
);
          `}</code>
        </pre>
      </div>
    </div>
  );
};

export default IconShowcase;