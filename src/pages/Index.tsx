
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import FeedbackSection from "@/components/FeedbackSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <IntegrationsSection />
      <FeaturesSection />
      <SolutionsSection />
      <PricingSection />
      <FeedbackSection />
      <FAQSection />
      <Footer />
      <DarkModeToggle />
      <ScrollToTop />
    </div>
  );
};

export default Index;
