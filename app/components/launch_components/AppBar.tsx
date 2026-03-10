"use client";

import React, { useState, useEffect } from "react";
import styles from "./AppBar.module.css";
import Logo from "../logo/logo";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const AppBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/launch/home" },
    { label: "Insurance", href: "/launch/insurance", hasDropdown: true },
    // { label: "Fintech", href: "/fintech", hasDropdown: true },
    { label: "Claims", href: "/launch/claims" },
    { label: "About", href: "/launch/about" },
    { label: "Contact", href: "/launch/contact" },
  ];

  const insuranceProducts = [
    { label: "Life Insurance", icon: "🛡️", href: "/launch/insurance/life" },
    { label: "Health Insurance", icon: "❤️", href: "/launch/insurance/health" },
    { label: "Vehicle Insurance", icon: "🚗", href: "/launch/insurance/vehicle" },
    { label: "Property Insurance", icon: "🏠", href: "/launch/insurance/property" },
    { label: "Travel Insurance", icon: "✈️", href: "/launch/insurance/travel" },
    { label: "Business Insurance", icon: "🏢", href: "/launch/insurance/business" },
  ];

  const fintechProducts = [
    { label: "Digital Banking", icon: "💳", href: "/fintech/banking" },
    { label: "Investment Plans", icon: "📈", href: "/fintech/investment" },
    { label: "Savings Accounts", icon: "💰", href: "/fintech/savings" },
    { label: "Loans & Credit", icon: "🏦", href: "/fintech/loans" },
    { label: "Retirement Planning", icon: "📊", href: "/fintech/retirement" },
    { label: "Wealth Management", icon: "👑", href: "/fintech/wealth" },
  ];

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={styles.appBar}>
        <div className={styles.container}>
          {/* Logo */}
          <a href="/launch/home" className={styles.logo}>
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={styles.navItem}
                  onMouseEnter={() =>
                    item.hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a href={item.href} className={styles.navLink}>
                    {item.label}

                    {item.hasDropdown && (
                      <svg
                        className={`${styles.dropdownArrow} ${
                          activeDropdown === item.label ? styles.rotated : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </a>

                  {/* Insurance Dropdown */}
                  {item.label === "Insurance" &&
                    activeDropdown === item.label && (
                      <div className={styles.megaDropdown}>
                        <div className={styles.dropdownContent}>
                          <div className={styles.dropdownHeader}>
                            <span className={styles.dropdownTitle}>
                              Insurance Solutions
                            </span>
                            <span className={styles.dropdownSubtitle}>
                              Comprehensive protection for every aspect of your
                              life
                            </span>
                          </div>

                          <div className={styles.dropdownGrid}>
                            {insuranceProducts.map((product) => (
                              <a
                                key={product.label}
                                href={product.href}
                                className={styles.dropdownItem}
                              >
                                <span className={styles.dropdownIcon}>
                                  {product.icon}
                                </span>

                                <div className={styles.dropdownItemContent}>
                                  <span className={styles.dropdownItemLabel}>
                                    {product.label}
                                  </span>

                                  <span className={styles.dropdownItemDesc}>
                                    Comprehensive coverage
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>

                          <div className={styles.dropdownFooter}>
                            <a
                              href="/launch/insurance"
                              className={styles.dropdownViewAll}
                            >
                              View All Insurance Products
                              <span className={styles.dropdownArrow}>→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                  {/* Fintech Dropdown */}
                  {item.label === "Fintech" &&
                    activeDropdown === item.label && (
                      <div className={styles.megaDropdown}>
                        <div className={styles.dropdownContent}>
                          <div className={styles.dropdownHeader}>
                            <span className={styles.dropdownTitle}>
                              Fintech Solutions
                            </span>

                            <span className={styles.dropdownSubtitle}>
                              Innovative financial tools for modern wealth
                              management
                            </span>
                          </div>

                          <div className={styles.dropdownGrid}>
                            {fintechProducts.map((product) => (
                              <a
                                key={product.label}
                                href={product.href}
                                className={styles.dropdownItem}
                              >
                                <span className={styles.dropdownIcon}>
                                  {product.icon}
                                </span>

                                <div className={styles.dropdownItemContent}>
                                  <span className={styles.dropdownItemLabel}>
                                    {product.label}
                                  </span>

                                  <span className={styles.dropdownItemDesc}>
                                    Smart financial solutions
                                  </span>
                                </div>
                              </a>
                            ))}
                          </div>

                          <div className={styles.dropdownFooter}>
                            <a
                              href="/fintech"
                              className={styles.dropdownViewAll}
                            >
                              View All Fintech Products
                              <span className={styles.dropdownArrow}>→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            <button className={styles.iconButton} aria-label="Notifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>

            <a href="/login" className={styles.loginBtn}>
              <span>Client Login</span>
            </a>

            <button
              className={styles.menuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <div
                className={`${styles.menuIcon} ${
                  isMobileMenuOpen ? styles.open : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        {/* Mobile content unchanged */}
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AppBar;