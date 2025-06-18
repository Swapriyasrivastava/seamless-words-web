
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <SolutionsSection />
      <PricingSection />
    </div>
  );
};

export default Index;
