// app/components/footer/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Quick links organized by category
  const footerLinks = {
    products: [
      { label: 'Life Insurance', href: '/services#life' },
      { label: 'Health Insurance', href: '/services#health' },
      { label: 'Vehicle Insurance', href: '/services#vehicle' },
      { label: 'Property Insurance', href: '/services#property' },
      { label: 'Business Insurance', href: '/services#business' },
      { label: 'Travel Insurance', href: '/services#travel' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
      { label: 'Sustainability', href: '/sustainability' },
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/faq' },
      { label: 'Claims Process', href: '/claims' },
      { label: 'Policy Documents', href: '/documents' },
      { label: 'Report a Claim', href: '/claims/report' },
      { label: 'Find an Advisor', href: '/advisors' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Whistleblower', href: '/whistleblower' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  };

  // Social media with colors
  const socialLinks = [
    { platform: 'Twitter', icon: '𝕏', url: '#', color: '#000000' },
    { platform: 'Facebook', icon: 'f', url: '#', color: '#1877F2' },
    { platform: 'Instagram', icon: '📷', url: '#', color: '#E4405F' },
    { platform: 'LinkedIn', icon: 'in', url: '#', color: '#0A66C2' },
    { platform: 'YouTube', icon: '▶️', url: '#', color: '#FF0000' },
    { platform: 'TikTok', icon: '🎵', url: '#', color: '#000000' },
  ];

  // App store links
  const appStores = [
    { platform: 'App Store', icon: '🍎', url: '#', color: '#000000' },
    { platform: 'Google Play', icon: '📱', url: '#', color: '#3DDC84' },
  ];

  // Contact information
  const contactInfo = [
    { icon: '📞', text: '+233 (0) 30 123 4567', link: 'tel:+233301234567' },
    { icon: '✉️', text: 'hello@nyansafo.com', link: 'mailto:hello@nyansafo.com' },
    { icon: '📍', text: '18 Agostino Neto Road, Accra, Ghana', link: 'https://maps.google.com' },
    { icon: '⏰', text: 'Mon-Fri: 8am - 6pm | Sat: 9am - 2pm', link: null },
  ];

  // Partner logos (simplified)
  const partners = [
    { name: 'Fidelity Bank', logo: '🏦', color: '#6C5CE7' },
    { name: 'StarLife', logo: '🌟', color: '#4ECDC4' },
    { name: 'Enterprise', logo: '🏢', color: '#FFD93D' },
    { name: 'SIC', logo: '🛡️', color: '#FF6B6B' },
    { name: 'Hollard', logo: '🦁', color: '#FF8E8E' },
    { name: 'Activa', logo: '🔵', color: '#4ECDC4' },
  ];

  return (
    <footer className={styles.footer}>
      {/* ============= MAIN FOOTER ============= */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>🛡️</span>
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoName}>NYANSAFO</span>
                <span className={styles.logoTagline}>InsureFintech</span>
              </div>
            </Link>
            
            <p className={styles.brandDescription}>
              Ghana's most transparent insurance platform. 
              Protecting what matters with technology you can trust.
            </p>

            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={styles.socialLink}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* App Store Badges */}
            <div className={styles.appBadges}>
              {appStores.map((app, index) => (
                <a
                  key={index}
                  href={app.url}
                  className={styles.appBadge}
                  style={{ '--app-color': app.color } as React.CSSProperties}
                >
                  <span className={styles.appIcon}>{app.icon}</span>
                  <span className={styles.appText}>
                    <span className={styles.appSmall}>Download on</span>
                    <span className={styles.appName}>{app.platform}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Products</h3>
              <ul className={styles.linkList}>
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Company</h3>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Support</h3>
              <ul className={styles.linkList}>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Legal</h3>
              <ul className={styles.linkList}>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className={styles.contactSection}>
            <h3 className={styles.contactTitle}>Get In Touch</h3>
            
            <div className={styles.contactInfo}>
              {contactInfo.map((item, index) => (
                item.link ? (
                  <a key={index} href={item.link} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <div key={index} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                )
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className={styles.newsletter}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterText}>
                Get insurance tips and offers straight to your inbox.
              </p>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={styles.newsletterInput}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
              <p className={styles.newsletterNote}>
                We'll never share your email. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============= PARTNERS STRIP ============= */}
      <div className={styles.partnersStrip}>
        <div className={styles.container}>
          <div className={styles.partnersContent}>
            <span className={styles.partnersLabel}>Trusted by:</span>
            <div className={styles.partnersGrid}>
              {partners.map((partner, index) => (
                <div key={index} className={styles.partnerItem}>
                  <span className={styles.partnerLogo} style={{ color: partner.color }}>
                    {partner.logo}
                  </span>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============= BOTTOM BAR ============= */}
      <div className={styles.bottomBar}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Nyansafo InsureFintech. All rights reserved.
            </p>
            <p className={styles.regulated}>
              <span className={styles.regulatedIcon}>🏛️</span>
              Regulated by the National Insurance Commission, Ghana
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/sitemap" className={styles.bottomLink}>
                Sitemap
              </Link>
              <span className={styles.separator}>•</span>
              <Link href="/accessibility" className={styles.bottomLink}>
                Accessibility
              </Link>
              <span className={styles.separator}>•</span>
              <Link href="/cookies" className={styles.bottomLink}>
                Cookie Preferences
              </Link>
            </div>
        </div>
      </div>

      {/* ============= FLOATING TRUST BADGE ============= */}
      <div className={styles.trustBadge}>
        <div className={styles.trustBadgeContent}>
          <span className={styles.trustBadgeIcon}>🛡️</span>
          <div className={styles.trustBadgeText}>
            <strong>24-Hour Claims</strong>
            <span>Track online</span>
          </div>
        </div>
      </div>

      {/* ============= BACK TO TOP ============= */}
      <button 
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <span className={styles.backToTopIcon}>↑</span>
      </button>
    </footer>
  );
};

export default Footer;