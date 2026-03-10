// app/insurance/[category]/[slug]/page.tsx
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
    longDesc: 'Term life insurance provides pure protection for a set period. If something happens to you during the term, your family receives the payout. It\'s the most affordable way to ensure your loved ones are protected during your working years.',
    features: [
      '10, 20, or 30 year terms available',
      'Fixed premiums that never increase',
      'Convertible to permanent insurance',
      'Child and spouse riders available',
      'Accelerated death benefit option',
      'Waiver of premium for disability'
    ],
    benefits: [
      'Income replacement for your family',
      'Pay off mortgage and debts',
      'Children\'s education funding',
      'Business loan protection'
    ],
    price: 'From GHS 50/month',
    priceBreakdown: {
      'GHS 50': 'GHS 100,000 coverage',
      'GHS 80': 'GHS 200,000 coverage',
      'GHS 120': 'GHS 300,000 coverage',
    },
    eligibility: [
      'Age 18-65',
      'Ghanaian resident',
      'No major health issues',
      'Valid national ID'
    ],
    documents: [
      'National ID card',
      'Proof of income',
      'Beneficiary details',
      'Medical questionnaire'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'What happens at the end of the term?',
        a: 'Coverage ends. You can renew, convert to permanent insurance, or let it lapse.'
      },
      {
        q: 'Can I get my money back if I don\'t die?',
        a: 'Term life is pure protection with no cash value. For savings + protection, consider our endowment plan.'
      },
      {
        q: 'What if I miss a payment?',
        a: 'We offer a 30-day grace period. After that, coverage may lapse.'
      }
    ],
    href: '/insurance/life/term-life'
  },
  {
    id: 'whole-life',
    category: 'life',
    name: 'Whole Life Insurance',
    icon: '🌳',
    shortDesc: 'Lifetime coverage that builds cash value. Protect your family and build wealth simultaneously.',
    longDesc: 'Whole life insurance provides coverage for your entire life while building cash value that grows tax-deferred. You can borrow against the cash value or use it to pay premiums later. It\'s protection and investment in one.',
    features: [
      'Lifetime coverage',
      'Guaranteed cash value growth',
      'Fixed premiums never increase',
      'Dividend eligible',
      'Loan against cash value',
      'Guaranteed death benefit'
    ],
    benefits: [
      'Estate planning',
      'Tax-advantaged savings',
      'Emergency fund access',
      'Retirement supplement'
    ],
    price: 'From GHS 120/month',
    priceBreakdown: {
      'GHS 120': 'GHS 50,000 coverage',
      'GHS 200': 'GHS 100,000 coverage',
      'GHS 350': 'GHS 200,000 coverage',
    },
    eligibility: [
      'Age 18-65',
      'Ghanaian resident',
      'Medical exam required',
      'Valid national ID'
    ],
    documents: [
      'National ID card',
      'Medical history',
      'Beneficiary details',
      'Proof of income'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'How does the cash value work?',
        a: 'Part of your premium goes into a savings account that grows over time. You can borrow against it or withdraw it.'
      },
      {
        q: 'Can I stop paying premiums later?',
        a: 'Yes, once the cash value is large enough, it can pay future premiums.'
      }
    ],
    href: '/insurance/life/whole-life'
  },
  {
    id: 'endowment',
    category: 'life',
    name: 'Endowment Plan',
    icon: '🎯',
    shortDesc: 'Save for a specific goal while getting life coverage. Perfect for children\'s education or retirement.',
    longDesc: 'An endowment plan pays a lump sum after a specific term OR upon death. It combines savings with protection - you get money back even if you survive the term.',
    features: [
      'Maturity benefit',
      'Life coverage throughout',
      'Tax-free returns',
      'Goal-based saving',
      'Loan facility',
      'Bonus additions'
    ],
    benefits: [
      'Children\'s education fund',
      'Retirement lump sum',
      'Wedding planning',
      'Business capital'
    ],
    price: 'From GHS 80/month',
    priceBreakdown: {
      'GHS 80': 'GHS 20,000 at maturity',
      'GHS 150': 'GHS 50,000 at maturity',
      'GHS 250': 'GHS 100,000 at maturity',
    },
    eligibility: [
      'Age 18-60',
      'Ghanaian resident',
      'No medical exam for lower amounts',
      'Valid ID'
    ],
    documents: [
      'National ID',
      'Beneficiary details',
      'Goal declaration'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'What happens if I need money before maturity?',
        a: 'You can take a loan against the policy or surrender early (with reduced value).'
      }
    ],
    href: '/insurance/life/endowment'
  },
  {
    id: 'group-life',
    category: 'life',
    name: 'Group Life Insurance',
    icon: '👥',
    shortDesc: 'Coverage for companies and organizations. Protect your employees and their families.',
    longDesc: 'Group life insurance provides coverage for your entire team at affordable rates. It\'s a key employee benefit that shows you care about their families.',
    features: [
      'Coverage for all employees',
      'Simple administration',
      'Tax deductible for business',
      'Add critical illness rider',
      'No medical exams',
      '24/7 claims support'
    ],
    benefits: [
      'Employee retention',
      'Peace of mind for staff',
      'Company reputation',
      'Tax benefits'
    ],
    price: 'Custom quote based on team size',
    priceBreakdown: {},
    eligibility: [
      'Registered business',
      'Minimum 5 employees',
      'Valid business registration'
    ],
    documents: [
      'Business registration',
      'Employee list',
      'Company TIN'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'Can employees add family members?',
        a: 'Yes, we offer optional family riders at group rates.'
      }
    ],
    href: '/insurance/life/group-life'
  },
  {
    id: 'credit-life',
    category: 'life',
    name: 'Credit Life Insurance',
    icon: '💰',
    shortDesc: 'Pays off loans if something happens to you. Protects your family from debt.',
    longDesc: 'Credit life insurance ensures your loans are paid off if you pass away or become disabled. Your family inherits your assets, not your debt.',
    features: [
      'Loan protection',
      'Decreasing term matches loan',
      'Affordable premiums',
      'No medical exam',
      'Disability coverage option',
      'Direct payout to lender'
    ],
    benefits: [
      'Family debt-free',
      'Protect co-signers',
      'Loan approval easier',
      'Peace of mind'
    ],
    price: 'From GHS 20/month per GHS 10,000 loan',
    priceBreakdown: {},
    eligibility: [
      'Age 18-65',
      'Has an active loan',
      'Ghanaian resident'
    ],
    documents: [
      'Loan agreement',
      'National ID',
      'Lender details'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'Does it cover all loan types?',
        a: 'Yes - mortgages, car loans, personal loans, business loans.'
      }
    ],
    href: '/insurance/life/credit-life'
  },
  {
    id: 'funeral',
    category: 'life',
    name: 'Funeral Insurance',
    icon: '⚱️',
    shortDesc: 'Cover funeral expenses so your family doesn\'t have to worry during difficult times.',
    longDesc: 'Funeral insurance provides a lump sum specifically for funeral costs. It ensures your family can give you a dignified send-off without financial stress.',
    features: [
      'Immediate coverage',
      'Fixed payout amount',
      'No medical exam',
      'Family discount available',
      'Payout within 24 hours',
      'Nationwide funeral homes'
    ],
    benefits: [
      'Family not burdened',
      'Dignified funeral',
      'Quick claims process',
      'Affordable premiums'
    ],
    price: 'From GHS 30/month',
    priceBreakdown: {
      'GHS 30': 'GHS 5,000 coverage',
      'GHS 50': 'GHS 10,000 coverage',
      'GHS 80': 'GHS 15,000 coverage',
    },
    eligibility: [
      'Age 18-70',
      'Ghanaian resident',
      'No health questions'
    ],
    documents: [
      'National ID',
      'Beneficiary details'
    ],
    color: '#4ECDC4',
    gradient: 'linear-gradient(135deg, #4ECDC4, #2C9A8E)',
    faq: [
      {
        q: 'Is there a waiting period?',
        a: 'No, coverage starts immediately after first premium payment.'
      }
    ],
    href: '/insurance/life/funeral'
  },

  // ===== HEALTH INSURANCE =====
  {
    id: 'individual',
    category: 'health',
    name: 'Individual Health Plan',
    icon: '❤️',
    shortDesc: 'Comprehensive health coverage for individuals. Hospital visits, medication, and more.',
    longDesc: 'Our individual health plan covers your medical expenses including hospital stays, doctor visits, medications, and emergency care. Choose the coverage level that fits your needs and budget.',
    features: [
      'Inpatient hospital coverage',
      'Outpatient doctor visits',
      'Pharmacy benefits',
      'Maternity options',
      'Dental and optical add-ons',
      'Emergency evacuation',
      'Annual health checkups',
      'No referral needed for specialists'
    ],
    benefits: [
      'Access to 500+ hospitals nationwide',
      'Cashless hospitalization',
      'Direct billing with hospitals',
      'Online claims tracking'
    ],
    price: 'From GHS 80/month',
    priceBreakdown: {
      'GHS 80': 'Basic - GHS 50,000 annual limit',
      'GHS 150': 'Standard - GHS 100,000 annual limit',
      'GHS 250': 'Premium - GHS 200,000 annual limit',
    },
    eligibility: [
      'Age 18-65',
      'Ghanaian resident',
      'Valid national ID'
    ],
    documents: [
      'National ID card',
      'Health questionnaire',
      'Recent photo'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'Does it cover pre-existing conditions?',
        a: 'After a 12-month waiting period, some pre-existing conditions may be covered.'
      },
      {
        q: 'Can I use any hospital?',
        a: 'You can use any of our 500+ partner hospitals for cashless treatment. Other hospitals are reimbursed.'
      },
      {
        q: 'How do I file a claim?',
        a: 'Simply show your digital card at partner hospitals. For others, submit receipts via our app.'
      }
    ],
    href: '/insurance/health/individual'
  },
  {
    id: 'family',
    category: 'health',
    name: 'Family Health Plan',
    icon: '👨‍👩‍👧‍👦',
    shortDesc: 'Cover your whole family with one plan. Spouse and up to 4 children included.',
    longDesc: 'Protect your entire family with one comprehensive health plan. Includes spouse and up to 4 children under 21. Everyone gets the same great coverage at a discounted family rate.',
    features: [
      'Covers spouse and children',
      'Family discount (save 20%)',
      'Maternity cover included',
      'Children\'s dental & optical',
      'Wellness programs',
      'Vaccinations for kids',
      'School health checks',
      'Emergency ambulance'
    ],
    benefits: [
      'One premium for whole family',
      'Kids covered until 21',
      'Maternity from day one',
      '24/7 pediatric hotline'
    ],
    price: 'From GHS 220/month',
    priceBreakdown: {
      'GHS 220': '2 adults + 2 children (Basic)',
      'GHS 380': '2 adults + 4 children (Standard)',
      'GHS 550': '2 adults + 4 children (Premium)',
    },
    eligibility: [
      'Adults 18-65',
      'Children under 21',
      'Ghanaian residents',
      'Valid IDs for all'
    ],
    documents: [
      'IDs for all family members',
      'Marriage certificate (if applicable)',
      'Children\'s birth certificates',
      'Family photo'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'What happens when a child turns 21?',
        a: 'They can convert to an individual plan with no medical underwriting.'
      },
      {
        q: 'Can I add more children?',
        a: 'Yes, additional children can be added for GHS 50/month each.'
      }
    ],
    href: '/insurance/health/family'
  },
  {
    id: 'senior',
    category: 'health',
    name: 'Senior Citizens Health',
    icon: '👵',
    shortDesc: 'Specialized coverage for ages 60+. Comprehensive care for golden years.',
    longDesc: 'Designed specifically for seniors, this plan focuses on the health needs of those 60 and above. Includes coverage for age-related conditions with higher limits and specialized care.',
    features: [
      'No upper age limit',
      'Pre-existing conditions covered',
      'Home care options',
      'Annual comprehensive checkups',
      'Chronic disease management',
      'Prescription coverage',
      'Hearing and vision aids',
      'Emergency response system'
    ],
    benefits: [
      'Coverage for diabetes, hypertension',
      'Regular wellness visits',
      'Home nursing care',
      'Family caregiver support'
    ],
    price: 'From GHS 150/month',
    priceBreakdown: {
      'GHS 150': 'Essential - GHS 30,000 annual',
      'GHS 280': 'Enhanced - GHS 60,000 annual',
      'GHS 400': 'Comprehensive - GHS 100,000 annual',
    },
    eligibility: [
      'Age 60+',
      'Ghanaian resident',
      'Health questionnaire',
      'Valid ID'
    ],
    documents: [
      'National ID',
      'Medical history',
      'Current medications list',
      'Emergency contact'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'Are my existing conditions covered?',
        a: 'Yes, after a 6-month waiting period, pre-existing conditions are covered.'
      },
      {
        q: 'Is there a maximum age to join?',
        a: 'No, you can join at any age. Premiums adjust based on age.'
      }
    ],
    href: '/insurance/health/senior'
  },
  {
    id: 'maternity',
    category: 'health',
    name: 'Maternity Insurance',
    icon: '🤰',
    shortDesc: 'Coverage for expecting mothers. Prenatal, delivery, and postnatal care.',
    longDesc: 'Comprehensive maternity coverage including prenatal visits, delivery (normal or C-section), and postnatal care for both mother and baby. Start your family with peace of mind.',
    features: [
      'Prenatal consultations',
      'Ultrasounds and tests',
      'Normal delivery coverage',
      'C-section coverage',
      'Newborn care for 30 days',
      'Complications cover',
      'Postnatal checkups',
      'Lactation consultation'
    ],
    benefits: [
      'Choose any hospital',
      'Direct hospital payment',
      'Baby added automatically',
      'Midwife options'
    ],
    price: 'From GHS 200/month',
    priceBreakdown: {
      'GHS 200': 'Basic - GHS 5,000 limit',
      'GHS 350': 'Standard - GHS 10,000 limit',
      'GHS 500': 'Premium - GHS 15,000 limit',
    },
    eligibility: [
      'Women 18-45',
      'Before pregnancy or within first trimester',
      'Ghanaian resident',
      'Valid ID'
    ],
    documents: [
      'National ID',
      'Pregnancy confirmation (if applicable)',
      'Expected due date',
      'Preferred hospital'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'Is there a waiting period?',
        a: 'Yes, 9 months waiting period before delivery coverage begins.'
      },
      {
        q: 'Are twins covered?',
        a: 'Yes, multiple births are covered at no extra cost.'
      }
    ],
    href: '/insurance/health/maternity'
  },
  {
    id: 'critical-illness',
    category: 'health',
    name: 'Critical Illness Cover',
    icon: '💪',
    shortDesc: 'Lump sum payment upon diagnosis of covered critical illnesses.',
    longDesc: 'Get a lump sum cash payment if diagnosed with a covered critical illness. Use it for treatment, lifestyle changes, or anything you need while focusing on recovery.',
    features: [
      '15+ critical illnesses covered',
      'Lump sum payout',
      'Survivor benefit',
      'Worldwide cover',
      'Second medical opinion',
      'Wellness coaching',
      'Return to work support',
      'Family counseling'
    ],
    benefits: [
      'Cancer, heart attack, stroke',
      'Kidney failure, major organ transplant',
      'Multiple sclerosis, Parkinson\'s',
      'And more...'
    ],
    price: 'From GHS 60/month',
    priceBreakdown: {
      'GHS 60': 'GHS 50,000 coverage',
      'GHS 100': 'GHS 100,000 coverage',
      'GHS 180': 'GHS 200,000 coverage',
    },
    eligibility: [
      'Age 18-55',
      'Ghanaian resident',
      'Medical exam required',
      'Non-smoker rates available'
    ],
    documents: [
      'National ID',
      'Medical history',
      'Family health history',
      'Lifestyle questionnaire'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'Can I get this with other insurance?',
        a: 'Yes, it works as a standalone or rider on life insurance.'
      },
      {
        q: 'What happens if I recover?',
        a: 'You keep the money. It\'s yours to use however you need.'
      }
    ],
    href: '/insurance/health/critical-illness'
  },
  {
    id: 'dental',
    category: 'health',
    name: 'Dental Insurance',
    icon: '🦷',
    shortDesc: 'Coverage for dental care. Checkups, cleanings, and procedures.',
    longDesc: 'Keep your smile healthy with affordable dental coverage. Includes preventive care, basic procedures, and major dental work at partner clinics nationwide.',
    features: [
      'Preventive care (checkups, cleaning)',
      'Fillings and extractions',
      'Root canals',
      'Crowns and bridges',
      'Orthodontics (braces)',
      'Dentures',
      'No waiting period',
      'Choose any dentist'
    ],
    benefits: [
      'Two free checkups per year',
      '20% off major procedures',
      'Children\'s orthodontics',
      'Emergency dental'
    ],
    price: 'From GHS 40/month',
    priceBreakdown: {
      'GHS 40': 'Basic - Preventive only',
      'GHS 70': 'Standard - Includes fillings',
      'GHS 120': 'Comprehensive - Includes major work',
    },
    eligibility: [
      'All ages',
      'Ghanaian resident',
      'No medical questions',
      'Valid ID'
    ],
    documents: [
      'National ID',
      'Dental history (optional)'
    ],
    color: '#FFD93D',
    gradient: 'linear-gradient(135deg, #FFD93D, #E5B800)',
    faq: [
      {
        q: 'Can I see any dentist?',
        a: 'You get best benefits at partner clinics, but can claim from any licensed dentist.'
      },
      {
        q: 'Are braces covered?',
        a: 'Yes, in our Comprehensive plan with a 12-month waiting period.'
      }
    ],
    href: '/insurance/health/dental'
  },

  // ===== VEHICLE INSURANCE =====
  {
    id: 'comprehensive',
    category: 'vehicle',
    name: 'Comprehensive Car Insurance',
    icon: '🚗',
    shortDesc: 'Full coverage for your vehicle. Accident, theft, fire, and third-party liability.',
    longDesc: 'Our most complete vehicle coverage. Protects your car against accidents, theft, fire, vandalism, and damage to others. Also includes roadside assistance and courtesy car.',
    features: [
      'Own damage coverage',
      'Third-party liability',
      'Theft and fire',
      'Vandalism and riots',
      'Windscreen damage',
      'Roadside assistance 24/7',
      'Courtesy car',
      'Choice of repairer'
    ],
    benefits: [
      'Claim within 24 hours',
      'Cashless repairs',
      'No depreciation on parts',
      'Nationwide towing'
    ],
    price: 'From GHS 200/month',
    priceBreakdown: {
      'GHS 200': 'Vehicles under GHS 50,000',
      'GHS 350': 'Vehicles GHS 50,000-100,000',
      'GHS 500': 'Vehicles over GHS 100,000',
    },
    eligibility: [
      'Vehicle under 15 years',
      'Valid driver\'s license',
      'Vehicle registered in Ghana',
      'Valid roadworthy'
    ],
    documents: [
      'Vehicle registration',
      'Driver\'s license',
      'Vehicle photos',
      'Previous insurance (if any)'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'What is my excess?',
        a: 'Standard excess is GHS 500. You can choose higher excess for lower premiums.'
      },
      {
        q: 'Does it cover off-road driving?',
        a: 'Standard comprehensive covers public roads only. For off-road, see our SUV plan.'
      }
    ],
    href: '/insurance/vehicle/comprehensive'
  },
  {
    id: 'third-party',
    category: 'vehicle',
    name: 'Third-Party Insurance',
    icon: '🚙',
    shortDesc: 'Minimum legal requirement. Covers damage to others, not your own vehicle.',
    longDesc: 'The legal minimum required in Ghana. Covers damage you cause to other people\'s vehicles and property, but not damage to your own car.',
    features: [
      'Legal compliance',
      'Third-party injury cover',
      'Third-party property damage',
      'Affordable premiums',
      'Quick processing',
      'Renewal reminders'
    ],
    benefits: [
      'Meets legal requirements',
      'Lowest cost option',
      'No vehicle inspection',
      'Online purchase'
    ],
    price: 'From GHS 50/month',
    priceBreakdown: {
      'GHS 50': 'Private cars',
      'GHS 80': 'Commercial vehicles',
      'GHS 120': 'High-risk vehicles',
    },
    eligibility: [
      'Any vehicle age',
      'Valid driver\'s license',
      'Valid vehicle registration',
      'Valid roadworthy'
    ],
    documents: [
      'Vehicle registration',
      'Driver\'s license',
      'Previous insurance'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'Is this enough coverage?',
        a: 'It meets legal requirements but doesn\'t protect your own vehicle. Consider comprehensive for full protection.'
      },
      {
        q: 'Can I upgrade later?',
        a: 'Yes, you can upgrade to comprehensive at any renewal.'
      }
    ],
    href: '/insurance/vehicle/third-party'
  },
  {
    id: 'suv',
    category: 'vehicle',
    name: 'SUV & 4x4 Insurance',
    icon: '🚙',
    shortDesc: 'Specialized coverage for SUVs and off-road vehicles. Adventure ready.',
    longDesc: 'Built for SUV and 4x4 owners who take their vehicles off-road. Includes all comprehensive benefits plus specialized coverage for off-road adventures and modified parts.',
    features: [
      'All comprehensive benefits',
      'Off-road coverage',
      'Modified parts cover',
      'Off-road recovery',
      'Adventure add-ons',
      'Roof rack and accessories',
      'Winch and equipment',
      'Specialist repairers'
    ],
    benefits: [
      'Coverage anywhere in Ghana',
      'Off-road recovery service',
      'Modified vehicle specialists',
      'Adventure gear protection'
    ],
    price: 'From GHS 300/month',
    priceBreakdown: {
      'GHS 300': 'Standard SUVs',
      'GHS 450': 'Luxury SUVs',
      'GHS 600': 'Modified 4x4s',
    },
    eligibility: [
      'SUV or 4x4 vehicle',
      'Valid driver\'s license',
      'Vehicle under 10 years',
      'May require inspection'
    ],
    documents: [
      'Vehicle registration',
      'Driver\'s license',
      'Modification list (if any)',
      'Vehicle photos'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'Does it cover off-road accidents?',
        a: 'Yes, as long as you\'re not participating in organized competitions.'
      },
      {
        q: 'Are my roof-top tent and accessories covered?',
        a: 'Yes, up to GHS 10,000 in accessories are covered.'
      }
    ],
    href: '/insurance/vehicle/suv'
  },
  {
    id: 'commercial',
    category: 'vehicle',
    name: 'Commercial Vehicle Insurance',
    icon: '🚚',
    shortDesc: 'Coverage for business vehicles. Tro-tros, taxis, delivery vans, trucks.',
    longDesc: 'Protect your business vehicles with coverage designed for commercial use. Includes fleet discounts, cargo coverage, and driver accident benefits.',
    features: [
      'Comprehensive or third-party options',
      'Fleet discounts',
      'Cargo cover',
      'Driver accident cover',
      'Passenger liability',
      'Goods in transit',
      '24/7 claims',
      'Breakdown assistance'
    ],
    benefits: [
      'Keep your business moving',
      'Protect your drivers',
      'Cover goods being transported',
      'Quick claims to minimize downtime'
    ],
    price: 'Custom quote based on fleet',
    priceBreakdown: {},
    eligibility: [
      'Registered business',
      'Commercial vehicle permit',
      'Drivers with valid license',
      'Vehicle roadworthy'
    ],
    documents: [
      'Business registration',
      'Vehicle registration',
      'Driver licenses',
      'Route permits'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'What counts as a commercial vehicle?',
        a: 'Taxis, tro-tros, delivery vans, trucks, and any vehicle used for business.'
      },
      {
        q: 'Do you cover goods in transit?',
        a: 'Yes, cargo cover is available as an add-on or included in higher plans.'
      }
    ],
    href: '/insurance/vehicle/commercial'
  },
  {
    id: 'motorcycle',
    category: 'vehicle',
    name: 'Motorcycle Insurance',
    icon: '🏍️',
    shortDesc: 'Coverage for bikes. Perfect for Okada riders and weekend riders.',
    longDesc: 'Affordable coverage for motorcycles and scooters. Choose from third-party only or comprehensive protection for your bike.',
    features: [
      'Third-party liability',
      'Own damage (comprehensive)',
      'Rider personal accident',
      'Pillion passenger cover',
      'Theft protection',
      'Helmet and gear cover',
      'Roadside assistance',
      'Quick claims'
    ],
    benefits: [
      'Affordable premiums',
      'Okada rider friendly',
      'Pay-as-you-go options',
      'Mobile claims'
    ],
    price: 'From GHS 40/month',
    priceBreakdown: {
      'GHS 40': 'Third-party only',
      'GHS 80': 'Comprehensive - basic',
      'GHS 120': 'Comprehensive - premium',
    },
    eligibility: [
      'Valid motorcycle license',
      'Motorcycle registered',
      'Rider 18+',
      'Valid roadworthy'
    ],
    documents: [
      'Motorcycle registration',
      'Rider\'s license',
      'Bike photos',
      'Helmet (for gear cover)'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'Does it cover commercial use (Okada)?',
        a: 'Yes, we have special rates for commercial motorcycle operators.'
      },
      {
        q: 'Is my helmet covered?',
        a: 'Yes, in comprehensive plans, riding gear is covered up to GHS 2,000.'
      }
    ],
    href: '/insurance/vehicle/motorcycle'
  },
  {
    id: 'fleet',
    category: 'vehicle',
    name: 'Fleet Insurance',
    icon: '🚛',
    shortDesc: 'Specialized coverage for businesses with multiple vehicles. Save with fleet discounts.',
    longDesc: 'Manage insurance for your entire vehicle fleet with one policy. Get significant discounts, simplified administration, and dedicated claims handling.',
    features: [
      'Single policy for all vehicles',
      'Multi-vehicle discount (up to 30%)',
      'Centralized management',
      'Dedicated account manager',
      'Flexible coverage levels',
      'Driver training programs',
      'Telematics options',
      'Monthly reporting'
    ],
    benefits: [
      'Lower premiums per vehicle',
      'One renewal date',
      'Streamlined claims',
      'Risk management support'
    ],
    price: 'Custom quote based on fleet size',
    priceBreakdown: {},
    eligibility: [
      'Registered business',
      'Minimum 5 vehicles',
      'Fleet manager designated',
      'All vehicles roadworthy'
    ],
    documents: [
      'Business registration',
      'List of all vehicles',
      'Driver details',
      'Claims history'
    ],
    color: '#6C5CE7',
    gradient: 'linear-gradient(135deg, #6C5CE7, #4A3B9C)',
    faq: [
      {
        q: 'How much can I save?',
        a: 'Fleet discounts typically save 15-30% compared to individual policies.'
      },
      {
        q: 'Can I add vehicles during the year?',
        a: 'Yes, new vehicles can be added at pro-rated rates.'
      }
    ],
    href: '/insurance/vehicle/fleet'
  },

  // ===== PROPERTY INSURANCE =====
  {
    id: 'home-building',
    category: 'property',
    name: 'Home Building Insurance',
    icon: '🏠',
    shortDesc: 'Coverage for the structure of your home. Fire, flood, storm, and more.',
    longDesc: 'Protect the structure of your home against unexpected events. Covers the cost to rebuild or repair your home if damaged by insured events.',
    features: [
      'Structure cover',
      'Fire and lightning',
      'Flood and storm damage',
      'Theft and vandalism',
      'Earthquake cover',
      'Falling objects',
      'Rebuild cost coverage',
      'Architect and debris removal'
    ],
    benefits: [
      'Peace of mind for your biggest asset',
      'Coverage at today\'s rebuild costs',
      'Alternative accommodation if uninhabitable',
      'Quick claims process'
    ],
    price: 'From GHS 150/month',
    priceBreakdown: {
      'GHS 150': 'Homes under GHS 200,000',
      'GHS 250': 'Homes GHS 200,000-500,000',
      'GHS 400': 'Homes over GHS 500,000',
    },
    eligibility: [
      'Homeowner',
      'Property in Ghana',
      'Valid property documents',
      'Property valuation'
    ],
    documents: [
      'Property title/deed',
      'Building permit',
      'Valuation report',
      'Photos of property'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'What is not covered?',
        a: 'Wear and tear, gradual damage, and intentional damage are excluded.'
      },
      {
        q: 'How is rebuild cost calculated?',
        a: 'Based on size, construction type, and current building costs in your area.'
      }
    ],
    href: '/insurance/property/home-building'
  },
  {
    id: 'contents',
    category: 'property',
    name: 'Contents Insurance',
    icon: '🪑',
    shortDesc: 'Protect your belongings. Furniture, electronics, appliances, and personal items.',
    longDesc: 'Cover the things inside your home - furniture, electronics, appliances, clothing, and personal valuables against theft, fire, and accidental damage.',
    features: [
      'Coverage for all household contents',
      'Theft and burglary',
      'Fire and smoke damage',
      'Accidental damage',
      'Flood and water damage',
      'New for old replacement',
      'Worldwide cover for personal items',
      'Valuables included (jewelry, art)'
    ],
    benefits: [
      'Protect everything you own',
      'Coverage away from home',
      'Quick replacement after loss',
      'Online inventory management'
    ],
    price: 'From GHS 80/month',
    priceBreakdown: {
      'GHS 80': 'GHS 50,000 contents',
      'GHS 150': 'GHS 100,000 contents',
      'GHS 250': 'GHS 200,000 contents',
    },
    eligibility: [
      'Homeowner or renter',
      'Property in Ghana',
      'Contents valuation',
      'Valid ID'
    ],
    documents: [
      'Contents inventory',
      'Valuables receipts',
      'Photos of items',
      'Proof of address'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'Is my laptop covered outside the home?',
        a: 'Yes, personal items are covered worldwide up to 10% of total sum insured.'
      },
      {
        q: 'How do I value my contents?',
        a: 'Create a room-by-room inventory with estimated replacement costs.'
      }
    ],
    href: '/insurance/property/contents'
  },
  {
    id: 'landlord',
    category: 'property',
    name: 'Landlord Insurance',
    icon: '🏛️',
    shortDesc: 'Coverage for rental properties. Tenant damage, loss of rent, liability.',
    longDesc: 'Specialized protection for landlords. Covers the building, loss of rental income, tenant damage, and your liability as a property owner.',
    features: [
      'Building structure cover',
      'Loss of rent (up to 12 months)',
      'Tenant damage cover',
      'Legal expenses',
      'Property owners liability',
      'Contents if furnished',
      'Malicious damage',
      'Emergency repairs'
    ],
    benefits: [
      'Protect your investment',
      'Income if property uninhabitable',
      'Coverage for problem tenants',
      'Landlord legal support'
    ],
    price: 'From GHS 200/month',
    priceBreakdown: {
      'GHS 200': 'Single property',
      'GHS 350': '2-3 properties',
      'Custom': 'Portfolio (4+ properties)',
    },
    eligibility: [
      'Property owner',
      'Rental property in Ghana',
      'Valid property documents',
      'Tenant agreements'
    ],
    documents: [
      'Property title',
      'Tenancy agreements',
      'Rental income history',
      'Property photos'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'What if my tenant damages the property?',
        a: 'Covered up to your policy limit. We also help with recovery from tenant.'
      },
      {
        q: 'Does it cover squatting?',
        a: 'Yes, loss of rent and damage from squatters is covered after legal eviction.'
      }
    ],
    href: '/insurance/property/landlord'
  },
  {
    id: 'shop',
    category: 'property',
    name: 'Shop Insurance',
    icon: '🏪',
    shortDesc: 'Coverage for retail spaces. Stock, equipment, and business interruption.',
    longDesc: 'Protect your shop, stock, and equipment. Includes business interruption cover so you don\'t lose income if you can\'t trade.',
    features: [
      'Building cover (owned premises)',
      'Stock and merchandise',
      'Shop fittings and equipment',
      'Business interruption',
      'Public liability',
      'Theft and burglary',
      'Fire and flood',
      'Glass breakage'
    ],
    benefits: [
      'Keep trading after a loss',
      'Protect your inventory',
      'Coverage for equipment',
      'Quick claims to minimize downtime'
    ],
    price: 'From GHS 180/month',
    priceBreakdown: {
      'GHS 180': 'Small shop, GHS 50,000 stock',
      'GHS 300': 'Medium shop, GHS 100,000 stock',
      'GHS 500': 'Large shop, GHS 200,000+ stock',
    },
    eligibility: [
      'Registered business',
      'Shop premises in Ghana',
      'Valid business license',
      'Stock valuation'
    ],
    documents: [
      'Business registration',
      'Lease or ownership documents',
      'Stock inventory',
      'Business license'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'What if I rent my shop?',
        a: 'We cover tenant improvements, stock, and equipment. Building covered by landlord.'
      },
      {
        q: 'How is business interruption calculated?',
        a: 'Based on your average daily takings, up to 12 months of lost income.'
      }
    ],
    href: '/insurance/property/shop'
  },
  {
    id: 'office',
    category: 'property',
    name: 'Office Insurance',
    icon: '🏢',
    shortDesc: 'Coverage for office spaces. Equipment, furniture, and business assets.',
    longDesc: 'Protect your office, equipment, and business assets. Includes coverage for computers, furniture, and business interruption.',
    features: [
      'Office equipment (computers, servers)',
      'Furniture and fittings',
      'Business interruption',
      'Public liability',
      'Cyber add-on available',
      'Theft and burglary',
      'Fire and flood',
      'Glass and signage'
    ],
    benefits: [
      'Protect your technology',
      'Quick replacement of equipment',
      'Keep operating after a loss',
      'Professional environment'
    ],
    price: 'From GHS 160/month',
    priceBreakdown: {
      'GHS 160': 'Small office, GHS 50,000 contents',
      'GHS 280': 'Medium office, GHS 100,000 contents',
      'GHS 450': 'Large office, GHS 200,000+ contents',
    },
    eligibility: [
      'Registered business',
      'Office premises in Ghana',
      'Equipment valuation',
      'Business license'
    ],
    documents: [
      'Business registration',
      'Equipment inventory',
      'Lease agreement',
      'Business license'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'Are laptops covered away from office?',
        a: 'Yes, portable equipment is covered worldwide up to 10% of total sum.'
      },
      {
        q: 'Do I need cyber insurance?',
        a: 'We recommend our cyber add-on if you store client data or process payments.'
      }
    ],
    href: '/insurance/property/office'
  },
  {
    id: 'renters',
    category: 'property',
    name: 'Renters Insurance',
    icon: '🔑',
    shortDesc: 'Affordable protection for tenants. Your belongings matter, even if you rent.',
    longDesc: 'Just because you rent doesn\'t mean your belongings aren\'t valuable. Protect your furniture, electronics, and personal items at an affordable price.',
    features: [
      'Personal belongings cover',
      'Liability cover',
      'Additional living expenses',
      'Theft and burglary',
      'Fire and water damage',
      'Affordable monthly premiums',
      'Easy online claims',
      'No landlord required'
    ],
    benefits: [
      'Perfect for renters',
      'Coverage anywhere in Ghana',
      'Pays to replace your items',
      'Protects against liability'
    ],
    price: 'From GHS 50/month',
    priceBreakdown: {
      'GHS 50': 'GHS 20,000 contents',
      'GHS 80': 'GHS 40,000 contents',
      'GHS 120': 'GHS 60,000 contents',
    },
    eligibility: [
      'Renter or tenant',
      'Property in Ghana',
      'Valid tenancy agreement',
      'Contents valuation'
    ],
    documents: [
      'Tenancy agreement',
      'Contents inventory',
      'ID card',
      'Proof of address'
    ],
    color: '#FF8E8E',
    gradient: 'linear-gradient(135deg, #FF8E8E, #FF6B6B)',
    faq: [
      {
        q: 'What if the landlord\'s building is damaged?',
        a: 'Your contents are covered. Building structure is the landlord\'s responsibility.'
      },
      {
        q: 'Can I take it when I move?',
        a: 'Yes, coverage follows you to your new rental. Just update your address.'
      }
    ],
    href: '/insurance/property/renters'
  },

  // ===== TRAVEL INSURANCE =====
  {
    id: 'single-trip',
    category: 'travel',
    name: 'Single Trip Travel Insurance',
    icon: '✈️',
    shortDesc: 'Coverage for one trip. Perfect for vacations and short business trips.',
    longDesc: 'Comprehensive coverage for a single trip. Includes medical emergencies, trip cancellation, lost baggage, and more. Perfect for your next vacation.',
    features: [
      'Medical emergency cover',
      'Trip cancellation/interruption',
      'Lost or delayed baggage',
      'Flight delay',
      'Personal liability',
      '24/7 emergency assistance',
      'COVID-19 coverage',
      'Emergency evacuation'
    ],
    benefits: [
      'Travel with peace of mind',
      'Medical coverage abroad',
      'Protect your trip investment',
      'Help when you need it'
    ],
    price: 'From GHS 80/trip',
    priceBreakdown: {
      'GHS 80': 'Africa travel',
      'GHS 150': 'International (excluding USA)',
      'GHS 250': 'USA, Canada, worldwide',
    },
    eligibility: [
      'Ghanaian resident',
      'Traveling abroad',
      'Valid passport',
      'Age under 70 (higher rates for seniors)'
    ],
    documents: [
      'Passport',
      'Travel itinerary',
      'Visa (if applicable)',
      'Flight booking'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'When should I buy?',
        a: 'As soon as you book your trip, to get trip cancellation coverage.'
      },
      {
        q: 'Does it cover COVID-19?',
        a: 'Yes, medical expenses from COVID-19 are covered up to policy limits.'
      }
    ],
    href: '/insurance/travel/single-trip'
  },
  {
    id: 'multi-trip',
    category: 'travel',
    name: 'Annual Multi-Trip Insurance',
    icon: '🌍',
    shortDesc: 'Unlimited trips for a year. Perfect for frequent travelers.',
    longDesc: 'One policy covers all your trips for an entire year. Perfect for frequent business travelers or those who take multiple vacations annually.',
    features: [
      'Unlimited trips in 12 months',
      'Worldwide coverage',
      'Family options available',
      'Business travel included',
      'Each trip up to 60 days',
      'Medical emergency',
      'Trip cancellation',
      'Lost baggage'
    ],
    benefits: [
      'Best value for frequent travelers',
      'No need to buy per trip',
      'Automatic coverage',
      'Save up to 40% vs single trip'
    ],
    price: 'From GHS 350/year',
    priceBreakdown: {
      'GHS 350': 'Africa only',
      'GHS 550': 'Worldwide excluding USA',
      'GHS 750': 'Worldwide including USA',
    },
    eligibility: [
      'Ghanaian resident',
      'Frequent traveler',
      'Age under 70',
      'Valid passport'
    ],
    documents: [
      'Passport',
      'Travel history (optional)',
      'ID card'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'How long can each trip be?',
        a: 'Each trip can last up to 60 consecutive days.'
      },
      {
        q: 'Can I add family members?',
        a: 'Yes, family policies cover spouse and children at discounted rates.'
      }
    ],
    href: '/insurance/travel/multi-trip'
  },
  {
    id: 'student',
    category: 'travel',
    name: 'Student Travel Insurance',
    icon: '🎓',
    shortDesc: 'Coverage for students studying abroad. Medical, tuition, accommodation.',
    longDesc: 'Designed for Ghanaian students studying abroad. Includes medical coverage, tuition protection, accommodation, and parent visit coverage.',
    features: [
      'Medical emergency',
      'Tuition fee protection',
      'Accommodation cover',
      'Personal liability',
      'Parent visit coverage',
      'Study interruption',
      'Repatriation',
      '24/7 student support'
    ],
    benefits: [
      'Protect your education investment',
      'Coverage for parents visiting',
      'Extended trip duration',
      'Student-specific support'
    ],
    price: 'From GHS 200/year',
    priceBreakdown: {
      'GHS 200': 'Africa',
      'GHS 350': 'UK/Europe',
      'GHS 500': 'USA/Canada',
    },
    eligibility: [
      'Ghanaian student',
      'Accepted at foreign institution',
      'Valid student visa',
      'Age under 35'
    ],
    documents: [
      'Passport',
      'Student visa',
      'Acceptance letter',
      'Tuition receipt'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'What if I have to return home?',
        a: 'Tuition refund cover pays if you must return due to illness or family emergency.'
      },
      {
        q: 'Can my parents visit?',
        a: 'Yes, we cover one parent visit trip per year.'
      }
    ],
    href: '/insurance/travel/student'
  },
  {
    id: 'business',
    category: 'travel',
    name: 'Business Travel Insurance',
    icon: '💼✈️',
    shortDesc: 'Coverage tailored for business travelers. Laptop cover, meeting delays, and more.',
    longDesc: 'Specialized coverage for business travelers. Includes equipment cover, meeting delay, and business document protection.',
    features: [
      'Medical emergency',
      'Laptop and equipment cover',
      'Meeting and conference delay',
      'Business documents cover',
      'Extended stay options',
      'Trip cancellation',
      'Personal liability',
      '24/7 business assistance'
    ],
    benefits: [
      'Protect work equipment',
      'Coverage for business meetings',
      'Minimize disruption',
      'Keep working while traveling'
    ],
    price: 'From GHS 120/trip',
    priceBreakdown: {
      'GHS 120': 'Africa',
      'GHS 200': 'International',
      'GHS 300': 'Worldwide',
    },
    eligibility: [
      'Business traveler',
      'Ghanaian resident',
      'Valid passport',
      'Company letter (optional)'
    ],
    documents: [
      'Passport',
      'Travel itinerary',
      'Business purpose',
      'Equipment value'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'Is my laptop covered if stolen?',
        a: 'Yes, business equipment is covered up to GHS 10,000.'
      },
      {
        q: 'What if my meeting is cancelled?',
        a: 'We cover additional accommodation and rebooking costs.'
      }
    ],
    href: '/insurance/travel/business'
  },
  {
    id: 'family',
    category: 'travel',
    name: 'Family Travel Insurance',
    icon: '👪',
    shortDesc: 'Coverage for the whole family. Parents and children on one policy.',
    longDesc: 'One policy covers both parents and children under 21. Perfect for family vacations with discounted rates for kids.',
    features: [
      'Covers both parents',
      'Children under 21 included',
      'Family discount (kids cheaper)',
      'Medical emergency all',
      'Trip cancellation',
      'Lost baggage',
      'Activity cover (kids)',
      '24/7 family assistance'
    ],
    benefits: [
      'One policy for everyone',
      'Kids covered at lower rates',
      'Family-specific support',
      'No need for individual policies'
    ],
    price: 'From GHS 200/trip',
    priceBreakdown: {
      'GHS 200': 'Africa - 2 adults + 2 kids',
      'GHS 350': 'International - 2 adults + 2 kids',
      '+GHS 50': 'Per additional child',
    },
    eligibility: [
      'Family traveling together',
      'Children under 21',
      'Ghanaian residents',
      'Valid passports'
    ],
    documents: [
      'Passports all',
      'Travel itinerary',
      'Children\'s birth certificates',
      'Flight bookings'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'What age counts as a child?',
        a: 'Children under 21 at time of travel.'
      },
      {
        q: 'Can we add grandparents?',
        a: 'Yes, they can be added to family policy or get individual coverage.'
      }
    ],
    href: '/insurance/travel/family'
  },
  {
    id: 'senior',
    category: 'travel',
    name: 'Senior Travel Insurance',
    icon: '👴',
    shortDesc: 'Coverage for travelers 65+. Medical focus with pre-existing conditions considered.',
    longDesc: 'Specialized coverage for senior travelers. Focus on medical needs with higher limits and coverage for pre-existing conditions.',
    features: [
      'Medical focus with higher limits',
      'Pre-existing condition cover',
      'Emergency evacuation',
      'Trip cancellation',
      '24/7 medical assistance',
      'Prescription coverage',
      'Mobility aid cover',
      'Companion cover'
    ],
    benefits: [
      'Peace of mind for seniors',
      'Coverage for existing conditions',
      'Higher medical limits',
      'Medical escort if needed'
    ],
    price: 'From GHS 150/trip',
    priceBreakdown: {
      'GHS 150': 'Africa - ages 65-70',
      'GHS 250': 'International - ages 65-70',
      'Higher': 'Ages 70+ (custom quote)',
    },
    eligibility: [
      'Age 65+',
      'Ghanaian resident',
      'Stable pre-existing conditions',
      'Valid passport'
    ],
    documents: [
      'Passport',
      'Medical history',
      'Medication list',
      'Doctor\'s clearance (if needed)'
    ],
    color: '#A8E6CF',
    gradient: 'linear-gradient(135deg, #A8E6CF, #7CCF9E)',
    faq: [
      {
        q: 'What pre-existing conditions are covered?',
        a: 'Stable conditions like diabetes, hypertension are covered after assessment.'
      },
      {
        q: 'Is there an age limit?',
        a: 'We cover up to age 85. Ages 70+ require medical screening.'
      }
    ],
    href: '/insurance/travel/senior'
  },

  // ===== BUSINESS INSURANCE =====
  {
    id: 'sme',
    category: 'business',
    name: 'SME Business Package',
    icon: '💼',
    shortDesc: 'Complete coverage for small and medium enterprises. All-in-one protection.',
    longDesc: 'The complete protection package for your business. Includes property, liability, employee accident, and business interruption in one affordable bundle.',
    features: [
      'Property and contents cover',
      'Public liability',
      'Employee accident cover',
      'Business interruption',
      'Theft and burglary',
      'Fire and flood',
      'Money cover',
      'Glass breakage'
    ],
    benefits: [
      'All-in-one protection',
      'Affordable for small business',
      'Quick claims process',
      'Keep trading after loss'
    ],
    price: 'From GHS 250/month',
    priceBreakdown: {
      'GHS 250': 'Turnover under GHS 500k',
      'GHS 400': 'Turnover GHS 500k-1M',
      'GHS 600': 'Turnover over GHS 1M',
    },
    eligibility: [
      'Registered SME',
      'Business in Ghana',
      'Valid business license',
      'Employee details'
    ],
    documents: [
      'Business registration',
      'Tax clearance',
      'Business license',
      'Employee list'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'What counts as an SME?',
        a: 'Businesses with fewer than 50 employees and annual turnover under GHS 5M.'
      },
      {
        q: 'Can I customize the package?',
        a: 'Yes, you can add or remove covers to fit your needs.'
      }
    ],
    href: '/insurance/business/sme'
  },
  {
    id: 'professional-indemnity',
    category: 'business',
    name: 'Professional Indemnity',
    icon: '📋',
    shortDesc: 'Protection for professionals. Consultants, architects, doctors, and more.',
    longDesc: 'Essential cover for professionals who give advice or provide services. Protects against claims of negligence, errors, or omissions.',
    features: [
      'Negligence claims cover',
      'Legal defense costs',
      'Regulatory investigations',
      'Worldwide cover options',
      'Breach of confidentiality',
      'Libel and slander',
      'Loss of documents',
      'Retroactive cover'
    ],
    benefits: [
      'Protect your professional reputation',
      'Cover legal costs',
      'Required by many contracts',
      'Peace of mind'
    ],
    price: 'From GHS 300/month',
    priceBreakdown: {
      'GHS 300': 'GHS 500k limit',
      'GHS 500': 'GHS 1M limit',
      'GHS 800': 'GHS 2M limit',
    },
    eligibility: [
      'Qualified professional',
      'Registered with professional body',
      'Practicing in Ghana',
      'Valid license'
    ],
    documents: [
      'Professional certification',
      'Business registration',
      'Client contracts (sample)',
      'Claims history'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'Who needs this?',
        a: 'Accountants, architects, engineers, consultants, doctors, lawyers, and more.'
      },
      {
        q: 'Does it cover past work?',
        a: 'Retroactive cover can be arranged for work done before the policy started.'
      }
    ],
    href: '/insurance/business/professional-indemnity'
  },
  {
    id: 'cyber',
    category: 'business',
    name: 'Cyber Insurance',
    icon: '💻',
    shortDesc: 'Protect your business from digital threats. Data breaches, ransomware, recovery.',
    longDesc: 'Essential coverage for the digital age. Protects against data breaches, ransomware attacks, and helps with recovery costs.',
    features: [
      'Data breach response',
      'Ransomware coverage',
      'Business interruption from cyber',
      'Forensic investigation',
      'Legal and PR support',
      'Notification costs',
      'Cyber extortion',
      'Data restoration'
    ],
    benefits: [
      'Recover from cyber attacks',
      'Cover ransomware payments',
      'Expert response team',
      'Protect customer data'
    ],
    price: 'From GHS 180/month',
    priceBreakdown: {
      'GHS 180': 'Basic - up to 10 employees',
      'GHS 350': 'Standard - 10-50 employees',
      'GHS 600': 'Premium - 50+ employees',
    },
    eligibility: [
      'Business with digital presence',
      'Website or online operations',
      'Customer data stored',
      'Basic security measures'
    ],
    documents: [
      'Business registration',
      'IT security assessment',
      'Data handling policy',
      'Previous incidents'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'Does it cover ransomware payments?',
        a: 'Yes, subject to policy limits and following our response protocol.'
      },
      {
        q: 'What if my website goes down?',
        a: 'Business interruption covers lost income during downtime.'
      }
    ],
    href: '/insurance/business/cyber'
  },
  {
    id: 'public-liability',
    category: 'business',
    name: 'Public Liability Insurance',
    icon: '🏢',
    shortDesc: 'Coverage for claims from third parties. Injury or damage caused by your business.',
    longDesc: 'Protects your business if a customer or member of the public is injured or their property is damaged because of your business activities.',
    features: [
      'Third-party injury cover',
      'Third-party property damage',
      'Legal defense costs',
      'Product liability',
      'Premises liability',
      'Events and operations',
      'Contractual liability',
      'Medical expenses'
    ],
    benefits: [
      'Essential for customer-facing business',
      'Cover legal costs',
      'Required by many venues',
      'Peace of mind'
    ],
    price: 'From GHS 120/month',
    priceBreakdown: {
      'GHS 120': 'GHS 1M limit',
      'GHS 200': 'GHS 2M limit',
      'GHS 300': 'GHS 5M limit',
    },
    eligibility: [
      'Registered business',
      'Business premises',
      'Customer interaction',
      'Valid license'
    ],
    documents: [
      'Business registration',
      'Premises details',
      'Products sold (if product liability)',
      'Safety policies'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'Do I need this if I work from home?',
        a: 'Yes, if clients visit your home or you visit them.'
      },
      {
        q: 'Does it cover my products?',
        a: 'Product liability is included - covers injury from products you sell.'
      }
    ],
    href: '/insurance/business/public-liability'
  },
  {
    id: 'workers-compensation',
    category: 'business',
    name: 'Workers Compensation',
    icon: '👷',
    shortDesc: 'Coverage for employee injuries at work. Medical expenses and lost wages.',
    longDesc: 'Required by law for most businesses. Covers medical expenses and lost wages if an employee is injured at work.',
    features: [
      'Medical expenses cover',
      'Lost wages replacement',
      'Rehabilitation costs',
      'Death benefit',
      'Permanent disability',
      'Legal defense',
      '24-hour cover options',
      'Return-to-work program'
    ],
    benefits: [
      'Legal compliance',
      'Protect your employees',
      'Cover medical costs',
      'Avoid lawsuits'
    ],
    price: 'From GHS 80/month',
    priceBreakdown: {
      'GHS 80': '1-5 employees (low risk)',
      'GHS 150': '1-5 employees (high risk)',
      'Custom': 'Larger teams',
    },
    eligibility: [
      'Registered business',
      'Employees in Ghana',
      'Payroll records',
      'Valid business license'
    ],
    documents: [
      'Business registration',
      'Employee list with roles',
      'Payroll records',
      'Safety policies'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'Is this required by law?',
        a: 'Yes, under Ghana\'s Labour Act, employers must provide workers compensation.'
      },
      {
        q: 'Does it cover commuting?',
        a: 'Standard policy covers at workplace only. 24-hour cover can be added.'
      }
    ],
    href: '/insurance/business/workers-compensation'
  },
  {
    id: 'trade-credit',
    category: 'business',
    name: 'Trade Credit Insurance',
    icon: '📊',
    shortDesc: 'Protect your receivables. Cover against customer non-payment and bad debt.',
    longDesc: 'Protect your business from customer non-payment. If a customer doesn\'t pay, we cover the debt. Also includes credit monitoring.',
    features: [
      'Bad debt protection',
      'Credit monitoring of customers',
      'International trade cover',
      'Debt collection support',
      'Political risk cover',
      'Pre-delivery cover',
      'Customer insolvency',
      'Protracted default'
    ],
    benefits: [
      'Sell with confidence',
      'Know customer creditworthiness',
      'Get paid even if customer doesn\'t',
      'Finance receivables easily'
    ],
    price: 'Custom quote based on turnover',
    priceBreakdown: {},
    eligibility: [
      'Business selling on credit',
      'Established trading history',
      'Customer base diversified',
      'Valid business registration'
    ],
    documents: [
      'Business registration',
      'Accounts receivables aging',
      'Customer list',
      'Trading history'
    ],
    color: '#FF9F1C',
    gradient: 'linear-gradient(135deg, #FF9F1C, #E58900)',
    faq: [
      {
        q: 'What percentage of debt is covered?',
        a: 'Typically 75-90% of the invoice value, depending on the policy.'
      },
      {
        q: 'Does it cover international customers?',
        a: 'Yes, we cover both domestic and international trade.'
      }
    ],
    href: '/insurance/business/trade-credit'
  }
];

