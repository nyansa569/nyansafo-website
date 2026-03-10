// app/claims/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const ClaimsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('file');
  const [selectedClaimType, setSelectedClaimType] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Claim types with details
  const claimTypes = [
    {
      id: 'auto',
      title: 'Vehicle Accident',
      icon: '🚗',
      description: 'Damage to your car from accident, theft, or vandalism',
      avgTime: '24 hours',
      documents: ['Driver\'s license', 'Police report', 'Photos of damage', 'Insurance certificate'],
      color: '#FFD93D'
    },
    {
      id: 'health',
      title: 'Medical Expenses',
      icon: '❤️',
      description: 'Hospital bills, medication, and treatment costs',
      avgTime: '12 hours',
      documents: ['Medical reports', 'Hospital receipts', 'Doctor\'s prescription', 'ID card'],
      color: '#4ECDC4'
    },
    {
      id: 'life',
      title: 'Life Insurance',
      icon: '🛡️',
      description: 'Death benefit claim for policy beneficiaries',
      avgTime: '48 hours',
      documents: ['Death certificate', 'Policy document', 'Beneficiary ID', 'Claim form'],
      color: '#6C5CE7'
    },
    {
      id: 'property',
      title: 'Home/Property Damage',
      icon: '🏠',
      description: 'Damage to your home from fire, flood, or theft',
      avgTime: '36 hours',
      documents: ['Property photos', 'Police report (theft)', 'Repair estimates', 'Ownership proof'],
      color: '#FF8E8E'
    },
    {
      id: 'travel',
      title: 'Travel Disruption',
      icon: '✈️',
      description: 'Cancelled flights, lost baggage, travel delays',
      avgTime: '24 hours',
      documents: ['Travel itinerary', 'Receipts', 'Airline confirmation', 'Policy number'],
      color: '#A8E6CF'
    },
    {
      id: 'business',
      title: 'Business Interruption',
      icon: '💼',
      description: 'Loss of income due to covered events',
      avgTime: '72 hours',
      documents: ['Financial records', 'Tax documents', 'Business license', 'Incident report'],
      color: '#FF6B6B'
    },
  ];

  // Sample claim status for demo
  const sampleClaimStatus = {
    id: 'CLM-2025-03-1234',
    type: 'Vehicle Accident',
    status: 'in-review',
    statusText: 'Under Review',
    submittedDate: 'March 10, 2025',
    lastUpdated: 'March 11, 2025, 10:30 AM',
    estimatedCompletion: 'March 12, 2025',
    amount: 'GHS 5,250',
    steps: [
      { name: 'Claim Submitted', completed: true, date: 'March 10, 2025, 9:15 AM' },
      { name: 'Documents Verified', completed: true, date: 'March 10, 2025, 2:30 PM' },
      { name: 'Assessment Scheduled', completed: true, date: 'March 11, 2025, 10:00 AM' },
      { name: 'Inspection Complete', completed: false, date: 'Pending' },
      { name: 'Final Approval', completed: false, date: 'Pending' },
      { name: 'Payment Processed', completed: false, date: 'Pending' },
    ],
    color: '#FFD93D'
  };

  // Quick stats
  const claimStats = [
    { value: '24h', label: 'Average Response', icon: '⚡', color: '#FF6B6B' },
    { value: '98%', label: 'Claims Paid', icon: '✅', color: '#4ECDC4' },
    { value: '15K+', label: 'Claims Processed', icon: '📊', color: '#FFD93D' },
    { value: '📍', label: 'Mobile Inspections', icon: '📍', color: '#6C5CE7' },
  ];

  // How it works steps
  const steps = [
    {
      number: '01',
      title: 'Submit Claim',
      description: 'Fill out our simple online form. Upload photos and documents directly from your phone.',
      icon: '📱',
      color: '#FF6B6B'
    },
    {
      number: '02',
      title: 'Instant Acknowledgment',
      description: 'Get a claim number immediately. No waiting, no guessing.',
      icon: '✅',
      color: '#4ECDC4'
    },
    {
      number: '03',
      title: 'Mobile Inspection',
      description: 'We come to you - home, office, or accident site. No towing needed.',
      icon: '📍',
      color: '#FFD93D'
    },
    {
      number: '04',
      title: 'Real-Time Tracking',
      description: 'Follow your claim\'s progress step by step. Know exactly where you stand.',
      icon: '🔍',
      color: '#6C5CE7'
    },
    {
      number: '05',
      title: 'Fast Payout',
      description: 'Money in your account within 24-48 hours of approval.',
      icon: '💰',
      color: '#FF8E8E'
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: 'Kwame Asante',
      location: 'Accra',
      claim: 'Vehicle Insurance',
      text: 'I had an accident on the motorway. Filed the claim from my phone, and an inspector was at the scene in 2 hours. Paid in 24 hours. Unbelievable!',
      rating: 5,
      image: '👨🏾'
    },
    {
      name: 'Abena Oforiwaa',
      location: 'Kumasi',
      claim: 'Health Insurance',
      text: 'My mother\'s hospital bill was paid directly to the hospital before we even checked out. No paperwork, no stress.',
      rating: 5,
      image: '👩🏾'
    },
    {
      name: 'Yaw Mensah',
      location: 'Takoradi',
      claim: 'Home Insurance',
      text: 'After a fire in my shop, I thought insurance would take months. Nyansafo paid in 3 days. I\'m back in business.',
      rating: 5,
      image: '👨🏾‍🦱'
    },
  ];

  const handleTrackClaim = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // In a real app, you'd fetch claim data here
  };

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
    <main className={styles.claimsPage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span>⚡ CLAIMS MADE SIMPLE</span>
          </span>
          
          <h1 className={styles.heroTitle}>
            File a Claim in 
            <span className={styles.titleHighlight}> Minutes, Not Days</span>
          </h1>
          
          <p className={styles.heroDesc}>
            From accident to payout, track every step. No paperwork, no waiting, 
            no calling to check status. Just transparent claims processing.
          </p>

          {/* Quick Stats */}
          <div className={styles.heroStats}>
            {claimStats.map((stat, index) => (
              <div key={index} className={styles.statPill}>
                <span className={styles.statIcon} style={{ color: stat.color }}>{stat.icon}</span>
                <div>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating claim icons */}
        <div className={styles.floatingIcons}>
          <div className={styles.floatingIcon} style={{ top: '20%', left: '5%', animationDelay: '0s' }}>🚗</div>
          <div className={styles.floatingIcon} style={{ top: '70%', left: '8%', animationDelay: '-2s' }}>❤️</div>
          <div className={styles.floatingIcon} style={{ top: '30%', right: '10%', animationDelay: '-4s' }}>🏠</div>
          <div className={styles.floatingIcon} style={{ bottom: '25%', right: '5%', animationDelay: '-1s' }}>✈️</div>
          <div className={styles.floatingIcon} style={{ bottom: '40%', left: '15%', animationDelay: '-3s' }}>💰</div>
        </div>
      </section>

      {/* ============= CLAIM TABS ============= */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <div className={styles.tabsHeader}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'file' ? styles.active : ''}`}
              onClick={() => setActiveTab('file')}
            >
              <span className={styles.tabIcon}>📝</span>
              File a New Claim
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'track' ? styles.active : ''}`}
              onClick={() => setActiveTab('track')}
            >
              <span className={styles.tabIcon}>🔍</span>
              Track Existing Claim
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'info' ? styles.active : ''}`}
              onClick={() => setActiveTab('info')}
            >
              <span className={styles.tabIcon}>ℹ️</span>
              Claims Information
            </button>
          </div>

          <div className={styles.tabContent}>
            {/* FILE CLAIM TAB */}
            {activeTab === 'file' && (
              <div className={styles.fileClaim}>
                <h2 className={styles.tabContentTitle}>Select Claim Type</h2>
                <p className={styles.tabContentSubtitle}>
                  Choose the type of claim you'd like to file. We'll guide you through the process.
                </p>

                <div className={styles.claimTypesGrid}>
                  {claimTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`${styles.claimTypeCard} ${selectedClaimType === type.id ? styles.selected : ''}`}
                      onClick={() => setSelectedClaimType(type.id)}
                      style={{ borderColor: type.color }}
                    >
                      <div className={styles.claimTypeIcon} style={{ background: type.color + '20' }}>
                        <span style={{ color: type.color }}>{type.icon}</span>
                      </div>
                      <h3>{type.title}</h3>
                      <p>{type.description}</p>
                      <div className={styles.claimTypeMeta}>
                        <span className={styles.claimTypeTime}>
                          <span className={styles.metaIcon}>⏱️</span>
                          {type.avgTime}
                        </span>
                      </div>
                      
                      {selectedClaimType === type.id && (
                        <div className={styles.claimTypeDocs}>
                          <span className={styles.docsTitle}>Required Documents:</span>
                          <ul>
                            {type.documents.map((doc, i) => (
                              <li key={i}>{doc}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {selectedClaimType && (
                  <div className={styles.startClaimSection}>
                    <button className={styles.startClaimBtn}>
                      Start Your Claim
                      <span className={styles.btnArrow}>→</span>
                    </button>
                    <p className={styles.startClaimNote}>
                      By starting a claim, you agree to our claims process. You can save and continue later.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TRACK CLAIM TAB */}
            {activeTab === 'track' && (
              <div className={styles.trackClaim}>
                <h2 className={styles.tabContentTitle}>Track Your Claim</h2>
                <p className={styles.tabContentSubtitle}>
                  Enter your claim number to see real-time updates.
                </p>

                <form onSubmit={handleTrackClaim} className={styles.trackForm}>
                  <div className={styles.trackInputGroup}>
                    <input
                      type="text"
                      placeholder="Enter claim number (e.g., CLM-2025-03-1234)"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className={styles.trackInput}
                    />
                    <button type="submit" className={styles.trackBtn}>
                      Track Claim
                    </button>
                  </div>
                </form>

                {isTracking && (
                  <div className={styles.claimStatusCard}>
                    <div className={styles.claimStatusHeader}>
                      <div>
                        <span className={styles.claimId}>Claim #{sampleClaimStatus.id}</span>
                        <span className={styles.claimType}>{sampleClaimStatus.type}</span>
                      </div>
                      <div className={styles.claimStatusBadge} style={{ background: sampleClaimStatus.color + '20', color: sampleClaimStatus.color }}>
                        {sampleClaimStatus.statusText}
                      </div>
                    </div>

                    <div className={styles.claimStatusGrid}>
                      <div className={styles.claimStatusItem}>
                        <span className={styles.statusItemLabel}>Submitted</span>
                        <span className={styles.statusItemValue}>{sampleClaimStatus.submittedDate}</span>
                      </div>
                      <div className={styles.claimStatusItem}>
                        <span className={styles.statusItemLabel}>Last Updated</span>
                        <span className={styles.statusItemValue}>{sampleClaimStatus.lastUpdated}</span>
                      </div>
                      <div className={styles.claimStatusItem}>
                        <span className={styles.statusItemLabel}>Est. Completion</span>
                        <span className={styles.statusItemValue}>{sampleClaimStatus.estimatedCompletion}</span>
                      </div>
                      <div className={styles.claimStatusItem}>
                        <span className={styles.statusItemLabel}>Claim Amount</span>
                        <span className={styles.statusItemValue}>{sampleClaimStatus.amount}</span>
                      </div>
                    </div>

                    <div className={styles.claimTimeline}>
                      <h4>Claim Progress</h4>
                      <div className={styles.timelineSteps}>
                        {sampleClaimStatus.steps.map((step, index) => (
                          <div key={index} className={`${styles.timelineStep} ${step.completed ? styles.completed : ''}`}>
                            <div className={styles.timelineDot} style={{ background: step.completed ? sampleClaimStatus.color : '#E2E8F0' }} />
                            <div className={styles.timelineContent}>
                              <span className={styles.timelineStepName}>{step.name}</span>
                              <span className={styles.timelineStepDate}>{step.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.claimActions}>
                      <button className={styles.claimActionBtn}>
                        <span>📎</span> Upload Additional Documents
                      </button>
                      <button className={styles.claimActionBtn}>
                        <span>💬</span> Contact Claims Adjuster
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CLAIMS INFO TAB */}
            {activeTab === 'info' && (
              <div className={styles.claimsInfo}>
                <h2 className={styles.tabContentTitle}>Claims Information</h2>
                <p className={styles.tabContentSubtitle}>
                  Everything you need to know about filing claims with Nyansafo.
                </p>

                <div className={styles.infoGrid}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>⏱️</div>
                    <h3>Response Time</h3>
                    <p>We acknowledge claims within 1 hour and assign an adjuster within 24 hours.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📍</div>
                    <h3>Mobile Inspections</h3>
                    <p>We come to you - home, work, or accident site. No need to visit an office.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>📱</div>
                    <h3>Digital Documents</h3>
                    <p>Upload photos and documents directly from your phone. No printing needed.</p>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}>💰</div>
                    <h3>Fast Payouts</h3>
                    <p>Approved claims are paid within 24-48 hours directly to your bank or mobile money.</p>
                  </div>
                </div>

                <div className={styles.infoFaq}>
                  <h3>Frequently Asked Questions</h3>
                  <div className={styles.faqItems}>
                    <div className={styles.faqItem}>
                      <h4>How do I file a claim?</h4>
                      <p>Simply select "File a Claim" above, choose your claim type, and follow the prompts. You can upload photos and documents directly from your phone.</p>
                    </div>
                    <div className={styles.faqItem}>
                      <h4>How long does a claim take?</h4>
                      <p>Most claims are processed within 24-48 hours. Complex claims may take up to 72 hours. You can track your claim's progress in real-time.</p>
                    </div>
                    <div className={styles.faqItem}>
                      <h4>Do I need a police report?</h4>
                      <p>For vehicle accidents and theft claims, a police report is required. For other claims, please check the specific requirements for your claim type.</p>
                    </div>
                    <div className={styles.faqItem}>
                      <h4>How do I get my payout?</h4>
                      <p>Payouts are made via bank transfer or mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money) - whichever you prefer.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============= HOW IT WORKS ============= */}
      <section 
        className={styles.howItWorks}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>📋 THE PROCESS</span>
            <h2 className={styles.sectionTitle}>
              From Incident to 
              <span className={styles.titleAccent}> Payout in 5 Simple Steps</span>
            </h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.stepNumber} style={{ color: step.color }}>{step.number}</div>
                <div className={styles.stepIcon} style={{ background: step.color + '20' }}>
                  <span style={{ color: step.color }}>{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className={styles.stepLine} style={{ background: step.color }}></div>
              </div>
            ))}
          </div>

          {/* Mobile inspection highlight */}
          <div className={styles.inspectionHighlight}>
            <div className={styles.inspectionContent}>
              <span className={styles.inspectionBadge}>📍 MOBILE INSPECTION</span>
              <h3>We Come to You</h3>
              <p>Our inspectors will meet you at your home, office, or even at the accident site. No towing fees, no travel, no hassle.</p>
              <div className={styles.inspectionFeatures}>
                <div className={styles.inspectionFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  Free within Accra, Kumasi, Takoradi
                </div>
                <div className={styles.inspectionFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  Schedule within 24 hours
                </div>
                <div className={styles.inspectionFeature}>
                  <span className={styles.featureCheck}>✓</span>
                  Digital report shared instantly
                </div>
              </div>
            </div>
            <div className={styles.inspectionVisual}>
              <div className={styles.inspectionShape}>
                <span>📍</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TESTIMONIALS ============= */}
      <section 
        className={styles.testimonialsSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>🗣️ REAL STORIES</span>
            <h2 className={styles.sectionTitle}>
              What Our Clients 
              <span className={styles.titleAccent}> Are Saying</span>
            </h2>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <span className={styles.testimonialAvatar}>{testimonial.image}</span>
                  <div>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location} • {testimonial.claim}</p>
                  </div>
                </div>
                <p className={styles.testimonialText}>"{testimonial.text}"</p>
                <div className={styles.testimonialRating}>
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============= CLAIM ASSISTANCE ============= */}
      <section 
        className={styles.assistanceSection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.assistanceCard}>
            <div className={styles.assistanceContent}>
              <h2>Need Help With Your Claim?</h2>
              <p>Our claims specialists are available 24/7 to guide you through the process.</p>
              <div className={styles.assistanceButtons}>
                <button className={styles.assistanceBtnPrimary}>
                  <span>💬</span> Live Chat Now
                </button>
                <button className={styles.assistanceBtnSecondary}>
                  <span>📞</span> Call Claims Support
                </button>
              </div>
              <div className={styles.assistanceContact}>
                <span>📧 claims@nyansafo.com</span>
                <span>📱 WhatsApp: +233 30 123 4567</span>
              </div>
            </div>
            <div className={styles.assistanceVisual}>
              <div className={styles.assistanceShape}>
                <span>🛡️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= CTA SECTION ============= */}
      <section 
        className={styles.ctaSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Ready to File Your Claim?
          </h2>
          <p className={styles.ctaText}>
            It takes less than 5 minutes. We'll guide you every step of the way.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              File a Claim Now
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.ctaSecondary}>
              Track Existing Claim
            </button>
          </div>
          <div className={styles.ctaTrustBadge}>
            <span>⚡ 24-hour response • </span>
            <span>📍 Mobile inspection • </span>
            <span>💰 Fast payout</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ClaimsPage;