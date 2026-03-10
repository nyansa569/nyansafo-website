// app/components/icons/VehicleIcons.tsx
import React from 'react';

interface IconProps {
  className?: string;
  color?: string;
  accentColor?: string;
  size?: number;
}

export const SaloonCarIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Car body - premium sedan shape */}
      <path 
        d="M12 36H52L48 24H16L12 36Z" 
        fill={color} 
        opacity="0.9"
      />
      {/* Hood detail */}
      <path 
        d="M20 28H44L42 24H22L20 28Z" 
        fill={color} 
        opacity="0.7"
      />
      {/* Windows */}
      <path 
        d="M24 28H30V24H26L24 28ZM34 28H40L38 24H34V28Z" 
        fill="white" 
        opacity="0.9"
      />
      {/* Windshield */}
      <path 
        d="M30 28H34V24H30V28Z" 
        fill="white" 
        opacity="0.8"
      />
      {/* Headlights */}
      <circle cx="16" cy="34" r="3" fill={accentColor} />
      <circle cx="48" cy="34" r="3" fill={accentColor} />
      {/* Wheels with premium rim design */}
      <circle cx="20" cy="44" r="6" fill="#333333" />
      <circle cx="20" cy="44" r="4" fill="#666666" />
      <circle cx="20" cy="44" r="2" fill={accentColor} />
      
      <circle cx="44" cy="44" r="6" fill="#333333" />
      <circle cx="44" cy="44" r="4" fill="#666666" />
      <circle cx="44" cy="44" r="2" fill={accentColor} />
      {/* Door line */}
      <line x1="28" y1="36" x2="28" y2="40" stroke="white" strokeWidth="1" opacity="0.5" />
      <line x1="36" y1="36" x2="36" y2="40" stroke="white" strokeWidth="1" opacity="0.5" />
    </svg>
  );
};

export const SUVCarIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SUV Body - more robust, taller */}
      <path 
        d="M10 34H54L50 22H14L10 34Z" 
        fill={color} 
        opacity="0.9"
      />
      {/* Roof rack line - SUV characteristic */}
      <rect x="16" y="18" width="32" height="4" fill={color} opacity="0.6" />
      {/* Grille - more prominent for SUV */}
      <rect x="18" y="26" width="6" height="6" fill="#333333" />
      <rect x="26" y="26" width="6" height="6" fill="#333333" />
      {/* Windows - taller for SUV */}
      <path 
        d="M22 26H30V22H24L22 26ZM34 26H42L40 22H34V26Z" 
        fill="white" 
        opacity="0.9"
      />
      {/* Front windshield - more angled */}
      <path 
        d="M30 26H34V22H30V26Z" 
        fill="white" 
        opacity="0.8"
      />
      {/* Fog lights */}
      <circle cx="16" cy="32" r="2" fill={accentColor} opacity="0.8" />
      <circle cx="48" cy="32" r="2" fill={accentColor} opacity="0.8" />
      {/* Headlights - larger for SUV */}
      <circle cx="14" cy="30" r="3" fill={accentColor} />
      <circle cx="50" cy="30" r="3" fill={accentColor} />
      {/* Heavy duty wheels */}
      <circle cx="20" cy="44" r="7" fill="#333333" />
      <circle cx="20" cy="44" r="5" fill="#555555" />
      <circle cx="20" cy="44" r="3" fill={accentColor} />
      <circle cx="20" cy="44" r="1.5" fill="#FFFFFF" />
      
      <circle cx="44" cy="44" r="7" fill="#333333" />
      <circle cx="44" cy="44" r="5" fill="#555555" />
      <circle cx="44" cy="44" r="3" fill={accentColor} />
      <circle cx="44" cy="44" r="1.5" fill="#FFFFFF" />
      {/* Side step - SUV feature */}
      <rect x="24" y="40" width="16" height="2" fill="#666666" rx="1" />
    </svg>
  );
};

