// app/launch/insurance/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const InsurancePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Insurance categories
  const categories = [
    { id: 'all', label: 'All Products', icon: '📋', color: '#FF6B6B' },
    { id: 'life', label: 'Life Insurance', icon: '🛡️', color: '#4ECDC4' },
    { id: 'health', label: 'Health Insurance', icon: '❤️', color: '#FFD93D' },
    { id: 'vehicle', label: 'Vehicle Insurance', icon: '🚗', color: '#6C5CE7' },
    { id: 'property', label: 'Property Insurance', icon: '🏠', color: '#FF8E8E' },
    { id: 'travel', label: 'Travel Insurance', icon: '✈️', color: '#A8E6CF' },
    { id: 'business', label: 'Business Insurance', icon: '💼', color: '#FF9F1C' },
  ];

  // Comprehensive insurance products
  const insuranceProducts = [
    // ===== LIFE INSURANCE (6 products) =====
    {
      id: 1,
      name: 'Term Life Insurance',
      category: 'life',
      icon: '🛡️',
      description: 'Affordable coverage for a specific period. Perfect for income replacement and family protection.',
      features: ['10-30 year terms', 'Fixed premiums', 'Convertible options', 'Family rider available'],
      price: 'From GHS 50/month',
      popular: true,
      color: '#4ECDC4',
      slug: 'term-life',
      href: '/launch/insurance/life/term-life'
    },
    {
      id: 2,
      name: 'Whole Life Insurance',
      category: 'life',
      icon: '🌳',
      description: 'Lifetime coverage that builds cash value. Protect your family and build wealth simultaneously.',
      features: ['Lifetime coverage', 'Cash value growth', 'Fixed premiums', 'Dividend eligible'],
      price: 'From GHS 120/month',
      color: '#4ECDC4',
      slug: 'whole-life',
      href: '/launch/insurance/life/whole-life'
    },
    {
      id: 3,
      name: 'Endowment Plan',
      category: 'life',
      icon: '🎯',
      description: 'Save for a specific goal while getting life coverage. Perfect for children\'s education or retirement.',
      features: ['Maturity benefit', 'Life coverage', 'Tax benefits', 'Goal-based saving'],
      price: 'From GHS 80/month',
      color: '#4ECDC4',
      slug: 'endowment',
      href: '/launch/insurance/life/endowment'
    },
    {
      id: 4,
      name: 'Group Life Insurance',
      category: 'life',
      icon: '👥',
      description: 'Coverage for companies and organizations. Protect your employees and their families.',
      features: ['Employee coverage', 'Flexible terms', 'Tax deductible', 'Easy administration'],
      price: 'Custom quote',
      color: '#4ECDC4',
      slug: 'group-life',
      href: '/launch/insurance/life/group-life'
    },
    {
      id: 5,
      name: 'Credit Life Insurance',
      category: 'life',
      icon: '💰',
      description: 'Pays off loans if something happens to you. Protects your family from debt.',
      features: ['Loan protection', 'Decreasing term', 'Automatic coverage', 'Affordable'],
      price: 'From GHS 20/month',
      color: '#4ECDC4',
      slug: 'credit-life',
      href: '/launch/insurance/life/credit-life'
    },
    {
      id: 6,
      name: 'Funeral Insurance',
      category: 'life',
      icon: '⚱️',
      description: 'Cover funeral expenses so your family doesn\'t have to worry during difficult times.',
      features: ['Immediate coverage', 'Fixed payout', 'No medical exam', 'Family discount'],
      price: 'From GHS 30/month',
      color: '#4ECDC4',
      slug: 'funeral',
      href: '/launch/insurance/life/funeral'
    },

    // ===== HEALTH INSURANCE (6 products) =====
    {
      id: 7,
      name: 'Individual Health Plan',
      category: 'health',
      icon: '❤️',
      description: 'Comprehensive health coverage for individuals. Hospital visits, medication, and more.',
      features: ['Inpatient coverage', 'Outpatient care', 'Maternity options', 'Pharmacy benefits'],
      price: 'From GHS 80/month',
      popular: true,
      color: '#FFD93D',
      slug: 'individual-health',
      href: '/launch/insurance/health/individual'
    },
    {
      id: 8,
      name: 'Family Health Plan',
      category: 'health',
      icon: '👨‍👩‍👧‍👦',
      description: 'Cover your whole family with one plan. Spouse and up to 4 children included.',
      features: ['Family discount', 'Maternity cover', 'Children\'s dental', 'Wellness programs'],
      price: 'From GHS 220/month',
      color: '#FFD93D',
      slug: 'family-health',
      href: '/launch/insurance/health/family'
    },
    {
      id: 9,
      name: 'Senior Citizens Health',
      category: 'health',
      icon: '👵',
      description: 'Specialized coverage for ages 60+. Comprehensive care for golden years.',
      features: ['No upper age limit', 'Pre-existing covered', 'Home care options', 'Annual checkups'],
      price: 'From GHS 150/month',
      color: '#FFD93D',
      slug: 'senior-health',
      href: '/launch/insurance/health/senior'
    },
    {
      id: 10,
      name: 'Maternity Insurance',
      category: 'health',
      icon: '🤰',
      description: 'Coverage for expecting mothers. Prenatal, delivery, and postnatal care.',
      features: ['Prenatal visits', 'Delivery coverage', 'Newborn care', 'Complications cover'],
      price: 'From GHS 200/month',
      color: '#FFD93D',
      slug: 'maternity',
      href: '/launch/insurance/health/maternity'
    },
    {
      id: 11,
      name: 'Critical Illness Cover',
      category: 'health',
      icon: '💪',
      description: 'Lump sum payment upon diagnosis of covered critical illnesses.',
      features: ['15+ illnesses', 'Lump sum payout', 'Survivor benefit', 'Worldwide cover'],
      price: 'From GHS 60/month',
      color: '#FFD93D',
      slug: 'critical-illness',
      href: '/launch/insurance/health/critical-illness'
    },
    {
      id: 12,
      name: 'Dental Insurance',
      category: 'health',
      icon: '🦷',
      description: 'Coverage for dental care. Checkups, cleanings, and procedures.',
      features: ['Preventive care', 'Fillings & extractions', 'Orthodontics', 'No waiting period'],
      price: 'From GHS 40/month',
      color: '#FFD93D',
      slug: 'dental',
      href: '/launch/insurance/health/dental'
    },

    // ===== VEHICLE INSURANCE (6 products) =====
    {
      id: 13,
      name: 'Comprehensive Car Insurance',
      category: 'vehicle',
      icon: '🚗',
      description: 'Full coverage for your vehicle. Accident, theft, fire, and third-party liability.',
      features: ['Own damage', 'Third-party cover', 'Roadside assist', 'Courtesy car'],
      price: 'From GHS 200/month',
      popular: true,
      color: '#6C5CE7',
      slug: 'comprehensive-car',
      href: '/launch/insurance/vehicle/comprehensive'
    },
    {
      id: 14,
      name: 'Third-Party Insurance',
      category: 'vehicle',
      icon: '🚙',
      description: 'Minimum legal requirement. Covers damage to others, not your own vehicle.',
      features: ['Legal compliance', 'Affordable', 'Third-party injury', 'Quick processing'],
      price: 'From GHS 50/month',
      color: '#6C5CE7',
      slug: 'third-party',
      href: '/launch/insurance/vehicle/third-party'
    },
    {
      id: 15,
      name: 'SUV & 4x4 Insurance',
      category: 'vehicle',
      icon: '🚙',
      description: 'Specialized coverage for SUVs and off-road vehicles. Adventure ready.',
      features: ['Off-road cover', 'Modified parts', 'Off-road recovery', 'Adventure add-ons'],
      price: 'From GHS 300/month',
      color: '#6C5CE7',
      slug: 'suv',
      href: '/launch/insurance/vehicle/suv'
    },
    {
      id: 16,
      name: 'Commercial Vehicle',
      category: 'vehicle',
      icon: '🚚',
      description: 'Coverage for business vehicles. Tro-tros, taxis, delivery vans, trucks.',
      features: ['Fleet discounts', 'Cargo cover', 'Driver accident', '24/7 claims'],
      price: 'Custom quote',
      color: '#6C5CE7',
      slug: 'commercial-vehicle',
      href: '/launch/insurance/vehicle/commercial'
    },
    {
      id: 17,
      name: 'Motorcycle Insurance',
      category: 'vehicle',
      icon: '🏍️',
      description: 'Coverage for bikes. Perfect for Okada riders and weekend riders.',
      features: ['Rider cover', 'Pillion cover', 'Theft protection', 'Quick claims'],
      price: 'From GHS 40/month',
      color: '#6C5CE7',
      slug: 'motorcycle',
      href: '/launch/insurance/vehicle/motorcycle'
    },
    {
      id: 18,
      name: 'Fleet Insurance',
      category: 'vehicle',
      icon: '🚛',
      description: 'Specialized coverage for businesses with multiple vehicles. Save with fleet discounts.',
      features: ['Multi-vehicle discount', 'Centralized management', 'Driver training', 'Telematics options'],
      price: 'Custom quote',
      color: '#6C5CE7',
      slug: 'fleet',
      href: '/launch/insurance/vehicle/fleet'
    },

    // ===== PROPERTY INSURANCE (6 products) =====
    {
      id: 19,
      name: 'Home Building Insurance',
      category: 'property',
      icon: '🏠',
      description: 'Coverage for the structure of your home. Fire, flood, storm, and more.',
      features: ['Structure cover', 'Fire & flood', 'Storm damage', 'Rebuild cost'],
      price: 'From GHS 150/month',
      popular: true,
      color: '#FF8E8E',
      slug: 'home-building',
      href: '/launch/insurance/property/home-building'
    },
    {
      id: 20,
      name: 'Contents Insurance',
      category: 'property',
      icon: '🪑',
      description: 'Protect your belongings. Furniture, electronics, appliances, and personal items.',
      features: ['Theft protection', 'Accidental damage', 'Worldwide cover', 'New for old'],
      price: 'From GHS 80/month',
      color: '#FF8E8E',
      slug: 'contents',
      href: '/launch/insurance/property/contents'
    },
    {
      id: 21,
      name: 'Landlord Insurance',
      category: 'property',
      icon: '🏛️',
      description: 'Coverage for rental properties. Tenant damage, loss of rent, liability.',
      features: ['Tenant damage', 'Loss of rent', 'Legal expenses', 'Property owners liability'],
      price: 'From GHS 200/month',
      color: '#FF8E8E',
      slug: 'landlord',
      href: '/launch/insurance/property/landlord'
    },
    {
      id: 22,
      name: 'Shop Insurance',
      category: 'property',
      icon: '🏪',
      description: 'Coverage for retail spaces. Stock, equipment, and business interruption.',
      features: ['Stock cover', 'Equipment', 'Business interruption', 'Public liability'],
      price: 'From GHS 180/month',
      color: '#FF8E8E',
      slug: 'shop',
      href: '/launch/insurance/property/shop'
    },
    {
      id: 23,
      name: 'Office Insurance',
      category: 'property',
      icon: '🏢',
      description: 'Coverage for office spaces. Equipment, furniture, and business assets.',
      features: ['Office equipment', 'Business interruption', 'Public liability', 'Cyber add-on'],
      price: 'From GHS 160/month',
      color: '#FF8E8E',
      slug: 'office',
      href: '/launch/insurance/property/office'
    },
    {
      id: 24,
      name: 'Renters Insurance',
      category: 'property',
      icon: '🔑',
      description: 'Affordable protection for tenants. Your belongings matter, even if you rent.',
      features: ['Personal belongings', 'Liability cover', 'Affordable monthly', 'Easy claims'],
      price: 'From GHS 50/month',
      color: '#FF8E8E',
      slug: 'renters',
      href: '/launch/insurance/property/renters'
    },

    // ===== TRAVEL INSURANCE (6 products) =====
    {
      id: 25,
      name: 'Single Trip Travel',
      category: 'travel',
      icon: '✈️',
      description: 'Coverage for one trip. Perfect for vacations and short business trips.',
      features: ['Medical emergency', 'Trip cancellation', 'Lost baggage', '24hr assistance'],
      price: 'From GHS 80/trip',
      popular: true,
      color: '#A8E6CF',
      slug: 'single-trip',
      href: '/launch/insurance/travel/single-trip'
    },
    {
      id: 26,
      name: 'Annual Multi-Trip',
      category: 'travel',
      icon: '🌍',
      description: 'Unlimited trips for a year. Perfect for frequent travelers.',
      features: ['Unlimited trips', 'Worldwide cover', 'Family options', 'Business cover'],
      price: 'From GHS 350/year',
      color: '#A8E6CF',
      slug: 'multi-trip',
      href: '/launch/insurance/travel/multi-trip'
    },
    {
      id: 27,
      name: 'Student Travel',
      category: 'travel',
      icon: '🎓',
      description: 'Coverage for students studying abroad. Medical, tuition, accommodation.',
      features: ['Tuition protection', 'Accommodation', 'Medical insurance', 'Parent visit'],
      price: 'From GHS 200/year',
      color: '#A8E6CF',
      slug: 'student-travel',
      href: '/launch/insurance/travel/student'
    },
    {
      id: 28,
      name: 'Business Travel',
      category: 'travel',
      icon: '💼✈️',
      description: 'Coverage for business travelers. Laptop cover, meeting delays, and more.',
      features: ['Equipment cover', 'Meeting delay', 'Business documents', 'Extended stay'],
      price: 'From GHS 120/trip',
      color: '#A8E6CF',
      slug: 'business-travel',
      href: '/launch/insurance/travel/business'
    },
    {
      id: 29,
      name: 'Family Travel',
      category: 'travel',
      icon: '👪',
      description: 'Coverage for the whole family. Parents and children on one policy.',
      features: ['Family discount', 'Kids free', 'Group medical', 'Common carrier'],
      price: 'From GHS 200/trip',
      color: '#A8E6CF',
      slug: 'family-travel',
      href: '/launch/insurance/travel/family'
    },
    {
      id: 30,
      name: 'Senior Travel',
      category: 'travel',
      icon: '👴',
      description: 'Coverage for travelers 65+. Medical focus with pre-existing conditions considered.',
      features: ['Medical focus', 'Pre-existing cover', 'Emergency evacuation', '24/7 support'],
      price: 'From GHS 150/trip',
      color: '#A8E6CF',
      slug: 'senior-travel',
      href: '/launch/insurance/travel/senior'
    },

    // ===== BUSINESS INSURANCE (6 products) =====
    {
      id: 31,
      name: 'SME Business Package',
      category: 'business',
      icon: '💼',
      description: 'Complete coverage for small and medium enterprises. All-in-one protection.',
      features: ['Property cover', 'Public liability', 'Employee accident', 'Business interruption'],
      price: 'From GHS 250/month',
      popular: true,
      color: '#FF9F1C',
      slug: 'sme-package',
      href: '/launch/insurance/business/sme'
    },
    {
      id: 32,
      name: 'Professional Indemnity',
      category: 'business',
      icon: '📋',
      description: 'Protection for professionals. Consultants, architects, doctors, and more.',
      features: ['Negligence claims', 'Legal defense', 'Regulatory investigations', 'Worldwide cover'],
      price: 'From GHS 300/month',
      color: '#FF9F1C',
      slug: 'professional-indemnity',
      href: '/launch/insurance/business/professional-indemnity'
    },
    {
      id: 33,
      name: 'Cyber Insurance',
      category: 'business',
      icon: '💻',
      description: 'Protect your business from digital threats. Data breaches, ransomware, recovery.',
      features: ['Data breach cover', 'Ransomware', 'Business interruption', 'PR support'],
      price: 'From GHS 180/month',
      color: '#FF9F1C',
      slug: 'cyber',
      href: '/launch/insurance/business/cyber'
    },
    {
      id: 34,
      name: 'Public Liability',
      category: 'business',
      icon: '🏢',
      description: 'Coverage for claims from third parties. Injury or damage caused by your business.',
      features: ['Third-party injury', 'Property damage', 'Legal costs', 'Product liability'],
      price: 'From GHS 120/month',
      color: '#FF9F1C',
      slug: 'public-liability',
      href: '/launch/insurance/business/public-liability'
    },
    {
      id: 35,
      name: 'Workers Compensation',
      category: 'business',
      icon: '👷',
      description: 'Coverage for employee injuries at work. Medical expenses and lost wages.',
      features: ['Medical cover', 'Lost wages', 'Rehabilitation', 'Death benefit'],
      price: 'From GHS 80/month',
      color: '#FF9F1C',
      slug: 'workers-comp',
      href: '/launch/insurance/business/workers-compensation'
    },
    {
      id: 36,
      name: 'Trade Credit Insurance',
      category: 'business',
      icon: '📊',
      description: 'Protect your receivables. Cover against customer non-payment and bad debt.',
      features: ['Bad debt protection', 'Credit monitoring', 'International trade', 'Debt collection'],
      price: 'Custom quote',
      color: '#FF9F1C',
      slug: 'trade-credit',
      href: '/launch/insurance/business/trade-credit'
    },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? insuranceProducts 
    : insuranceProducts.filter(product => product.category === activeCategory);

  // Popular products (for highlight section)
  const popularProducts = insuranceProducts.filter(product => product.popular);

  // Category stats
  const categoryStats = categories.filter(c => c.id !== 'all').map(category => ({
    ...category,
    count: insuranceProducts.filter(p => p.category === category.id).length
  }));

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

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.insurancePage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span>🛡️ GHANA'S MOST COMPREHENSIVE INSURANCE</span>
          </span>
          
          <h1 className={styles.heroTitle}>
            Insurance for 
            <span className={styles.titleHighlight}> Every Stage of Life</span>
          </h1>
          
          <p className={styles.heroDesc}>
            From protecting your family to securing your business, we have the right coverage for you. 
            <span className={styles.descHighlight}> 36 products • 6 categories • 100% digital</span>
          </p>

          {/* Category quick stats */}
          <div className={styles.categoryStats}>
            {categoryStats.slice(0, 4).map((stat, index) => (
              <div key={index} className={styles.statPill}>
                <span className={styles.statIcon} style={{ color: stat.color }}>{stat.icon}</span>
                <div>
                  <span className={styles.statNumber}>{stat.count}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating product icons */}
        <div className={styles.floatingIcons}>
          <div className={styles.floatingIcon} style={{ top: '15%', left: '5%', animationDelay: '0s' }}>🛡️</div>
          <div className={styles.floatingIcon} style={{ top: '70%', left: '8%', animationDelay: '-2s' }}>❤️</div>
          <div className={styles.floatingIcon} style={{ top: '25%', right: '10%', animationDelay: '-4s' }}>🚗</div>
          <div className={styles.floatingIcon} style={{ bottom: '30%', right: '5%', animationDelay: '-1s' }}>🏠</div>
          <div className={styles.floatingIcon} style={{ bottom: '40%', left: '15%', animationDelay: '-3s' }}>✈️</div>
          <div className={styles.floatingIcon} style={{ top: '45%', right: '15%', animationDelay: '-5s' }}>💼</div>
        </div>
      </section>

      {/* ============= CATEGORY NAVIGATION ============= */}
      <section className={styles.categoryNavSection}>
        <div className={styles.container}>
          <div className={styles.categoryNav}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ 
                  '--category-color': category.color,
                  backgroundColor: activeCategory === category.id ? category.color : 'transparent'
                } as React.CSSProperties}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryLabel}>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============= POPULAR PRODUCTS ============= */}
      <section 
        className={styles.popularSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🔥 MOST POPULAR</span>
            <h2 className={styles.sectionTitle}>
              Ghana's 
              <span className={styles.titleAccent}> Favourite Plans</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Trusted by thousands of Ghanaians. These are our most popular insurance products.
            </p>
          </div>

          <div className={styles.popularGrid}>
            {popularProducts.slice(0, 4).map((product, index) => (
              <Link 
                key={product.id}
                href={product.href}
                className={styles.popularCard}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  borderTopColor: product.color
                }}
              >
                <div className={styles.popularBadge}>🔥 Popular</div>
                <div className={styles.popularIcon} style={{ background: product.color + '20' }}>
                  <span style={{ color: product.color }}>{product.icon}</span>
                </div>
                <h3>{product.name}</h3>
                <p className={styles.popularDesc}>{product.description}</p>
                <div className={styles.popularFeatures}>
                  {product.features.slice(0, 2).map((feature, i) => (
                    <span key={i} className={styles.featurePill}>✓ {feature}</span>
                  ))}
                </div>
                <div className={styles.popularFooter}>
                  <span className={styles.popularPrice}>{product.price}</span>
                  <span className={styles.popularLink} style={{ color: product.color }}>
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============= PRODUCTS GRID ============= */}
      <section 
        className={styles.productsSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {activeCategory === 'all' ? 'All Insurance Products' : 
                categories.find(c => c.id === activeCategory)?.label}
            </h2>
            <p className={styles.sectionSubtitle}>
              {filteredProducts.length} products available • Click any product to learn more
            </p>
          </div>

          <div className={styles.productsGrid}>
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                href={product.href}
                className={styles.productCard}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  '--product-color': product.color 
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className={styles.productIcon} style={{ background: product.color + '15' }}>
                  <span style={{ color: product.color }}>{product.icon}</span>
                </div>
                
                <div className={styles.productContent}>
                  <h3>{product.name}</h3>
                  <p className={styles.productDesc}>{product.description}</p>
                  
                  <div className={styles.productFeatures}>
                    {product.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className={styles.productFeature}>
                        <span className={styles.featureDot} style={{ background: product.color }}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.productFooter}>
                    <span className={styles.productPrice}>{product.price}</span>
                    <span className={styles.productLink} style={{ color: product.color }}>
                      Learn More →
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className={styles.cardGlow} style={{ background: product.color }}></div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.noResults}>
              <span className={styles.noResultsIcon}>🔍</span>
              <h3>No products found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* ============= CATEGORY DEEP DIVE ============= */}
      <section 
        className={styles.categoryDeepDive}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>📊 BY CATEGORY</span>
            <h2 className={styles.sectionTitle}>
              Find the Right 
              <span className={styles.titleAccent}> Coverage for You</span>
            </h2>
          </div>

          <div className={styles.categoryGrid}>
            {categoryStats.map((category, index) => (
              <div 
                key={category.id}
                className={styles.categoryDeepCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.categoryDeepHeader} style={{ background: category.color + '10' }}>
                  <span className={styles.categoryDeepIcon} style={{ color: category.color }}>
                    {category.icon}
                  </span>
                  <h3>{category.label}</h3>
                  <span className={styles.categoryDeepCount}>{category.count} products</span>
                </div>
                <div className={styles.categoryDeepBody}>
                  <ul className={styles.categoryDeepList}>
                    {insuranceProducts
                      .filter(p => p.category === category.id)
                      .slice(0, 4)
                      .map(product => (
                        <li key={product.id}>
                          <Link href={product.href} className={styles.categoryDeepLink}>
                            <span className={styles.categoryDeepBullet} style={{ background: category.color }}></span>
                            {product.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <Link 
                    href={`/launch/insurance?category=${category.id}`} 
                    className={styles.categoryDeepViewAll}
                    style={{ color: category.color }}
                  >
                    View All {category.count} Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= COMPARISON SECTION ============= */}
      <section 
        className={styles.comparisonSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.comparisonCard}>
            <div className={styles.comparisonContent}>
              <span className={styles.comparisonBadge}>⚖️ NEED HELP DECIDING?</span>
              <h2>Compare Insurance Plans</h2>
              <p>Not sure which plan is right for you? Use our comparison tool to see side-by-side features, prices, and benefits.</p>
              <div className={styles.comparisonFeatures}>
                <div className={styles.comparisonFeature}>
                  <span className={styles.comparisonCheck}>✓</span>
                  Compare up to 4 plans
                </div>
                <div className={styles.comparisonFeature}>
                  <span className={styles.comparisonCheck}>✓</span>
                  See price differences
                </div>
                <div className={styles.comparisonFeature}>
                  <span className={styles.comparisonCheck}>✓</span>
                  Feature-by-feature breakdown
                </div>
              </div>
              <button className={styles.comparisonBtn}>
                Start Comparing
                <span className={styles.btnArrow}>→</span>
              </button>
            </div>
            <div className={styles.comparisonVisual}>
              <div className={styles.comparisonShape}>
                <span>⚖️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section 
        className={styles.ctaSection}
        ref={el => { sectionRefs.current[5] = el; }}
      >
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Still Have Questions?
          </h2>
          <p className={styles.ctaText}>
            Our insurance advisors are here to help you find the perfect coverage.
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
          <div className={styles.ctaTrustBadge}>
            <span>⚡ Free consultation • </span>
            <span>📱 100% digital • </span>
            <span>🇬🇭 Made in Ghana</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsurancePage;