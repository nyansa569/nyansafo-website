// app/partners/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const PartnersPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Partner categories
  const categories = [
    { id: 'all', label: 'All Partners', color: '#FF6B6B' },
    { id: 'life', label: 'Life Insurance', color: '#4ECDC4' },
    { id: 'nonlife', label: 'General Insurance', color: '#FFD93D' },
    { id: 'bank', label: 'Banking Partners', color: '#6C5CE7' },
  ];

  // ============= TOP INSURANCE COMPANIES IN GHANA (2024 DATA) =============
  // Based on National Insurance Commission data and market performance [citation:4]
  
  // Life Insurance Partners - Top performers by assets and claims [citation:4]
  const lifePartners = [
    {
      id: 1,
      name: 'StarLife Assurance',
      category: 'life',
      logo: '🌟',
      description: 'Ghana\'s leading life insurer with GHS 2.79B in assets',
      stats: [
        { label: 'Assets', value: 'GHS 2.79B' },
        { label: 'Claims Paid', value: 'GHS 379M' },
        { label: 'Market Rank', value: '#1' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2010',
      partnership: 'Life Insurance Partner',
      website: '#'
    },
    {
      id: 2,
      name: 'Enterprise Life',
      category: 'life',
      logo: '🏢',
      description: 'GHS 2.14B in assets, GHS 196M profit in 2024',
      stats: [
        { label: 'Assets', value: 'GHS 2.14B' },
        { label: 'Profit', value: 'GHS 196M' },
        { label: 'Market Rank', value: '#2' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2005',
      partnership: 'Strategic Life Partner',
      website: '#'
    },
    {
      id: 3,
      name: 'SIC Life',
      category: 'life',
      logo: '🛡️',
      description: 'GHS 1.42B in assets, GHS 226M in policyholder benefits',
      stats: [
        { label: 'Assets', value: 'GHS 1.42B' },
        { label: 'Claims', value: 'GHS 226M' },
        { label: 'Market Rank', value: '#3' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2000',
      partnership: 'Life Insurance Partner',
      website: '#'
    },
    {
      id: 4,
      name: 'Prudential Life',
      category: 'life',
      logo: '📊',
      description: 'GHS 986M in assets, GHS 139M profit in 2024',
      stats: [
        { label: 'Assets', value: 'GHS 986M' },
        { label: 'Profit', value: 'GHS 139M' },
        { label: 'Market Rank', value: '#4' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2012',
      partnership: 'Life Insurance Partner',
      website: '#'
    },
    {
      id: 5,
      name: 'Glico Life',
      category: 'life',
      logo: '💰',
      description: 'GHS 653M in assets, Top 5 life insurer',
      stats: [
        { label: 'Assets', value: 'GHS 653M' },
        { label: 'Market Share', value: '5.2%' },
        { label: 'Rank', value: '#5' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2008',
      partnership: 'Life Insurance Partner',
      website: '#'
    },
    {
      id: 6,
      name: 'Metropolitan Life',
      category: 'life',
      logo: '🏛️',
      description: 'Recently acquired by emPLE Group, strong pension portfolio',
      stats: [
        { label: 'Assets', value: 'GHS 356M' },
        { label: 'Pensions', value: 'Market Leader' },
        { label: 'Rank', value: '#8' }
      ],
      color: '#4ECDC4',
      gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
      since: '2003',
      partnership: 'Life & Pensions Partner',
      website: '#'
    }
  ];

  // Non-Life (General) Insurance Partners - Top performers [citation:4]
  const nonLifePartners = [
    {
      id: 7,
      name: 'Enterprise Insurance',
      category: 'nonlife',
      logo: '🏢',
      description: 'Ghana\'s oldest insurer, GHS 721M in assets',
      stats: [
        { label: 'Assets', value: 'GHS 721M' },
        { label: 'Claims', value: 'GHS 201M' },
        { label: 'Profit', value: 'GHS 17M' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '1924',
      partnership: 'General Insurance Partner',
      website: '#'
    },
    {
      id: 8,
      name: 'SIC Insurance',
      category: 'nonlife',
      logo: '🛡️',
      description: 'GHS 915M in assets, GHS 56M profit in 2024',
      stats: [
        { label: 'Assets', value: 'GHS 915M' },
        { label: 'Profit', value: 'GHS 56M' },
        { label: 'Claims', value: 'Major Payer' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '1962',
      partnership: 'Strategic General Partner',
      website: '#'
    },
    {
      id: 9,
      name: 'Hollard Insurance',
      category: 'nonlife',
      logo: '🦁',
      description: 'GHS 427M in assets, GHS 53M profit, GHS 172M claims',
      stats: [
        { label: 'Assets', value: 'GHS 427M' },
        { label: 'Claims', value: 'GHS 172M' },
        { label: 'Profit', value: 'GHS 53M' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '2008',
      partnership: 'General Insurance Partner',
      website: '#'
    },
    {
      id: 10,
      name: 'Star Assurance',
      category: 'nonlife',
      logo: '⭐',
      description: 'GHS 1.06B in assets, GHS 217M claims paid',
      stats: [
        { label: 'Assets', value: 'GHS 1.06B' },
        { label: 'Claims', value: 'GHS 217M' },
        { label: 'Rank', value: 'Top 5' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '1987',
      partnership: 'General Insurance Partner',
      website: '#'
    },
    {
      id: 11,
      name: 'Activa International',
      category: 'nonlife',
      logo: '🔵',
      description: 'GHS 303M in assets, TOP claims payer: GHS 227M',
      stats: [
        { label: 'Assets', value: 'GHS 303M' },
        { label: 'Claims', value: 'GHS 227M' },
        { label: '#1 Claims', value: 'Non-Life' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '2004',
      partnership: 'Health Insurance Partner',
      website: '#'
    },
    {
      id: 12,
      name: 'Vanguard Assurance',
      category: 'nonlife',
      logo: '⚔️',
      description: 'GHS 420M in assets, GHS 157M claims paid',
      stats: [
        { label: 'Assets', value: 'GHS 420M' },
        { label: 'Claims', value: 'GHS 157M' },
        { label: 'Rank', value: 'Top 10' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '1974',
      partnership: 'General Insurance Partner',
      website: '#'
    },
    {
      id: 13,
      name: 'Ghana Union Assurance',
      category: 'nonlife',
      logo: '🤝',
      description: 'GHS 651M in assets, strong market presence',
      stats: [
        { label: 'Assets', value: 'GHS 651M' },
        { label: 'Rank', value: '#4' },
        { label: 'Market', value: 'Top Performer' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '1973',
      partnership: 'General Insurance Partner',
      website: '#'
    },
    {
      id: 14,
      name: 'Serene Insurance',
      category: 'nonlife',
      logo: '☀️',
      description: 'Fastest growing insurance company in Ghana (2022)',
      stats: [
        { label: 'Branches', value: '11+' },
        { label: 'Agents', value: '200+' },
        { label: 'Target', value: 'Top 3 by 2026' }
      ],
      color: '#FFD93D',
      gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
      since: '2018',
      partnership: 'Emerging Partner',
      website: '#'
    }
  ];

  // Banking Partner - Fidelity Bank Ghana [citation:2][citation:5][citation:6]
  const bankPartners = [
    {
      id: 15,
      name: 'Fidelity Bank Ghana',
      category: 'bank',
      logo: '🏦',
      description: 'Ghana\'s largest privately-owned indigenous bank',
      stats: [
        { label: 'Sustainability', value: 'GHS 390M+' },
        { label: 'Founded', value: '2006' },
        { label: 'Clients', value: '2M+' }
      ],
      color: '#6C5CE7',
      gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
      since: '2006',
      partnership: 'Strategic Banking Partner',
      highlights: [
        'GHS 1M GreenTech Innovation Challenge [citation:2]',
        'BoseaLoan with MTN MoMo [citation:6]',
        'Global Center on Adaptation Partner [citation:5]',
        'GIFE Platform with Proxtera [citation:10]'
      ],
      website: '#'
    }
  ];

  // Combine all partners
  const allPartners = [...lifePartners, ...nonLifePartners, ...bankPartners];

  // Filter partners based on active category
  const filteredPartners = activeFilter === 'all' 
    ? allPartners 
    : allPartners.filter(partner => partner.category === activeFilter);

  // Market concentration stats [citation:4]
  const marketStats = [
    {
      title: 'Life Insurance',
      stat: '77%',
      description: 'Top 5 life insurers control 77% of sector assets',
      color: '#4ECDC4'
    },
    {
      title: 'Non-Life Insurance',
      stat: '50%',
      description: 'Top 5 general insurers control 50% of sector assets',
      color: '#FFD93D'
    },
    {
      title: 'Total Industry Assets',
      stat: '₵7.34B',
      description: 'Insurance industry revenue in 2024, up 31%',
      color: '#6C5CE7'
    },
    {
      title: 'Claims Paid',
      stat: '₵2.5B+',
      description: 'Total claims and benefits paid in 2024',
      color: '#FF6B6B'
    }
  ];

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
    <main className={styles.partnersPage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span>🇬🇭 TRUSTED BY THE BEST</span>
          </span>
          
          <h1 className={styles.heroTitle}>
            Our 
            <span className={styles.titleHighlight}> Partners</span>
          </h1>
          
          <p className={styles.heroDesc}>
            We've partnered with Ghana's leading insurance companies and financial institutions 
            to bring you the best coverage, fastest claims, and most reliable service.
          </p>

          {/* Partner Stats */}
          <div className={styles.partnerStats}>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>15+</span>
              <span className={styles.statPillLabel}>Insurance Partners</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>₵7.3B+</span>
              <span className={styles.statPillLabel}>Combined Assets</span>
            </div>
            <div className={styles.statPill}>
              <span className={styles.statPillNumber}>₵2.5B+</span>
              <span className={styles.statPillLabel}>Annual Claims Paid</span>
            </div>
          </div>
        </div>

        {/* Floating partner logos */}
        <div className={styles.floatingLogos}>
          <div className={styles.floatingLogo} style={{ top: '15%', left: '5%', animationDelay: '0s' }}>🌟</div>
          <div className={styles.floatingLogo} style={{ top: '70%', left: '8%', animationDelay: '-2s' }}>🏢</div>
          <div className={styles.floatingLogo} style={{ top: '25%', right: '10%', animationDelay: '-4s' }}>🛡️</div>
          <div className={styles.floatingLogo} style={{ bottom: '30%', right: '5%', animationDelay: '-1s' }}>🏦</div>
          <div className={styles.floatingLogo} style={{ top: '50%', left: '15%', animationDelay: '-3s' }}>⭐</div>
        </div>
      </section>

      {/* ============= MARKET LEADERS SECTION ============= */}
      <section 
        className={styles.marketSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>📊 MARKET LEADERS</span>
          <h2 className={styles.sectionTitle}>
            Ghana's Top 
            <span className={styles.titleAccent}> Insurance Companies</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Based on National Insurance Commission 2024 performance data [citation:4]
          </p>
        </div>

        <div className={styles.marketGrid}>
          {marketStats.map((stat, index) => (
            <div 
              key={index}
              className={styles.marketCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.marketIcon} style={{ background: stat.color + '20' }}>
                <span style={{ color: stat.color }}>{stat.stat}</span>
              </div>
              <h3>{stat.title}</h3>
              <p>{stat.description}</p>
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
              className={`${styles.categoryBtn} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.id)}
              style={{ 
                '--category-color': category.color,
                backgroundColor: activeFilter === category.id ? category.color : 'transparent'
              } as React.CSSProperties}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* ============= PARTNERS GRID ============= */}
      <section 
        className={styles.partnersGridSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.partnersGrid}>
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.id}
              className={`${styles.partnerCard} ${partner.category === 'bank' ? styles.featuredCard : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: partner.gradient
              }}
            >
              {/* Card inner with glass effect */}
              <div className={styles.cardInner}>
                {/* Partner Logo */}
                <div className={styles.partnerLogo}>
                  <span className={styles.logoEmoji}>{partner.logo}</span>
                  {partner.category === 'bank' && (
                    <span className={styles.featuredBadge}>Strategic Partner</span>
                  )}
                </div>

                {/* Partner Info */}
                <div className={styles.partnerInfo}>
                  <h3 className={styles.partnerName}>{partner.name}</h3>
                  <p className={styles.partnerDesc}>{partner.description}</p>
                  
                  {/* Stats Grid */}
                  <div className={styles.partnerStatsGrid}>
                    {partner.stats.map((stat, i) => (
                      <div key={i} className={styles.partnerStat}>
                        <span className={styles.statValue}>{stat.value}</span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Partnership Meta */}
                  <div className={styles.partnerMeta}>
                    <span className={styles.partnerSince}>Since {partner.since}</span>
                    <span className={styles.partnerType}>{partner.partnership}</span>
                  </div>

                  {/* Bank Highlights - Special for Fidelity */}
                  {/* {partner.highlights && (
                    <div className={styles.partnerHighlights}>
                      {partner.highlights.map((highlight, i) => (
                        <div key={i} className={styles.highlight}>
                          <span className={styles.highlightDot} style={{ background: partner.color }}></span>
                          <span className={styles.highlightText}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )} */}

                  {/* Action Button */}
                  <a href={partner.website} className={styles.partnerLink} style={{ color: partner.color }}>
                    View Partnership
                    <span className={styles.linkArrow}>→</span>
                  </a>
                </div>
              </div>

              {/* Glow effect */}
              <div className={styles.cardGlow} style={{ background: partner.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= FIDELITY BANK SPOTLIGHT ============= */}
      <section 
        className={styles.spotlightSection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.spotlightContainer}>
          <div className={styles.spotlightContent}>
            <span className={styles.spotlightBadge}>🏦 STRATEGIC BANKING PARTNER</span>
            <h2 className={styles.spotlightTitle}>
              Fidelity Bank Ghana
            </h2>
            <p className={styles.spotlightDesc}>
              Ghana's largest privately-owned indigenous bank, committed to innovation, 
              sustainability, and financial inclusion [citation:5][citation:6].
            </p>

            <div className={styles.spotlightGrid}>
              <div className={styles.spotlightItem}>
                <span className={styles.spotlightIcon}>🌱</span>
                <div>
                  <h4>GreenTech Innovation</h4>
                  <p>GHS 1M invested in climate-smart enterprises [citation:2]</p>
                </div>
              </div>
              <div className={styles.spotlightItem}>
                <span className={styles.spotlightIcon}>📱</span>
                <div>
                  <h4>BoseaLoan</h4>
                  <p>Mobile loans with MTN MoMo for financial inclusion [citation:6]</p>
                </div>
              </div>
              <div className={styles.spotlightItem}>
                <span className={styles.spotlightIcon}>🌍</span>
                <div>
                  <h4>Global Adaptation</h4>
                  <p>Partner with Global Center on Adaptation [citation:5]</p>
                </div>
              </div>
              <div className={styles.spotlightItem}>
                <span className={styles.spotlightIcon}>💼</span>
                <div>
                  <h4>SME Empowerment</h4>
                  <p>GIFE Platform supporting Ghanaian businesses [citation:10]</p>
                </div>
              </div>
            </div>
          </div>

          {/* Morphing shape with Fidelity logo */}
          <div className={styles.spotlightVisual}>
            <div className={styles.spotlightShape}>
              <div className={styles.shapeContent}>
                <span className={styles.shapeLogo}>🏦</span>
                <span className={styles.shapeText}>FIDELITY</span>
                <span className={styles.shapeSubtext}>Bank Ghana</span>
              </div>
            </div>
            <div className={styles.shapeAccent1}></div>
            <div className={styles.shapeAccent2}></div>
          </div>
        </div>
      </section>

      {/* ============= TRUST INDICATORS ============= */}
      <section 
        className={styles.trustSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.trustContainer}>
          <h2 className={styles.trustTitle}>
            Backed by the Best,
            <span className={styles.titleAccent}> Built for You</span>
          </h2>

          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>🏛️</div>
              <h3>NIC Regulated</h3>
              <p>All partners are licensed by Ghana's National Insurance Commission</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>💰</div>
              <h3>GHS 7.3B+ Assets</h3>
              <p>Combined financial strength of our insurance partners [citation:4]</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>⚡</div>
              <h3>GHS 2.5B Claims</h3>
              <p>Annual claims paid to policyholders in 2024 [citation:4]</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>📱</div>
              <h3>Digital Integration</h3>
              <p>Seamless digital access through our platform</p>
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
            Want to partner with us?
          </h2>
          <p className={styles.ctaText}>
            Join Ghana's leading insurance companies and financial institutions 
            in delivering transparent, reliable coverage to millions.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Become a Partner
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.ctaSecondary}>
              Contact Partnerships Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PartnersPage;