// Helper function to get product by category and slug
const getProductBySlug = (category: string, slug: string) => {
  return insuranceProducts.find(
    product => product.category === category && product.id === slug
  );
};

// Category display names
const categoryNames: Record<string, string> = {
  life: 'Life Insurance',
  health: 'Health Insurance',
  vehicle: 'Vehicle Insurance',
  property: 'Property Insurance',
  travel: 'Travel Insurance',
  business: 'Business Insurance'
};

// ============= MAIN PAGE COMPONENT =============
export default function InsuranceProductPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);
  const [selectedCoverage, setSelectedCoverage] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Get category and slug from URL
  const category = params?.category as string;
  const slug = params?.slug as string;
  
  // Find the product
  const product = getProductBySlug(category, slug);

  // If product not found, show 404
  if (!product) {
    notFound();
  }

  // Get category display name
  const categoryDisplay = categoryNames[category] || 'Insurance';

  // Similar products (same category, exclude current)
  const similarProducts = insuranceProducts
    .filter(p => p.category === category && p.id !== slug)
    .slice(0, 3);

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
    <main className={styles.productPage}>
      {/* ============= BREADCRUMBS ============= */}
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/launch/home" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/launch/insurance" className={styles.breadcrumbLink}>Insurance</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href={`/launch/insurance?category=${category}`} className={styles.breadcrumbLink}>
            {categoryDisplay}
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </div>
      </div>

      {/* ============= PRODUCT HERO ============= */}
      <section 
        className={styles.productHero}
        ref={el => { sectionRefs.current[0] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.productCategory} style={{ color: product.color }}>
                {categoryDisplay}
              </div>
              <h1 className={styles.productTitle}>
                {product.name}
                {product.icon && <span className={styles.titleIcon}>{product.icon}</span>}
              </h1>
              <p className={styles.productShortDesc}>{product.shortDesc}</p>
              
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span className={styles.statValue}>{product.price}</span>
                  <span className={styles.statLabel}>Starting price</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statValue}>24h</span>
                  <span className={styles.statLabel}>Claims processing</span>
                </div>
                <div className={styles.heroStat}>
                  <span className={styles.statValue}>✓</span>
                  <span className={styles.statLabel}>No hidden fees</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                <button className={styles.primaryBtn} style={{ background: product.color }}>
                  Get Quote
                  <span className={styles.btnArrow}>→</span>
                </button>
                <button className={styles.secondaryBtn}>
                  <span>📞</span> Call Advisor
                </button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.productIconLarge} style={{ background: product.color + '15' }}>
                <span style={{ color: product.color }}>{product.icon}</span>
              </div>
              <div className={styles.heroShape} style={{ background: product.gradient }}></div>
              <div className={styles.heroShape2} style={{ background: product.color + '30' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= TABS NAVIGATION ============= */}
      <div className={styles.tabsNav}>
        <div className={styles.container}>
          <div className={styles.tabsList}>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'features' ? styles.active : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'pricing' ? styles.active : ''}`}
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'eligibility' ? styles.active : ''}`}
              onClick={() => setActiveTab('eligibility')}
            >
              Eligibility
            </button>
            <button 
              className={`${styles.tabBtn} ${activeTab === 'faq' ? styles.active : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>

      {/* ============= TAB CONTENT ============= */}
      <div className={styles.tabContent}>
        <div className={styles.container}>
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className={styles.overviewTab}>
              <div className={styles.overviewGrid}>
                <div className={styles.overviewMain}>
                  <h2>About This Coverage</h2>
                  <p className={styles.longDesc}>{product.longDesc}</p>
                  
                  <h3>Key Benefits</h3>
                  <ul className={styles.benefitsList}>
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>
                        <span className={styles.benefitIcon}>✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.overviewCta}>
                    <button className={styles.overviewBtn} style={{ background: product.color }}>
                      Get Protected Now
                    </button>
                  </div>
                </div>

                <div className={styles.overviewSidebar}>
                  <div className={styles.sidebarCard}>
                    <h4>Why Choose This Plan?</h4>
                    <ul className={styles.sidebarList}>
                      <li>⚡ 24-hour claims processing</li>
                      <li>📱 100% digital management</li>
                      <li>💰 Flexible payment options</li>
                      <li>🇬🇭 Built for Ghana</li>
                      <li>🛡️ NIC regulated</li>
                    </ul>
                  </div>

                  <div className={styles.sidebarCard}>
                    <h4>Need Help Deciding?</h4>
                    <p>Talk to our insurance advisors for personalized guidance.</p>
                    <button className={styles.sidebarBtn}>
                      <span>💬</span> Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FEATURES TAB */}
          {activeTab === 'features' && (
            <div className={styles.featuresTab}>
              <h2>What's Covered</h2>
              <div className={styles.featuresGrid}>
                {product.features.map((feature, index) => (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIcon} style={{ background: product.color + '15' }}>
                      <span style={{ color: product.color }}>✓</span>
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <div className={styles.featuresNote}>
                <p>* Additional coverage options available. Terms and conditions apply.</p>
              </div>
            </div>
          )}

          {/* PRICING TAB */}
          {activeTab === 'pricing' && (
            <div className={styles.pricingTab}>
              <h2>Choose Your Coverage Level</h2>
              <p className={styles.pricingSubtitle}>Select the plan that fits your needs and budget</p>

              <div className={styles.pricingGrid}>
                {Object.entries(product.priceBreakdown).map(([price, description], index) => (
                  <div 
                    key={index} 
                    className={`${styles.pricingCard} ${selectedCoverage === price ? styles.selected : ''}`}
                    onClick={() => setSelectedCoverage(price)}
                  >
                    <div className={styles.pricingHeader} style={{ background: product.color + '10' }}>
                      <span className={styles.pricingPrice}>{price}</span>
                      <span className={styles.pricingPeriod}>/month</span>
                    </div>
                    <div className={styles.pricingBody}>
                      <p className={styles.pricingDesc}>{description}</p>
                      <div className={styles.pricingFeatures}>
                        <div className={styles.pricingFeature}>
                          <span>✓</span> Full coverage as described
                        </div>
                        <div className={styles.pricingFeature}>
                          <span>✓</span> 24/7 claims support
                        </div>
                        <div className={styles.pricingFeature}>
                          <span>✓</span> Digital management
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {Object.keys(product.priceBreakdown).length === 0 && (
                <div className={styles.customQuoteBox}>
                  <h3>Custom Quote Required</h3>
                  <p>This policy is customized for your specific needs. Contact us for a personalized quote.</p>
                  <button className={styles.customQuoteBtn} style={{ background: product.color }}>
                    Request Custom Quote
                  </button>
                </div>
              )}

              {selectedCoverage && (
                <div className={styles.selectedActions}>
                  <div className={styles.quantitySelector}>
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                  <button className={styles.addToCartBtn} style={{ background: product.color }}>
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ELIGIBILITY TAB */}
          {activeTab === 'eligibility' && (
            <div className={styles.eligibilityTab}>
              <div className={styles.eligibilityGrid}>
                <div>
                  <h2>Who Can Apply?</h2>
                  <ul className={styles.eligibilityList}>
                    {product.eligibility.map((item, index) => (
                      <li key={index}>
                        <span className={styles.eligibilityCheck}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2>Required Documents</h2>
                  <ul className={styles.documentsList}>
                    {product.documents.map((doc, index) => (
                      <li key={index}>
                        <span className={styles.docIcon}>📄</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.eligibilityNote}>
                <p>Need help with documentation? Our team can guide you through the process.</p>
                <button className={styles.eligibilityBtn}>Contact Support</button>
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === 'faq' && (
            <div className={styles.faqTab}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {product.faq.map((item, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>

              <div className={styles.faqFooter}>
                <p>Still have questions? We're here to help.</p>
                <button className={styles.faqBtn}>Ask a Question</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============= SIMILAR PRODUCTS ============= */}
      {similarProducts.length > 0 && (
        <section 
          className={styles.similarSection}
          ref={el => { sectionRefs.current[1] = el; }}
        >
          <div className={styles.container}>
            <h2 className={styles.similarTitle}>You Might Also Like</h2>
            <div className={styles.similarGrid}>
              {similarProducts.map((similar, index) => (
                <Link 
                  key={similar.id}
                  href={similar.href}
                  className={styles.similarCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.similarIcon} style={{ background: similar.color + '15' }}>
                    <span style={{ color: similar.color }}>{similar.icon}</span>
                  </div>
                  <h3>{similar.name}</h3>
                  <p>{similar.shortDesc.substring(0, 60)}...</p>
                  <span className={styles.similarLink} style={{ color: similar.color }}>
                    View Details →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= CTA SECTION ============= */}
      <section 
        className={styles.ctaSection}
        ref={el => { sectionRefs.current[2] = el; }}
      >
        <div className={styles.container}>
          <div className={styles.ctaCard} style={{ background: product.gradient }}>
            <h2 className={styles.ctaTitle}>Ready to Get Protected?</h2>
            <p className={styles.ctaText}>
              Join thousands of Ghanaians who trust Nyansafo for transparent, reliable insurance.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                Get Your Free Quote
                <span className={styles.ctaArrow}>→</span>
              </button>
              <button className={styles.ctaSecondary}>
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}