export const BusIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bus body - long rectangular */}
      <rect x="6" y="24" width="52" height="20" rx="2" fill={color} opacity="0.9" />
      {/* Windows row */}
      <rect x="12" y="28" width="8" height="8" fill="white" opacity="0.9" rx="1" />
      <rect x="24" y="28" width="8" height="8" fill="white" opacity="0.9" rx="1" />
      <rect x="36" y="28" width="8" height="8" fill="white" opacity="0.9" rx="1" />
      <rect x="48" y="28" width="6" height="8" fill="white" opacity="0.8" rx="1" />
      {/* Front window */}
      <rect x="6" y="28" width="4" height="8" fill="white" opacity="0.9" rx="1" />
      {/* Headlights */}
      <circle cx="10" cy="38" r="3" fill={accentColor} />
      <circle cx="54" cy="38" r="3" fill={accentColor} />
      {/* Destination sign */}
      <rect x="18" y="18" width="28" height="4" fill="#333333" rx="1" />
      <text x="22" y="22" fontSize="3" fill={accentColor}>ACCRA</text>
      {/* Wheels - double rear wheels for bus */}
      <circle cx="20" cy="48" r="6" fill="#333333" />
      <circle cx="20" cy="48" r="4" fill="#666666" />
      <circle cx="20" cy="48" r="2" fill={accentColor} />
      
      <circle cx="44" cy="48" r="6" fill="#333333" />
      <circle cx="44" cy="48" r="4" fill="#666666" />
      <circle cx="44" cy="48" r="2" fill={accentColor} />
      {/* Bus door */}
      <rect x="30" y="36" width="6" height="8" fill="#666666" rx="1" />
      <circle cx="33" cy="42" r="1" fill={accentColor} />
    </svg>
  );
};

export const HouseIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Roof - premium angled design */}
      <path 
        d="M32 8L8 24H56L32 8Z" 
        fill={color} 
        opacity="0.9"
      />
      {/* Roof peak accent */}
      <path 
        d="M32 8L36 12L28 12L32 8Z" 
        fill={accentColor} 
        opacity="0.8"
      />
      {/* House body */}
      <rect x="16" y="24" width="32" height="28" fill={color} opacity="0.8" />
      {/* Door */}
      <rect x="28" y="36" width="8" height="16" fill="#8B4513" rx="2" />
      <circle cx="32" cy="48" r="2" fill={accentColor} />
      {/* Windows */}
      <rect x="20" y="28" width="6" height="6" fill="white" rx="1" />
      <rect x="38" y="28" width="6" height="6" fill="white" rx="1" />
      {/* Window panes */}
      <line x1="23" y1="28" x2="23" y2="34" stroke={color} strokeWidth="1" />
      <line x1="20" y1="31" x2="26" y2="31" stroke={color} strokeWidth="1" />
      <line x1="41" y1="28" x2="41" y2="34" stroke={color} strokeWidth="1" />
      <line x1="38" y1="31" x2="44" y2="31" stroke={color} strokeWidth="1" />
      {/* Chimney */}
      <rect x="40" y="12" width="8" height="12" fill="#666666" rx="1" />
      {/* Smoke - subtle */}
      <circle cx="44" cy="8" r="2" fill="#CCCCCC" opacity="0.5" />
      <circle cx="48" cy="6" r="1.5" fill="#CCCCCC" opacity="0.4" />
    </svg>
  );
};

export const HealthIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Heart shape - medical symbol */}
      <path 
        d="M32 56L28 52C16 42 8 34 8 24C8 16 14 10 22 10C28 10 32 14 32 14C32 14 36 10 42 10C50 10 56 16 56 24C56 34 48 42 36 52L32 56Z" 
        fill={color} 
        opacity="0.9"
      />
      {/* Heart highlight */}
      <path 
        d="M32 50L28 46C18 38 12 32 12 24C12 18 16 14 22 14C28 14 32 18 32 18C32 18 36 14 42 14C48 14 52 18 52 24C52 32 46 38 36 46L32 50Z" 
        fill={accentColor} 
        opacity="0.3"
      />
      {/* Plus sign - medical cross */}
      <rect x="28" y="22" width="8" height="20" fill="white" opacity="0.9" rx="1" />
      <rect x="22" y="28" width="20" height="8" fill="white" opacity="0.9" rx="1" />
      {/* Pulse line - ECG */}
      <path 
        d="M12 32L20 32L24 26L28 38L32 22L36 34L40 28L44 32L52 32" 
        stroke={accentColor} 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
      />
      {/* Medical dots */}
      <circle cx="20" cy="44" r="2" fill={accentColor} opacity="0.6" />
      <circle cx="44" cy="44" r="2" fill={accentColor} opacity="0.6" />
    </svg>
  );
};

