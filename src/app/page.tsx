"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "home"},
        {
          name: "Safety Tips",          id: "features"},
        {
          name: "Get Help",          id: "contact"},
      ]}
      brandName="SafetyPal"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="SafetyPal: Your Home Helper"
      description="Learn how to stay safe at home with fun stories and simple steps!"
      buttons={[
        {
          text: "Start Learning",          href: "#features"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/winter-scene-childish-style_23-2151845584.jpg",          imageAlt: "Safety Fun"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-delivery-robot-working_23-2151150200.jpg",          imageAlt: "Helpful Robots"},
        {
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-fire-prevention-illustration_23-2149129654.jpg",          imageAlt: "Smoke Alarms"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/travel-agent-offering-trip-planning-clients_23-2149079441.jpg",          imageAlt: "Safety Map"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-house-with-nature-elements_23-2151848754.jpg",          imageAlt: "Playroom Safety"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fun-3d-cartoon-fireman-dog-illustration_183364-123395.jpg",          imageAlt: "Safety Heroes"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Making Home Safety Simple"
      description="We help kids understand what to do when they need help, keeping things friendly and easy."
      subdescription="Every child deserves to feel safe and confident in their own home."
      imageSrc="http://img.b2bpic.net/free-photo/happy-mothers-day-celebration_23-2151306153.jpg"
      mediaAnimation="slide-up"
      icon={Shield}
      imageAlt="parent teaching child safety cartoon"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Fire Alarm",          author: "SafetyPal Team",          description: "If you hear the loud beep-beep, walk to the door outside!",          tags: [
            "Fire"],
          imageSrc: "http://img.b2bpic.net/free-photo/classic-alarm-clock_74190-1427.jpg"},
        {
          id: "f2",          title: "Medical Help",          author: "SafetyPal Team",          description: "If you feel sick or hurt, ask a grown-up or call for help.",          tags: [
            "Medical"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-medical-masks-with-heart-horizontal_176474-1947.jpg"},
        {
          id: "f3",          title: "Water Safety",          author: "SafetyPal Team",          description: "Too much water on the floor? Call an adult right away!",          tags: [
            "Flood"],
          imageSrc: "http://img.b2bpic.net/free-photo/housing-crisis-concept-illustrated_23-2151879972.jpg"},
      ]}
      title="Safety Heroes"
      description="Learn about the important things to look out for at home."
    />
  </div>

  <div id="steps" data-section="steps">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "1",          title: "Stay Calm",          description: "Don't run, take a deep breath.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-hospital-healthcare-scene_23-2151644113.jpg"},
        {
          id: "m2",          value: "2",          title: "Find Help",          description: "Look for a parent or teacher.",          imageSrc: "http://img.b2bpic.net/free-photo/kids-holding-paper_23-2148022539.jpg"},
        {
          id: "m3",          value: "3",          title: "Call 911",          description: "Tell them exactly where you are.",          imageSrc: "http://img.b2bpic.net/free-photo/children-playing-with-blocks-building-tower_23-2152019418.jpg"},
      ]}
      title="3 Simple Safety Steps"
      description="Practice these to be a hero every day!"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "free",          name: "Explorer",          price: "$0",          buttons: [
            {
              text: "Get Started"},
          ],
          features: [
            "Fun Videos",            "Safety Coloring Books"],
        },
        {
          id: "pro",          name: "Safety Hero",          price: "$9/mo",          buttons: [
            {
              text: "Join Club"},
          ],
          features: [
            "Hero Badge",            "Interactive Quizzes",            "Parent Guide"],
        },
      ]}
      title="Join Our Safety Club"
      description="Unlock extra safety games and activities."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          handle: "@sarahmom",          testimonial: "My 5-year-old finally understands why we check smoke alarms!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cartoon-illustration-muslim-family_23-2151811882.jpg"},
        {
          id: "t2",          name: "Mike T.",          handle: "@miket",          testimonial: "Great lessons that make safety fun and not scary.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-smiling-children-lying-grass_23-2152019403.jpg"},
        {
          id: "t3",          name: "Emily R.",          handle: "@teacheremily",          testimonial: "The best resource for early safety education.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-education-day-concept_23-2148779720.jpg"},
        {
          id: "t4",          name: "David W.",          handle: "@dwalker",          testimonial: "My daughter knows exactly what to do now.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/illustration-breast-cancer-awareness-month-digital-art-style_23-2151827697.jpg"},
        {
          id: "t5",          name: "Anna P.",          handle: "@annap",          testimonial: "Simple, cute, and very effective learning tool.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/surrealist-portrait-kid_23-2151426239.jpg"},
      ]}
      showRating={true}
      title="What Parents Say"
      description="Join thousands of happy families learning together."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "At what age should kids learn 911?",          content: "Kids as young as 4-5 can learn to recognize emergencies and dial 911."},
        {
          id: "q2",          title: "Is this content scary?",          content: "No! We focus on empowering kids with knowledge, not fear."},
        {
          id: "q3",          title: "Can I practice with my child?",          content: "Yes, our parent guides give you easy ways to practice drills at home."},
      ]}
      title="Common Safety Questions"
      description="Answers to keep your family prepared."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to make your home safer?"
      buttons={[
        {
          text: "Contact Us"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#"},
            {
              label: "Safety Tips",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#"},
            {
              label: "FAQ",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="safetypal, A student-run website that teaches children how to stay safe online, avoid scams, and handle cyberbullying, and more with simple guides and resources. Made with love by Mohamed Khaled"
      bottomRightText="Safety First, Always."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}