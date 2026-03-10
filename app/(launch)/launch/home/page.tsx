import DrawingIconsHero from "@/app/components/launch_components/DrawingIconsHero";
import HeroSection from "@/app/components/launch_components/Hero";
import Footer from "@/app/components/launch_components/Footer";
import AboutPage from "../about/page";
import ServicesPage from "../services/page";
import PartnersPage from "../partners/page";
import ContactPage from "../contact/page";


export default function LaunchScreen() {
  const heroes = [
    {
      title: "Protecting Your Future, Powering Your Dreams",
      subtitle: "Welcome to Nyansafo",
      description:
        "The future is for those who plan for it. Here insurance meets innovation. Smart protection for your life and financial growth, all in one place.",
      imageSrc:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      imageAlt: "Professional team discussing insurance",
      ctaText: "Explore Our Services",
      ctaLink: "/services",
    },
    {
      title: "Unplanned future yeilds unplanned expenses",
      subtitle: "WHAT IF?",
      description:
        "You are not wrong for overthinking. The future is uncertain, but your protection doesn't have to be. With Nyansafo, you can secure your tomorrow with confidence today.",
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Digital insurance dashboard",
      ctaText: "Learn More",
      ctaLink: "/technology",
    },
    {
      title: "Insurance looks expensive… until it is NEEDED.",
      subtitle: "Smart Insurance, Simplified",
      description:
        "Nyansafo makes insurance simple, transparent, and built around you. No confusion, no hidden surprises — just protection you can trust.",
      imageSrc:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Digital insurance dashboard",
      ctaText: "Learn More",
      ctaLink: "/technology",
    },
    {
      title: "Grow Your Wealth Safely",
      subtitle: "Fintech Excellence",
      description:
        "Investment products designed to protect and multiply your assets with peace of mind.",
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      imageAlt: "Financial growth chart",
      ctaText: "Start Investing",
      ctaLink: "/invest",
    },
  ];

  return (
    <div className="">
      <main>
        <DrawingIconsHero/>
        {heroes.map((hero, index) => (
          <HeroSection key={index} {...hero} index={index} />
        ))}
        <AboutPage/>
        <ServicesPage/>
        <PartnersPage/>
        <ContactPage/>
      </main>
    </div>
  );
}
