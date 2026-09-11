import React from 'react';
import { TopScarcityBar } from './components/TopScarcityBar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { MethodSection } from './components/MethodSection';
import { MaterialShowcase } from './components/MaterialShowcase';
import { TriSimulator } from './components/TriSimulator';
import { SocialProofSection } from './components/SocialProofSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingOfferBox } from './components/PricingOfferBox';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { LiveSalesToasts } from './components/LiveSalesToasts';
import { MAIN_PRODUCT } from './data/landingData';
import { CHECKOUT_URLS, redirectToCheckout } from './utils/checkout';

export default function App() {
  const handleOpenCompleteCheckout = () => {
    redirectToCheckout(CHECKOUT_URLS.complete, 'Pacote Completo VIP', 27.90);
  };

  const handleOpenCheckoutPlan = (plan: 'basic' | 'complete') => {
    if (plan === 'basic') {
      redirectToCheckout(CHECKOUT_URLS.basic, 'Pacote Básico', 14.99);
    } else {
      redirectToCheckout(CHECKOUT_URLS.complete, 'Pacote Completo VIP', 27.90);
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Top Urgency Header */}
      <TopScarcityBar spotsRemaining={MAIN_PRODUCT.spotsRemaining} />

      <main className="flex-grow">
        {/* 1. Minimalist High-Impact Hero */}
        <HeroSection
          onOpenCheckout={handleOpenCompleteCheckout}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Direct Contrast: O Erro Desesperado vs. A Rota 80/20 */}
        <PainPointsSection onScrollToOffer={() => handleScrollToSection('oferta')} />

        {/* 3. The 3 Core Pillars (TRI, Redação 900+, Matriz 80/20) */}
        <MethodSection onScrollToOffer={() => handleScrollToSection('oferta')} />

        {/* 4. Real Sneak Peek of the Materials */}
        <MaterialShowcase onOpenCheckout={() => handleScrollToSection('oferta')} />

        {/* 5. Interactive TRI Diagnosis & Simulation */}
        <TriSimulator onOpenCheckout={() => handleScrollToSection('oferta')} />

        {/* 6. Verified Social Proof (UFMG, USP, UFRJ) */}
        <SocialProofSection onOpenCheckout={() => handleScrollToSection('oferta')} />

        {/* 7. Super Bonuses Section (Todos os 6 Bônus Inclusos) */}
        <BonusesSection onOpenCheckout={() => handleScrollToSection('oferta')} />

        {/* 8. Exclusive 2-Card Offer Box: Pacote Básico (R$ 14,99) vs Pacote Completo (R$ 27,90) */}
        <PricingOfferBox onOpenCheckoutPlan={handleOpenCheckoutPlan} />

        {/* 9. 30-Day Unconditional Guarantee */}
        <GuaranteeSection onScrollToOffer={() => handleScrollToSection('oferta')} />

        {/* 10. Quick FAQ */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Subtle Floating Bottom Bar */}
      <StickyBottomBar onOpenCheckout={() => handleScrollToSection('oferta')} />

      {/* Verified Enrollments Notification Toasts */}
      <LiveSalesToasts />
    </div>
  );
}
