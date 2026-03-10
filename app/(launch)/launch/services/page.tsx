// app/services/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Service categories
  const categories = [
    { id: 'all', label: 'All Services', color: '#FF6B6B' },
    { id: 'life', label: 'Life & Health', color: '#4ECDC4' },
    { id: 'vehicle', label: 'Vehicle', color: '#FFD93D' },
    { id: 'property', label: 'Property', color: '#6C5CE7' },
    { id: 'business', label: 'Business', color: '#FF8E8E' },
    { id: 'travel', label: 'Travel', color: '#A8E6CF' },
  ];

  // All services data - comprehensive and vibrant
  const allServices = [
    // Life & Health (4)
    {
      id: 1,
      title: 'Life Insurance',
      category: 'life',
      icon: '🛡️',
      description: 'Secure your family\'s future with our transparent life coverage. No hidden clauses, just pure protection.',
      features: ['24-hour claim processing', 'Track online', 'Flexible premiums', 'Family rider options'],
      color: '#4ECDC4',
      popular: true,
      image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Health Insurance',
      category: 'life',
      icon: '❤️',
      description: 'Access quality healthcare with Ghana\'s most straightforward health cover. Hospital visits, medications, and more.',
      features: ['500+ partner hospitals', 'Drug coverage', 'No paperwork', 'Family plans'],
      color: '#4ECDC4',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Critical Illness',
      category: 'life',
      icon: '💪',
      description: 'Financial support when you need it most. Lump sum payment upon diagnosis of covered illnesses.',
      features: ['15 critical illnesses', 'Lump sum payout', 'No questions asked', 'Affordable rates'],
      color: '#4ECDC4',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Disability Cover',
      category: 'life',
      icon: '🤝',
      description: 'Income protection if you can\'t work due to injury or illness. Because life happens.',
      features: ['Monthly income', 'Partial disability', 'Rehab support', 'Return-to-work program'],
      color: '#4ECDC4',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop'
    },

    // Vehicle (4)
    {
      id: 5,
      title: 'Comprehensive Car Insurance',
      category: 'vehicle',
      icon: '🚗',
      description: 'Full coverage for your saloon car. Accidents, theft, fire, and third-party liability.',
      features: ['24/7 roadside assist', 'Quick claims', 'Choice of mechanic', 'No depreciation'],
      color: '#FFD93D',
      popular: true,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 6,
      title: 'SUV & 4x4 Insurance',
      category: 'vehicle',
      icon: '🚙',
      description: 'Specialized coverage for your SUV, built for Ghana\'s roads. Off-road protection included.',
      features: ['Off-road cover', 'Adventure add-ons', 'Off-road recovery', 'Modified vehicle cover'],
      color: '#FFD93D',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 7,
      title: 'Commercial Vehicle',
      category: 'vehicle',
      icon: '🚚',
      description: 'Coverage for your business fleet. Tro-tros, taxis, delivery vans, and trucks.',
      features: ['Fleet discounts', 'Cargo cover', 'Driver accident cover', '24hr claims'],
      color: '#FFD93D',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 8,
      title: 'Motorcycle Insurance',
      category: 'vehicle',
      icon: '🏍️',
      description: 'Affordable coverage for your bike. Perfect for Okada riders and weekend cruisers.',
      features: ['Rider personal accident', 'Pillion cover', 'Theft protection', 'Quick claims'],
      color: '#FFD93D',
      image: 'https://images.unsplash.com/photo-1558981285-501cfb4b4cf2?q=80&w=2070&auto=format&fit=crop'
    },

    // Property (4)
    {
      id: 9,
      title: 'Home Insurance',
      category: 'property',
      icon: '🏠',
      description: 'Protect your biggest investment. Structure, contents, and liability coverage.',
      features: ['Fire & flood cover', 'Theft protection', 'Contents insurance', 'Landlord options'],
      color: '#6C5CE7',
      popular: true,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 10,
      title: 'Renters Insurance',
      category: 'property',
      icon: '🔑',
      description: 'Affordable protection for tenants. Your belongings matter, even if you rent.',
      features: ['Personal belongings', 'Liability cover', 'Affordable monthly', 'Easy claims'],
      color: '#6C5CE7',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop'
    },
    {
      id: 11,
      title: 'Shop & Store Insurance',
      category: 'property',
      icon: '🏪',
      description: 'Coverage for your business premises. Stock, equipment, and business interruption.',
      features: ['Stock cover', 'Equipment protection', 'Business interruption', 'Public liability'],
      color: '#6C5CE7',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 12,
      title: 'Landlord Protection',
      category: 'property',
      icon: '🏛️',
      description: 'Specialized coverage for rental property owners. Tenant damage, loss of rent, and more.',
      features: ['Tenant damage cover', 'Loss of rent', 'Legal expenses', 'Property owners liability'],
      color: '#6C5CE7',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop'
    },

    // Business (4)
    {
      id: 13,
      title: 'Business Insurance',
      category: 'business',
      icon: '💼',
      description: 'Comprehensive cover for your SME. Property, liability, and employee protection.',
      features: ['Property cover', 'Public liability', 'Employee accident', 'Business interruption'],
      color: '#FF8E8E',
      popular: true,
      image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 14,
      title: 'Professional Indemnity',
      category: 'business',
      icon: '📋',
      description: 'Protection for professionals. Consultants, architects, doctors, and more.',
      features: ['Negligence claims', 'Legal defense', 'Regulatory investigations', 'Worldwide cover'],
      color: '#FF8E8E',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 15,
      title: 'Cyber Insurance',
      category: 'business',
      icon: '💻',
      description: 'Protect your business from digital threats. Data breaches, ransomware, and recovery.',
      features: ['Data breach cover', 'Ransomware', 'Business interruption', 'PR support'],
      color: '#FF8E8E',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 16,
      title: 'Trade Credit Insurance',
      category: 'business',
      icon: '📊',
      description: 'Protect your receivables. Cover against customer non-payment and bad debt.',
      features: ['Bad debt protection', 'Credit monitoring', 'International trade', 'Debt collection'],
      color: '#FF8E8E',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    },

    // Travel (4)
    {
      id: 17,
      title: 'Single Trip Travel',
      category: 'travel',
      icon: '✈️',
      description: 'Coverage for your vacation or business trip. Medical, baggage, and cancellation.',
      features: ['Medical emergency', 'Trip cancellation', 'Lost baggage', '24hr assistance'],
      color: '#A8E6CF',
      popular: true,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 18,
      title: 'Annual Multi-Trip',
      category: 'travel',
      icon: '🌍',
      description: 'Unlimited trips for a year. Perfect for frequent travelers and business people.',
      features: ['Unlimited trips', 'Worldwide cover', 'Family options', 'Business cover'],
      color: '#A8E6CF',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 19,
      title: 'Student Travel',
      category: 'travel',
      icon: '🎓',
      description: 'Special coverage for students studying abroad. Medical, tuition, and accommodation.',
      features: ['Tuition protection', 'Accommodation cover', 'Medical insurance', 'Parent visit cover'],
      color: '#A8E6CF',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 20,
      title: 'Business Travel',
      category: 'travel',
      icon: '💼✈️',
      description: 'Coverage tailored for business travelers. Laptop cover, meeting delays, and more.',
      features: ['Equipment cover', 'Meeting delay', 'Business documents', 'Extended stay options'],
      color: '#A8E6CF',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  // Popular services (for highlight section)
  const popularServices = allServices.filter(service => service.popular);

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
    <main className={styles.servicesPage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span>🇬🇭 INSURANCE FOR GHANAIANS</span>
          </span>
          
          <h1 className={styles.heroTitle}>
            Our 
            <span className={styles.titleHighlight}> Services</span>
          </h1>
          
          <p className={styles.heroDesc}>
            From your car to your health, your home to your business — 
            we've built transparent, trackable insurance that actually works.
            <span className={styles.descHighlight}> No fine print. Just protection.</span>
          </p>

          {/* Quick stats */}
          <div className={styles.quickStats}>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>20+</span>
              <span className={styles.statPillLabel}>Insurance Products</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>5</span>
              <span className={styles.statPillLabel}>Categories</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>24h</span>
              <span className={styles.statPillLabel}>Claims Processing</span>
            </div>
          </div>
        </div>

        {/* Floating service icons */}
        <div className={styles.floatingIcons}>
          <div className={styles.floatingIcon} style={{ top: '20%', left: '10%', animationDelay: '0s' }}>🚗</div>
          <div className={styles.floatingIcon} style={{ top: '60%', left: '5%', animationDelay: '-2s' }}>🏠</div>
          <div className={styles.floatingIcon} style={{ top: '30%', right: '8%', animationDelay: '-4s' }}>❤️</div>
          <div className={styles.floatingIcon} style={{ bottom: '25%', right: '12%', animationDelay: '-1s' }}>✈️</div>
          <div className={styles.floatingIcon} style={{ bottom: '40%', left: '15%', animationDelay: '-3s' }}>💼</div>
        </div>
      </section>

      {/* ============= POPULAR SERVICES ============= */}
      <section 
        className={styles.popularSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>🔥 MOST POPULAR</span>
          <h2 className={styles.sectionTitle}>
            Ghana's 
            <span className={styles.titleAccent}> Favourites</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Trusted by thousands of Ghanaians. These are our most-loved insurance products.
          </p>
        </div>

        <div className={styles.popularGrid}>
          {popularServices.map((service, index) => (
            <div 
              key={service.id}
              className={styles.popularCard}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                background: `linear-gradient(135deg, ${service.color}20, white)`,
                borderTopColor: service.color
              }}
            >
              <div className={styles.popularBadge}>🔥 Popular</div>
              <div className={styles.popularIcon} style={{ background: service.color + '20' }}>
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.popularFeatures}>
                {service.features.slice(0, 2).map((feature, i) => (
                  <span key={i} className={styles.featurePill}>✓ {feature}</span>
                ))}
              </div>
              <button className={styles.learnMoreBtn} style={{ color: service.color }}>
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ============= CATEGORY FILTER ============= */}
      <section className={styles.filterSection}>
        <div className={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryBtn} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ 
                '--category-color': category.color,
                backgroundColor: activeCategory === category.id ? category.color : 'transparent'
              } as React.CSSProperties}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* ============= SERVICES GRID ============= */}
      <section 
        className={styles.servicesGridSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.servicesGrid}>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--service-color': service.color 
              } as React.CSSProperties}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image Section with Morphing Shape */}
              <div className={styles.serviceImageContainer}>
                <div className={`${styles.serviceMorphShape} ${hoveredService === service.id ? styles.hovered : ''}`}>
                  <img src={service.image} alt={service.title} />
                </div>
                <div className={styles.serviceIcon} style={{ background: service.color }}>
                  <span>{service.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                      <span className={styles.featureDot} style={{ background: service.color }}></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.serviceFooter}>
                  <button className={styles.getQuoteBtn} style={{ background: service.color }}>
                    Get Quote
                  </button>
                  <button className={styles.detailsBtn}>
                    Details
                  </button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className={styles.cardGlow} style={{ background: service.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= WHY CHOOSE US SECTION ============= */}
      <section 
        className={styles.whySection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.whyContainer}>
          <div className={styles.whyContent}>
            <span className={styles.sectionBadge}>✨ WHY NYANSAFO</span>
            <h2 className={styles.sectionTitle}>
              Insurance That's 
              <span className={styles.titleAccent}> Different By Design</span>
            </h2>

            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon} style={{ background: '#FF6B6B20' }}>
                  <span>⚡</span>
                </div>
                <h3>24-Hour Claims</h3>
                <p>From submission to payout in under a day. Track every step.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon} style={{ background: '#4ECDC420' }}>
                  <span>📱</span>
                </div>
                <h3>100% Digital</h3>
                <p>Buy, manage, and claim entirely from your phone.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon} style={{ background: '#FFD93D20' }}>
                  <span>🔍</span>
                </div>
                <h3>Full Transparency</h3>
                <p>No hidden clauses. You see exactly what you're covered for.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.reasonIcon} style={{ background: '#6C5CE720' }}>
                  <span>🇬🇭</span>
                </div>
                <h3>Built for Ghana</h3>
                <p>By Ghanaians, for Ghanaians. We understand your needs.</p>
              </div>
            </div>
          </div>

          {/* Morphing shape with stats */}
          <div className={styles.whyVisual}>
            <div className={styles.whyMorphShape}>
              <div className={styles.shapeStats}>
                <div className={styles.shapeStat}>
                  <span className={styles.shapeStatValue}>20+</span>
                  <span className={styles.shapeStatLabel}>Products</span>
                </div>
                <div className={styles.shapeStat}>
                  <span className={styles.shapeStatValue}>15K+</span>
                  <span className={styles.shapeStatLabel}>Clients</span>
                </div>
                <div className={styles.shapeStat}>
                  <span className={styles.shapeStatValue}>24h</span>
                  <span className={styles.shapeStatLabel}>Claims</span>
                </div>
              </div>
            </div>
            <div className={styles.shapeAccent1}></div>
            <div className={styles.shapeAccent2}></div>
          </div>
        </div>
      </section>

      {/* ============= COMPARISON SECTION ============= */}
      <section 
        className={styles.comparisonSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <h2 className={styles.sectionTitleCenter}>
          Nyansafo vs 
          <span className={styles.titleAccent}> Traditional Insurance</span>
        </h2>

        <div className={styles.comparisonTable}>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonFeature}>Claims Processing</div>
            <div className={styles.comparisonTraditional}>⏱️ 2-4 weeks</div>
            <div className={styles.comparisonNyansafo}>⚡ 24 hours</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonFeature}>Paperwork</div>
            <div className={styles.comparisonTraditional}>📝 Mountains of forms</div>
            <div className={styles.comparisonNyansafo}>📱 100% digital</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonFeature}>Claim Tracking</div>
            <div className={styles.comparisonTraditional}>❓ You wait and call</div>
            <div className={styles.comparisonNyansafo}>🔍 Real-time updates</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonFeature}>Fine Print</div>
            <div className={styles.comparisonTraditional}>📜 Endless clauses</div>
            <div className={styles.comparisonNyansafo}>✅ Clear and simple</div>
          </div>
          <div className={styles.comparisonRow}>
            <div className={styles.comparisonFeature}>Customer Support</div>
            <div className={styles.comparisonTraditional}>☎️ Busy signals</div>
            <div className={styles.comparisonNyansafo}>💬 24/7 chat support</div>
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
            Not sure which service you need?
          </h2>
          <p className={styles.ctaText}>
            Answer a few quick questions and we'll recommend the perfect coverage for you.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Take the 2-Minute Quiz
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.ctaSecondary}>
              Talk to an Advisor 💬
            </button>
          </div>
          <div className={styles.ctaTrustBadge}>
            <span>⚡ 24-hour claims • </span>
            <span>📱 100% digital • </span>
            <span>🇬🇭 Made in Ghana</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;