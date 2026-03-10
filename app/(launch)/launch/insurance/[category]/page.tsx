// app/launch/insurance/[category]/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import styles from './page.module.css';

// ============= CENTRALIZED DATA FOR ALL INSURANCE PRODUCTS =============
const insuranceProducts = [
  // ===== LIFE INSURANCE =====
  {
    id: 'term-life',
    category: 'life',
    name: 'Term Life Insurance',
    icon: '🛡️',
    shortDesc: 'Affordable coverage for a specific period. Perfect for income replacement and family protection.',
    price: 'From GHS 50/month',
    popular: true,
    color: '#4ECDC4',
    href: '/launch/insurance/life/term-life'
  },
  {
    id: 'whole-life',
    category: 'life',
    name: 'Whole Life Insurance',
    icon: '🌳',
    shortDesc: 'Lifetime coverage that builds cash value. Protect your family and build wealth simultaneously.',
    price: 'From GHS 120/month',
    popular: false,
    color: '#4ECDC4',
    href: '/launch/insurance/life/whole-life'
  },
  {
    id: 'endowment',
    category: 'life',
    name: 'Endowment Plan',
    icon: '🎯',
    shortDesc: 'Save for a specific goal while getting life coverage. Perfect for children\'s education or retirement.',
    price: 'From GHS 80/month',
    popular: true,
    color: '#4ECDC4',
    href: '/launch/insurance/life/endowment'
  },
  {
    id: 'group-life',
    category: 'life',
    name: 'Group Life Insurance',
    icon: '👥',
    shortDesc: 'Coverage for companies and organizations. Protect your employees and their families.',
    price: 'Custom quote',
    popular: false,
    color: '#4ECDC4',
    href: '/launch/insurance/life/group-life'
  },
  {
    id: 'credit-life',
    category: 'life',
    name: 'Credit Life Insurance',
    icon: '💰',
    shortDesc: 'Pays off loans if something happens to you. Protects your family from debt.',
    price: 'From GHS 20/month',
    popular: false,
    color: '#4ECDC4',
    href: '/launch/insurance/life/credit-life'
  },
  {
    id: 'funeral',
    category: 'life',
    name: 'Funeral Insurance',
    icon: '⚱️',
    shortDesc: 'Cover funeral expenses so your family doesn\'t have to worry during difficult times.',
    price: 'From GHS 30/month',
    popular: true,
    color: '#4ECDC4',
    href: '/launch/insurance/life/funeral'
  },

  // ===== HEALTH INSURANCE =====
  {
    id: 'individual',
    category: 'health',
    name: 'Individual Health Plan',
    icon: '❤️',
    shortDesc: 'Comprehensive health coverage for individuals. Hospital visits, medication, and more.',
    price: 'From GHS 80/month',
    popular: true,
    color: '#FFD93D',
    href: '/launch/insurance/health/individual'
  },
  {
    id: 'family',
    category: 'health',
    name: 'Family Health Plan',
    icon: '👨‍👩‍👧‍👦',
    shortDesc: 'Cover your whole family with one plan. Spouse and up to 4 children included.',
    price: 'From GHS 220/month',
    popular: true,
    color: '#FFD93D',
    href: '/launch/insurance/health/family'
  },
  {
    id: 'senior',
    category: 'health',
    name: 'Senior Citizens Health',
    icon: '👵',
    shortDesc: 'Specialized coverage for ages 60+. Comprehensive care for golden years.',
    price: 'From GHS 150/month',
    popular: false,
    color: '#FFD93D',
    href: '/launch/insurance/health/senior'
  },
  {
    id: 'maternity',
    category: 'health',
    name: 'Maternity Insurance',
    icon: '🤰',
    shortDesc: 'Coverage for expecting mothers. Prenatal, delivery, and postnatal care.',
    price: 'From GHS 200/month',
    popular: true,
    color: '#FFD93D',
    href: '/launch/insurance/health/maternity'
  },
  {
    id: 'critical-illness',
    category: 'health',
    name: 'Critical Illness Cover',
    icon: '💪',
    shortDesc: 'Lump sum payment upon diagnosis of covered critical illnesses.',
    price: 'From GHS 60/month',
    popular: false,
    color: '#FFD93D',
    href: '/launch/insurance/health/critical-illness'
  },
  {
    id: 'dental',
    category: 'health',
    name: 'Dental Insurance',
    icon: '🦷',
    shortDesc: 'Coverage for dental care. Checkups, cleanings, and procedures.',
    price: 'From GHS 40/month',
    popular: false,
    color: '#FFD93D',
    href: '/launch/insurance/health/dental'
  },

  // ===== VEHICLE INSURANCE =====
  {
    id: 'comprehensive',
    category: 'vehicle',
    name: 'Comprehensive Car Insurance',
    icon: '🚗',
    shortDesc: 'Full coverage for your vehicle. Accident, theft, fire, and third-party liability.',
    price: 'From GHS 200/month',
    popular: true,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/comprehensive'
  },
  {
    id: 'third-party',
    category: 'vehicle',
    name: 'Third-Party Insurance',
    icon: '🚙',
    shortDesc: 'Minimum legal requirement. Covers damage to others, not your own vehicle.',
    price: 'From GHS 50/month',
    popular: false,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/third-party'
  },
  {
    id: 'suv',
    category: 'vehicle',
    name: 'SUV & 4x4 Insurance',
    icon: '🚙',
    shortDesc: 'Specialized coverage for SUVs and off-road vehicles. Adventure ready.',
    price: 'From GHS 300/month',
    popular: false,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/suv'
  },
  {
    id: 'commercial',
    category: 'vehicle',
    name: 'Commercial Vehicle Insurance',
    icon: '🚚',
    shortDesc: 'Coverage for business vehicles. Tro-tros, taxis, delivery vans, trucks.',
    price: 'Custom quote',
    popular: false,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/commercial'
  },
  {
    id: 'motorcycle',
    category: 'vehicle',
    name: 'Motorcycle Insurance',
    icon: '🏍️',
    shortDesc: 'Coverage for bikes. Perfect for Okada riders and weekend riders.',
    price: 'From GHS 40/month',
    popular: true,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/motorcycle'
  },
  {
    id: 'fleet',
    category: 'vehicle',
    name: 'Fleet Insurance',
    icon: '🚛',
    shortDesc: 'Specialized coverage for businesses with multiple vehicles. Save with fleet discounts.',
    price: 'Custom quote',
    popular: false,
    color: '#6C5CE7',
    href: '/launch/insurance/vehicle/fleet'
  },

  // ===== PROPERTY INSURANCE =====
  {
    id: 'home-building',
    category: 'property',
    name: 'Home Building Insurance',
    icon: '🏠',
    shortDesc: 'Coverage for the structure of your home. Fire, flood, storm, and more.',
    price: 'From GHS 150/month',
    popular: true,
    color: '#FF8E8E',
    href: '/launch/insurance/property/home-building'
  },
  {
    id: 'contents',
    category: 'property',
    name: 'Contents Insurance',
    icon: '🪑',
    shortDesc: 'Protect your belongings. Furniture, electronics, appliances, and personal items.',
    price: 'From GHS 80/month',
    popular: false,
    color: '#FF8E8E',
    href: '/launch/insurance/property/contents'
  },
  {
    id: 'landlord',
    category: 'property',
    name: 'Landlord Insurance',
    icon: '🏛️',
    shortDesc: 'Coverage for rental properties. Tenant damage, loss of rent, liability.',
    price: 'From GHS 200/month',
    popular: false,
    color: '#FF8E8E',
    href: '/launch/insurance/property/landlord'
  },
  {
    id: 'shop',
    category: 'property',
    name: 'Shop Insurance',
    icon: '🏪',
    shortDesc: 'Coverage for retail spaces. Stock, equipment, and business interruption.',
    price: 'From GHS 180/month',
    popular: true,
    color: '#FF8E8E',
    href: '/launch/insurance/property/shop'
  },
  {
    id: 'office',
    category: 'property',
    name: 'Office Insurance',
    icon: '🏢',
    shortDesc: 'Coverage for office spaces. Equipment, furniture, and business assets.',
    price: 'From GHS 160/month',
    popular: false,
    color: '#FF8E8E',
    href: '/launch/insurance/property/office'
  },
  {
    id: 'renters',
    category: 'property',
    name: 'Renters Insurance',
    icon: '🔑',
    shortDesc: 'Affordable protection for tenants. Your belongings matter, even if you rent.',
    price: 'From GHS 50/month',
    popular: true,
    color: '#FF8E8E',
    href: '/launch/insurance/property/renters'
  },

  // ===== TRAVEL INSURANCE =====
  {
    id: 'single-trip',
    category: 'travel',
    name: 'Single Trip Travel Insurance',
    icon: '✈️',
    shortDesc: 'Coverage for one trip. Perfect for vacations and short business trips.',
    price: 'From GHS 80/trip',
    popular: true,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/single-trip'
  },
  {
    id: 'multi-trip',
    category: 'travel',
    name: 'Annual Multi-Trip Insurance',
    icon: '🌍',
    shortDesc: 'Unlimited trips for a year. Perfect for frequent travelers.',
    price: 'From GHS 350/year',
    popular: true,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/multi-trip'
  },
  {
    id: 'student',
    category: 'travel',
    name: 'Student Travel Insurance',
    icon: '🎓',
    shortDesc: 'Coverage for students studying abroad. Medical, tuition, accommodation.',
    price: 'From GHS 200/year',
    popular: false,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/student'
  },
  {
    id: 'business',
    category: 'travel',
    name: 'Business Travel Insurance',
    icon: '💼✈️',
    shortDesc: 'Coverage tailored for business travelers. Laptop cover, meeting delays, and more.',
    price: 'From GHS 120/trip',
    popular: false,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/business'
  },
  {
    id: 'family',
    category: 'travel',
    name: 'Family Travel Insurance',
    icon: '👪',
    shortDesc: 'Coverage for the whole family. Parents and children on one policy.',
    price: 'From GHS 200/trip',
    popular: true,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/family'
  },
  {
    id: 'senior',
    category: 'travel',
    name: 'Senior Travel Insurance',
    icon: '👴',
    shortDesc: 'Coverage for travelers 65+. Medical focus with pre-existing conditions considered.',
    price: 'From GHS 150/trip',
    popular: false,
    color: '#A8E6CF',
    href: '/launch/insurance/travel/senior'
  },

  // ===== BUSINESS INSURANCE =====
  {
    id: 'sme',
    category: 'business',
    name: 'SME Business Package',
    icon: '💼',
    shortDesc: 'Complete coverage for small and medium enterprises. All-in-one protection.',
    price: 'From GHS 250/month',
    popular: true,
    color: '#FF9F1C',
    href: '/launch/insurance/business/sme'
  },
  {
    id: 'professional-indemnity',
    category: 'business',
    name: 'Professional Indemnity',
    icon: '📋',
    shortDesc: 'Protection for professionals. Consultants, architects, doctors, and more.',
    price: 'From GHS 300/month',
    popular: false,
    color: '#FF9F1C',
    href: '/launch/insurance/business/professional-indemnity'
  },
  {
    id: 'cyber',
    category: 'business',
    name: 'Cyber Insurance',
    icon: '💻',
    shortDesc: 'Protect your business from digital threats. Data breaches, ransomware, recovery.',
    price: 'From GHS 180/month',
    popular: true,
    color: '#FF9F1C',
    href: '/launch/insurance/business/cyber'
  },
  {
    id: 'public-liability',
    category: 'business',
    name: 'Public Liability Insurance',
    icon: '🏢',
    shortDesc: 'Coverage for claims from third parties. Injury or damage caused by your business.',
    price: 'From GHS 120/month',
    popular: false,
    color: '#FF9F1C',
    href: '/launch/insurance/business/public-liability'
  },
  {
    id: 'workers-compensation',
    category: 'business',
    name: 'Workers Compensation',
    icon: '👷',
    shortDesc: 'Coverage for employee injuries at work. Medical expenses and lost wages.',
    price: 'From GHS 80/month',
    popular: false,
    color: '#FF9F1C',
    href: '/launch/insurance/business/workers-compensation'
  },
  {
    id: 'trade-credit',
    category: 'business',
    name: 'Trade Credit Insurance',
    icon: '📊',
    shortDesc: 'Protect your receivables. Cover against customer non-payment and bad debt.',
    price: 'Custom quote',
    popular: false,
    color: '#FF9F1C',
    href: '/launch/insurance/business/trade-credit'
  }
];

