// app/about/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const AboutPage: React.FC = () => {
  const [activeFact, setActiveFact] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Company facts that rotate
  const rotatingFacts = [
    { emoji: '🇬🇭', text: '100% Ghanaian-owned insurtech' },
    { emoji: '⚡', text: 'Claims processed in under 24 hours' },
    { emoji: '📱', text: 'First fully digital insurance in Ghana' },
    { emoji: '🔍', text: 'Real-time claim tracking' },
    { emoji: '🤝', text: 'Built by Ghanaians, for Ghanaians' },
  ];

  // Stats that pop
  const stats = [
    { value: '15K+', label: 'Happy Clients', icon: '😊', color: '#FF6B6B' },
    { value: '₵2.5M', label: 'Claims Paid', icon: '💰', color: '#4ECDC4' },
    { value: '24h', label: 'Claims Processing', icon: '⚡', color: '#FFD93D' },
    { value: '100%', label: 'Digital Experience', icon: '📱', color: '#6C5CE7' },
  ];

  // Milestones - showing the journey from 2020 to now
  const milestones = [
    { year: '2020', title: 'The Idea Was Born', desc: 'A team of innovators saw the need for transparent insurance in Ghana', icon: '💡' },
    { year: '2021', title: 'Market Research', desc: 'Talked to 500+ Ghanaians about their insurance frustrations', icon: '🔍' },
    { year: '2022', title: 'Building the Tech', desc: 'Developed Ghana\'s first fully digital insurance platform', icon: '👨🏾‍💻' },
    { year: '2023', title: 'Pilot Program', desc: '500 beta users tested our platform, loved the transparency', icon: '🚀' },
    { year: '2024', title: 'Soft Launch', desc: 'Opened to the public with rave reviews', icon: '🎉' },
    { year: '2025', title: 'Official Registration', desc: 'Nyansafo InsureFintech officially born!', icon: '📜' },
  ];

  // Core values - bright and energetic
  const values = [
    {
      icon: '🔍',
      title: 'Radical Transparency',
      desc: 'No fine print, no hidden clauses. You see exactly what you\'re getting.',
      color: '#FF6B6B'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      desc: 'Claims don\'t wait. Neither should you. 24-hour processing guaranteed.',
      color: '#4ECDC4'
    },
    {
      icon: '📱',
      title: 'Digital First',
      desc: 'Your phone is your insurance agent. Everything, anywhere, anytime.',
      color: '#FFD93D'
    },
    {
      icon: '🤝',
      title: 'Built for Ghana',
      desc: 'By Ghanaians, for Ghanaians. We understand your needs.',
      color: '#6C5CE7'
    },
  ];

  useEffect(() => {
    // Rotate facts every 4 seconds
    const interval = setInterval(() => {
      setActiveFact(prev => (prev + 1) % rotatingFacts.length);
    }, 4000);

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px' }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [rotatingFacts.length]);

  return (
    <main className={styles.aboutPage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          {/* Animated badge */}
          <div className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span className={styles.badgeText}>🇬🇭 GHANA'S NEWEST INSURTECH</span>
          </div>

          {/* Main headline */}
          <h1 className={styles.heroTitle}>
            Insurance That Actually 
            <span className={styles.titleHighlight}> Works For You</span>
          </h1>

          {/* Rotating fact */}
          <div className={styles.rotatingFact}>
            <span className={styles.factEmoji}>{rotatingFacts[activeFact].emoji}</span>
            <span className={styles.factText}>{rotatingFacts[activeFact].text}</span>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroCtas}>
            <button className={styles.primaryCta}>
              See How We're Different
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.secondaryCta}>
              Watch Our Story 📺
            </button>
          </div>
        </div>

        {/* The MORPHING SHAPE with image - THIS IS THE STAR! */}
        <div className={styles.morphingShapeContainer}>
          <div className={styles.morphingShape}>
            <div className={styles.shapeBackground}></div>
            <div className={styles.shapeImageWrapper}>
              <img 
                src="https://media.istockphoto.com/id/1366582232/photo/shot-of-a-mature-businessman-using-his-smartphone-to-send-a-text-message-while-drinking-coffee.jpg?s=612x612&w=0&k=20&c=o9XK4P6iW1drP9DBdGRXO-Pf9JhhH-R8nTco9WbTtlg=" 
                alt="Ghanaian team celebrating"
                className={styles.shapeImage}
              />
            </div>
          </div>
          <div className={styles.shapeAccent1}></div>
          <div className={styles.shapeAccent2}></div>
          <div className={styles.shapeAccent3}></div>
        </div>
      </section>

      {/* ============= STATS SECTION ============= */}
      <section 
        className={styles.statsSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.statIcon} style={{ background: stat.color + '20' }}>
                <span>{stat.icon}</span>
              </div>
              <div className={styles.statContent}>
                <span className={styles.statValue} style={{ color: stat.color }}>
                  {stat.value}
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= OUR STORY SECTION ============= */}
      <section 
        className={styles.storySection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.storyContainer}>
          {/* Left side - Text */}
          <div className={styles.storyContent}>
            <span className={styles.sectionBadge}>📖 OUR JOURNEY</span>
            <h2 className={styles.sectionTitle}>
              From An Idea In 2020 
              <span className={styles.titleAccent}> To Ghana's Most Transparent Insurtech</span>
            </h2>
            <p className={styles.storyText}>
              We saw a problem: Insurance in Ghana was complicated, slow, and opaque. 
              People paid for coverage but couldn't track claims, understand terms, or get 
              timely payouts. So we built something different.
            </p>
            <p className={styles.storyText}>
              After 4 years of development, research, and testing with real Ghanaians, 
              Nyansafo InsureFintech officially registered in 2025 — but we've been 
              operating and perfecting our technology since 2020.
            </p>
            
            {/* Quick highlights */}
            <div className={styles.storyHighlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✅</span>
                <span>4+ years in development</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✅</span>
                <span>500+ beta testers</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightIcon}>✅</span>
                <span>100% digital platform</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual timeline preview */}
          <div className={styles.storyVisual}>
            <div className={styles.timelinePreview}>
              {milestones.slice(0, 3).map((m, i) => (
                <div key={i} className={styles.previewItem}>
                  <div className={styles.previewYear}>{m.year}</div>
                  <div className={styles.previewTitle}>{m.title}</div>
                </div>
              ))}
              <div className={styles.previewDots}>...</div>
              <div className={styles.previewCta}>
                <span>See full timeline →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TIMELINE SECTION ============= */}
      <section 
        className={styles.timelineSection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <h2 className={styles.sectionTitleCenter}>
          The Road to 
          <span className={styles.titleAccent}> Transparency</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          From idea to impact — our journey building Ghana's most transparent insurance platform
        </p>

        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className={styles.timelineItem}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.timelineCard}>
                <div className={styles.timelineIcon}>{item.icon}</div>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= VALUES SECTION ============= */}
      <section 
        className={styles.valuesSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.valuesHeader}>
          <span className={styles.sectionBadge}>💪 WHAT WE STAND FOR</span>
          <h2 className={styles.sectionTitleCenter}>
            Built On 
            <span className={styles.titleAccent}> Four Pillars</span>
          </h2>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div 
              key={index} 
              className={styles.valueCard}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                borderTopColor: value.color 
              }}
            >
              <div className={styles.valueIcon} style={{ background: value.color + '20' }}>
                <span>{value.icon}</span>
              </div>
              <h3 style={{ color: value.color }}>{value.title}</h3>
              <p>{value.desc}</p>
              <div className={styles.valueGlow} style={{ background: value.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= TRANSPARENCY SHOWCASE ============= */}
      <section 
        className={styles.transparencySection}
        ref={el => { sectionRefs.current[5] = el; }}
      >
        <div className={styles.transparencyContainer}>
          <div className={styles.transparencyContent}>
            <span className={styles.sectionBadge}>🔍 SEE FOR YOURSELF</span>
            <h2 className={styles.sectionTitle}>
              Track Every Claim,
              <span className={styles.titleAccent}> Every Step</span>
            </h2>
            <p className={styles.transparencyText}>
              With Nyansafo, you're never in the dark. From submission to payout, 
              track your claim in real-time through our app. No calls, no waiting, 
              no wondering.
            </p>
            
            <div className={styles.featureList}>
              <div className={styles.feature}>
                <span className={styles.featureCheck}>✓</span>
                <span>Real-time claim status updates</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureCheck}>✓</span>
                <span>Upload documents directly from phone</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureCheck}>✓</span>
                <span>Get notified at every stage</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureCheck}>✓</span>
                <span>24-hour payout guarantee</span>
              </div>
            </div>

            <button className={styles.transparencyCta}>
              See How It Works
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>

          {/* Another morphing shape for the right side */}
          <div className={styles.transparencyShape}>
            <div className={styles.smallMorphingShape}>
              <div className={styles.smallShapeImage}>
                <img 
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Mobile app showing claim tracking"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section 
        className={styles.ctaSection}
        ref={el => { sectionRefs.current[6] = el; }}
      >
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Ready for Insurance That Actually Works?
          </h2>
          <p className={styles.ctaText}>
            Join thousands of Ghanaians who've discovered transparent, 
            reliable, and trackable insurance.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Get Covered Today
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.ctaSecondary}>
              Talk to Us 💬
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

export default AboutPage;