export const TravelIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Airplane body */}
      <path 
        d="M44 32L32 12L20 32L32 52L44 32Z" 
        fill={color} 
        opacity="0.9"
      />
      {/* Wings */}
      <path 
        d="M8 32L20 32L32 20L44 32L56 32L48 36L44 38L32 40L20 38L16 36L8 32Z" 
        fill={color} 
        opacity="0.7"
      />
      {/* Wing details */}
      <path 
        d="M32 20L36 26L32 32L28 26L32 20Z" 
        fill={accentColor} 
        opacity="0.8"
      />
      {/* Windows */}
      <circle cx="28" cy="32" r="2" fill="white" />
      <circle cx="36" cy="32" r="2" fill="white" />
      {/* Engine */}
      <circle cx="44" cy="36" r="3" fill="#666666" />
      <circle cx="44" cy="36" r="1.5" fill={accentColor} />
      {/* Tail */}
      <path 
        d="M40 16L44 12L48 16L44 20L40 16Z" 
        fill={color} 
        opacity="0.8"
      />
      {/* Contrails */}
      <path 
        d="M52 32L60 30M52 34L60 36" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Globe hint - travel everywhere */}
      <circle cx="32" cy="44" r="6" fill="none" stroke={accentColor} strokeWidth="2" />
      <path d="M28 44L36 44M32 40L32 48" stroke={accentColor} strokeWidth="2" />
    </svg>
  );
};

export const ShopIcon: React.FC<IconProps> = ({ 
  className = '', 
  color = '#0B2A4A', 
  accentColor = '#FFD700',
  size = 64 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shop front */}
      <rect x="8" y="24" width="48" height="32" fill={color} opacity="0.9" rx="2" />
      {/* Roof */}
      <path 
        d="M4 24L60 24L52 16H12L4 24Z" 
        fill={color} 
        opacity="0.8"
      />
      {/* Awning */}
      <rect x="12" y="24" width="40" height="6" fill={accentColor} opacity="0.9" />
      {/* Display windows */}
      <rect x="14" y="32" width="10" height="16" fill="white" opacity="0.9" rx="1" />
      <rect x="28" y="32" width="10" height="16" fill="white" opacity="0.9" rx="1" />
      <rect x="42" y="32" width="10" height="16" fill="white" opacity="0.9" rx="1" />
      {/* Door */}
      <rect x="28" y="40" width="10" height="16" fill="#8B4513" rx="2" />
      <circle cx="33" cy="52" r="2" fill={accentColor} />
      {/* Products in windows */}
      <circle cx="19" cy="40" r="2" fill={color} />
      <circle cx="19" cy="48" r="2" fill={color} />
      <rect x="47" y="36" width="4" height="8" fill={color} rx="1" />
      {/* Shop sign */}
      <rect x="24" y="12" width="16" height="6" fill="#333333" rx="2" />
      <text x="28" y="17" fontSize="3" fill={accentColor}>STORE</text>
      {/* Price tags */}
      <path 
        d="M50 20L54 16L52 14L48 18L50 20Z" 
        fill={accentColor} 
        opacity="0.6"
      />
      <circle cx="52" cy="16" r="1" fill="white" />
    </svg>
  );
};

// Combined export for easy imports
export const VehicleIcons = {
  SaloonCar: SaloonCarIcon,
  SUV: SUVCarIcon,
  Bus: BusIcon
};

export const PropertyIcons = {
  House: HouseIcon,
  Shop: ShopIcon
};

export const LifeIcons = {
  Health: HealthIcon,
  Travel: TravelIcon
};