// Category display names and metadata
const categoryMetadata: Record<string, {
  name: string,
  icon: string,
  description: string,
  color: string,
  gradient: string,
  stats: {
    products: number,
    popular: number,
    avgPrice: string
  }
}> = {
  life: {
    name: 'Life Insurance',
    icon: '🛡️',
    description: 'Protect your loved ones financially when they need it most. Life insurance ensures your family\'s future is secure.',
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    stats: {
      products: 6,
      popular: 3,
      avgPrice: 'GHS 50-120/month'
    }
  },
  health: {
    name: 'Health Insurance',
    icon: '❤️',
    description: 'Access quality healthcare without financial stress. Cover medical expenses for you and your family.',
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    stats: {
      products: 6,
      popular: 3,
      avgPrice: 'GHS 40-220/month'
    }
  },
  vehicle: {
    name: 'Vehicle Insurance',
    icon: '🚗',
    description: 'Protect your vehicle against accidents, theft, and damage. Choose from comprehensive or third-party coverage.',
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    stats: {
      products: 6,
      popular: 2,
      avgPrice: 'GHS 40-300/month'
    }
  },
  property: {
    name: 'Property Insurance',
    icon: '🏠',
    description: 'Safeguard your home, belongings, and business premises against fire, theft, and natural disasters.',
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    stats: {
      products: 6,
      popular: 3,
      avgPrice: 'GHS 50-200/month'
    }
  },
  travel: {
    name: 'Travel Insurance',
    icon: '✈️',
    description: 'Travel with peace of mind. Coverage for medical emergencies, trip cancellation, lost baggage, and more.',
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    stats: {
      products: 6,
      popular: 3,
      avgPrice: 'GHS 80-350/trip'
    }
  },
  business: {
    name: 'Business Insurance',
    icon: '💼',
    description: 'Protect your business from risks. Coverage for property, liability, employees, and cyber threats.',
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    stats: {
      products: 6,
      popular: 2,
      avgPrice: 'GHS 80-300/month'
    }
  }
};

