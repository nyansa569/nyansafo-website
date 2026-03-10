// app/contact/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './page.module.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Contact methods
  const contactMethods = [
    {
      icon: '📞',
      title: 'Phone Support',
      details: '+233 (0) 30 123 4567',
      subDetails: 'Mon-Fri, 8am - 6pm',
      action: 'Call Now',
      color: '#FF6B6B',
      link: 'tel:+233301234567'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'hello@nyansafo.com',
      subDetails: 'support@nyansafo.com',
      action: 'Send Email',
      color: '#4ECDC4',
      link: 'mailto:hello@nyansafo.com'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Instant messaging',
      subDetails: 'Average response: 2 mins',
      action: 'Start Chat',
      color: '#FFD93D',
      link: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '18 Agostino Neto Road',
      subDetails: 'Accra, Ghana',
      action: 'Get Directions',
      color: '#6C5CE7',
      link: 'https://maps.google.com'
    },
  ];

  // Office locations
  const offices = [
    {
      city: 'Accra (Headquarters)',
      address: '18 Agostino Neto Road, Airport Residential Area, Accra',
      phone: '+233 30 123 4567',
      email: 'accra@nyansafo.com',
      hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 2pm',
      coordinates: '5.6037° N, 0.1870° W'
    },
    {
      city: 'Kumasi',
      address: 'Harper Road, Adum, Kumasi',
      phone: '+233 32 123 4567',
      email: 'kumasi@nyansafo.com',
      hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 2pm',
      coordinates: '6.6885° N, 1.6244° W'
    },
    {
      city: 'Takoradi',
      address: 'Market Circle, Takoradi',
      phone: '+233 31 123 4567',
      email: 'takoradi@nyansafo.com',
      hours: 'Mon-Fri: 8am - 6pm, Sat: 9am - 2pm',
      coordinates: '4.8845° N, 1.7554° W'
    },
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How quickly do you respond to inquiries?',
      answer: 'We aim to respond to all inquiries within 2 hours during business hours. For urgent matters, we recommend calling our phone support for immediate assistance.'
    },
    {
      question: 'Can I file a claim through the website?',
      answer: 'Yes! You can file claims directly through our portal. Visit the Claims page, fill out the form, and upload your documents. You can track your claim status in real-time.'
    },
    {
      question: 'What information do I need when contacting support?',
      answer: 'To help us serve you faster, please have your policy number (if you have one), a brief description of your inquiry, and your preferred contact method ready.'
    },
    {
      question: 'Do you have support in local languages?',
      answer: 'Yes! Our support team includes speakers of Twi, Ga, Ewe, and Hausa. Just let us know your preferred language when you reach out.'
    },
    {
      question: 'Is there a mobile app for customer support?',
      answer: 'Yes, our mobile app is available on both iOS and Android. You can chat with support, file claims, and manage your policies directly from the app.'
    },
  ];

  // Social media links
  const socialLinks = [
    { platform: 'Twitter', icon: '𝕏', url: '#', color: '#000000' },
    { platform: 'Facebook', icon: 'f', url: '#', color: '#1877F2' },
    { platform: 'Instagram', icon: '📷', url: '#', color: '#E4405F' },
    { platform: 'LinkedIn', icon: 'in', url: '#', color: '#0A66C2' },
    { platform: 'WhatsApp', icon: '💬', url: '#', color: '#25D366' },
    { platform: 'TikTok', icon: '🎵', url: '#', color: '#000000' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
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
    <main className={styles.contactPage}>
      {/* ============= HERO SECTION ============= */}
      <section 
        className={styles.heroSection}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.badgePulse}></span>
            <span>🇬🇭 WE'RE HERE TO HELP</span>
          </span>
          
          <h1 className={styles.heroTitle}>
            Get in 
            <span className={styles.titleHighlight}> Touch</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Questions? Comments? Need assistance with a claim? 
            Our team is ready to help you with everything insurance and fintech.
          </p>

          {/* Quick response guarantee */}
          <div className={styles.responseGuarantee}>
            <span className={styles.guaranteeIcon}>⚡</span>
            <div className={styles.guaranteeText}>
              <strong>2-hour response guarantee</strong>
              <span>We'll get back to you within 2 hours during business hours</span>
            </div>
          </div>
        </div>

        {/* Floating contact icons */}
        <div className={styles.floatingIcons}>
          <div className={styles.floatingIcon} style={{ top: '15%', left: '5%', animationDelay: '0s' }}>📞</div>
          <div className={styles.floatingIcon} style={{ top: '70%', left: '8%', animationDelay: '-2s' }}>✉️</div>
          <div className={styles.floatingIcon} style={{ top: '25%', right: '10%', animationDelay: '-4s' }}>💬</div>
          <div className={styles.floatingIcon} style={{ bottom: '30%', right: '5%', animationDelay: '-1s' }}>📍</div>
        </div>
      </section>

      {/* ============= CONTACT METHODS ============= */}
      <section 
        className={styles.methodsSection}
        ref={el => { sectionRefs.current[1] = el; }}
      >
        <div className={styles.methodsGrid}>
          {contactMethods.map((method, index) => (
            <a 
              key={index}
              href={method.link}
              className={styles.methodCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.methodIcon} style={{ background: method.color + '20' }}>
                <span style={{ color: method.color }}>{method.icon}</span>
              </div>
              <h3>{method.title}</h3>
              <p className={styles.methodDetails}>{method.details}</p>
              <p className={styles.methodSubDetails}>{method.subDetails}</p>
              <span className={styles.methodAction} style={{ color: method.color }}>
                {method.action} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ============= CONTACT FORM SECTION ============= */}
      <section 
        className={styles.formSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <span className={styles.sectionBadge}>📝 SEND US A MESSAGE</span>
            <h2 className={styles.sectionTitle}>
              We'd Love to 
              <span className={styles.titleAccent}> Hear From You</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Fill out the form below and we'll get back to you within 2 hours.
            </p>
          </div>

          <div className={styles.formWrapper}>
            {formStatus === 'success' && (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>✅</span>
                <div>
                  <h4>Message Sent!</h4>
                  <p>We'll get back to you within 2 hours. Thanks for reaching out!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="life">Life Insurance</option>
                    <option value="health">Health Insurance</option>
                    <option value="vehicle">Vehicle Insurance</option>
                    <option value="property">Property Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="claims">Claims Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="How can we help you today?"
                  rows={5}
                />
              </div>

              <div className={styles.formFooter}>
                <p className={styles.formNote}>
                  * Required fields. We'll never share your information.
                </p>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <span className={styles.submitArrow}>→</span>
                </button>
              </div>
            </form>

            {/* Live chat alternative */}
            <div className={styles.liveChatAlternative}>
              <span className={styles.liveChatIcon}>💬</span>
              <p>
                Prefer instant messaging? 
                <button className={styles.liveChatLink}>Start Live Chat</button>
              </p>
            </div>
          </div>
        </div>

        {/* Morphing shape decoration */}
        <div className={styles.formDecoration}>
          <div className={styles.decorationShape}></div>
          <div className={styles.decorationShape2}></div>
        </div>
      </section>

      {/* ============= OFFICE LOCATIONS ============= */}
      <section 
        className={styles.officesSection}
        ref={el => { sectionRefs.current[3] = el; }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>📍 OUR OFFICES</span>
          <h2 className={styles.sectionTitle}>
            Visit Us in 
            <span className={styles.titleAccent}> Person</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Come say hello at any of our locations across Ghana
          </p>
        </div>

        <div className={styles.officesGrid}>
          {offices.map((office, index) => (
            <div 
              key={index}
              className={styles.officeCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.officeHeader}>
                <span className={styles.officeIcon}>🏢</span>
                <h3>{office.city}</h3>
              </div>
              <div className={styles.officeDetails}>
                <p className={styles.officeAddress}>
                  <span className={styles.detailIcon}>📍</span>
                  {office.address}
                </p>
                <p className={styles.officePhone}>
                  <span className={styles.detailIcon}>📞</span>
                  {office.phone}
                </p>
                <p className={styles.officeEmail}>
                  <span className={styles.detailIcon}>✉️</span>
                  {office.email}
                </p>
                <p className={styles.officeHours}>
                  <span className={styles.detailIcon}>⏰</span>
                  {office.hours}
                </p>
                <p className={styles.officeCoords}>
                  <span className={styles.detailIcon}>🌍</span>
                  {office.coordinates}
                </p>
              </div>
              <a href="#" className={styles.officeDirection}>
                Get Directions →
              </a>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapOverlay}>
              <span className={styles.mapIcon}>🗺️</span>
              <h3>Interactive Map</h3>
              <p>Click to view all Nyansafo locations on Google Maps</p>
              <button className={styles.mapBtn}>Open Map</button>
            </div>
          </div>
        </div>
      </section>

      {/* ============= FAQ SECTION ============= */}
      <section 
        className={styles.faqSection}
        ref={el => { sectionRefs.current[4] = el; }}
      >
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <span className={styles.sectionBadge}>❓ FREQUENTLY ASKED</span>
            <h2 className={styles.sectionTitle}>
              Got Questions?
              <span className={styles.titleAccent}> We've Got Answers</span>
            </h2>
          </div>

          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`${styles.faqItem} ${activeFaq === index ? styles.active : ''}`}
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.faqFooter}>
            <p>Still have questions? </p>
            <button className={styles.faqContactBtn}>
              Contact Support
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============= SOCIAL MEDIA SECTION ============= */}
      <section 
        className={styles.socialSection}
        ref={el => { sectionRefs.current[5] = el; }}
      >
        <div className={styles.socialContainer}>
          <h2 className={styles.socialTitle}>
            Connect With Us 
            <span className={styles.titleAccent}> On Social Media</span>
          </h2>
          <p className={styles.socialSubtitle}>
            Follow us for updates, tips, and insurance news
          </p>

          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className={styles.socialCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.socialIcon} style={{ background: social.color + '10' }}>
                  <span style={{ color: social.color }}>{social.icon}</span>
                </div>
                <span className={styles.socialPlatform}>{social.platform}</span>
                <span className={styles.socialArrow}>→</span>
              </a>
            ))}
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
            Ready to Get Covered?
          </h2>
          <p className={styles.ctaText}>
            Join thousands of Ghanaians who trust Nyansafo for transparent, 
            reliable insurance. Get a free quote today.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>
              Get a Free Quote
              <span className={styles.ctaArrow}>→</span>
            </button>
            <button className={styles.ctaSecondary}>
              Call Us Now 📞
            </button>
          </div>
          <div className={styles.ctaTrustBadge}>
            <span>⚡ 2-hour response • </span>
            <span>📱 100% digital • </span>
            <span>🇬🇭 Made in Ghana</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;