// Helper function to get products by category
const getProductsByCategory = (category: string) => {
  return insuranceProducts.filter(product => product.category === category);
};

export default function InsuranceCategoryPage() {
  const params = useParams();
  const category = params?.category as string;
  const [sortBy, setSortBy] = useState('popular');
  const [filterPopular, setFilterPopular] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Check if category exists
  if (!categoryMetadata[category]) {
    notFound();
  }

  const metadata = categoryMetadata[category];
  const products = getProductsByCategory(category);
  
  // Filter and sort products
  let displayedProducts = [...products];
  
  if (filterPopular) {
    displayedProducts = displayedProducts.filter(p => p.popular);
  }
  
  if (searchQuery) {
    displayedProducts = displayedProducts.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  switch (sortBy) {
    case 'price-low':
      displayedProducts.sort((a, b) => {
        const priceA = a.price === 'Custom quote' ? 999999 : parseInt(a.price.replace(/\D/g, '')) || 0;
        const priceB = b.price === 'Custom quote' ? 999999 : parseInt(b.price.replace(/\D/g, '')) || 0;
        return priceA - priceB;
      });
      break;
    case 'price-high':
      displayedProducts.sort((a, b) => {
        const priceA = a.price === 'Custom quote' ? 0 : parseInt(a.price.replace(/\D/g, '')) || 0;
        const priceB = b.price === 'Custom quote' ? 0 : parseInt(b.price.replace(/\D/g, '')) || 0;
        return priceB - priceA;
      });
      break;
    case 'name':
      displayedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default: // 'popular' - keep original order but show popular first
      displayedProducts.sort((a, b) => (a.popular === b.popular ? 0 : a.popular ? -1 : 1));
  }

  const popularCount = products.filter(p => p.popular).length;

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Scroll to top on page load
    window.scrollTo(0, 0);

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.categoryPage}>
      {/* ============= BREADCRUMBS ============= */}
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/launch/insurance" className={styles.breadcrumbLink}>Insurance</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{metadata.name}</span>
        </div>
      </div>

      {/* ============= CATEGORY HERO ============= */}
      <section 
        className={styles.categoryHero}
        ref={el => { sectionRefs.current[0] = el; }}
        style={{ background: metadata.gradient }}
      >
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}>
              <span>{metadata.icon}</span>
            </div>
            <h1 className={styles.heroTitle}>{metadata.name}</h1>
            <p className={styles.heroDesc}>{metadata.description}</p>
            
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>{metadata.stats.products}</span>
                <span className={styles.statLabel}>Products</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>{popularCount}</span>
                <span className={styles.statLabel}>Popular Plans</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.statNumber}>{metadata.stats.avgPrice}</span>
                <span className={styles.statLabel}>Price Range</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className={styles.heroFloating}>
          {products.slice(0, 3).map((product, index) => (
            <div 
              key={index}
              className={styles.floatingIcon}
              style={{ 
                top: `${20 + index * 30}%`, 
                left: `${70 + index * 10}%`,
                animationDelay: `${index * 2}s`
              }}
            >
              {product.icon}
            </div>
          ))}
        </div>
      </section>

      {/* ============= FILTERS SECTION ============= */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filtersBar}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input 
                type="text"
                placeholder={`Search ${metadata.name}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterOptions}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>
                  <input 
                    type="checkbox"
                    checked={filterPopular}
                    onChange={(e) => setFilterPopular(e.target.checked)}
                  />
                  <span>Popular only</span>
                </label>
              </div>

              <div className={styles.filterGroup}>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={styles.sortSelect}
                >
                  <option value="popular">Sort by: Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <p>Showing <strong>{displayedProducts.length}</strong> of <strong>{products.length}</strong> products</p>
          </div>
        </div>
      </section>

      {/* ============= PRODUCTS GRID ============= */}
      <section 
        className={styles.productsSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.container}>
          {displayedProducts.length > 0 ? (
            <div className={styles.productsGrid}>
              {displayedProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className={styles.productCard}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {product.popular && (
                    <div className={styles.popularBadge}>🔥 Popular</div>
                  )}
                  
                  <div className={styles.productIcon} style={{ background: product.color + '15' }}>
                    <span style={{ color: product.color }}>{product.icon}</span>
                  </div>
                  
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.shortDesc}</p>
                  
                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price}</span>
                    <span className={styles.productLink} style={{ color: product.color }}>
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your filters or search query</p>
              <button 
                className={styles.clearFiltersBtn}
                onClick={() => {
                  setSearchQuery('');
                  setFilterPopular(false);
                  setSortBy('popular');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============= CATEGORY FEATURES ============= */}
      <section 
        className={styles.featuresSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Why Choose Nyansafo for {metadata.name}?</h2>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⚡</div>
              <h3>24-Hour Claims</h3>
              <p>Fast, transparent claims processing. Get paid within 24 hours of approval.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3>100% Digital</h3>
              <p>Buy, manage, and claim entirely from your phone. No paperwork needed.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💰</div>
              <h3>Affordable Premiums</h3>
              <p>Competitive rates starting from as low as GHS 20/month. Payment plans available.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🇬🇭</div>
              <h3>Built for Ghana</h3>
              <p>Designed for Ghanaian needs with local support and understanding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= OTHER CATEGORIES ============= */}
      <section 
        className={styles.categoriesSection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.container}>
          <h2 className={styles.categoriesTitle}>Explore Other Categories</h2>
          
          <div className={styles.categoriesGrid}>
            {Object.entries(categoryMetadata)
              .filter(([key]) => key !== category)
              .map(([key, cat]) => (
                <Link
                  key={key}
                  href={`/launch/insurance/${key}`}
                  className={styles.categoryCard}
                  style={{ borderColor: cat.color }}
                >
                  <div className={styles.categoryIcon} style={{ background: cat.color + '15' }}>
                    <span style={{ color: cat.color }}>{cat.icon}</span>
                  </div>
                  <h3>{cat.name}</h3>
                  <p>{cat.stats.products} products</p>
                  <span className={styles.categoryLink} style={{ color: cat.color }}>
                    Browse →
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section 
        className={styles.ctaSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.ctaCard} style={{ background: metadata.gradient }}>
            <h2 className={styles.ctaTitle}>Need Help Choosing?</h2>
            <p className={styles.ctaText}>
              Our insurance advisors specialize in {metadata.name}. 
              Get personalized recommendations based on your needs.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Talk to an Advisor
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>
                <span>📞</span> Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}