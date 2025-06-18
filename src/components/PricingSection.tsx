
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
          Pricing
        </Button>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Scalable plans <span className="text-green-400">to fit any<br />
          business size</span>
        </h2>
        
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 rounded-full transition-all ${
                !isYearly 
                  ? "bg-green-400 text-teal-900" 
                  : "text-white hover:text-green-400"
              }`}
            >
              Pay monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 rounded-full transition-all ${
                isYearly 
                  ? "bg-green-400 text-teal-900" 
                  : "text-white hover:text-green-400"
              }`}
            >
              Pay yearly
            </button>
          </div>
        </div>
        
        {isYearly && (
          <div className="mb-12">
            <img 
              src="/lovable-uploads/c93cba32-6172-48eb-be11-95cbad6e63de.png" 
              alt="Yearly Pricing Plans"
              className="mx-auto max-w-4xl w-full rounded-lg"
            />
          </div>
        )}
        
        {!isYearly && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-left">
                <div className="bg-green-400 text-teal-900 px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
                  FREE
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <p className="text-gray-300 mt-2">Free now and forever</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Standout features</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Fast and Reliable</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Discover Data Everywhere</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Enrich Data with Context</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Risk Management</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 py-3 rounded-lg mb-3">
                  Get started
                </Button>
                <p className="text-center text-gray-400 text-sm">No credit card required!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm p-8">
              <CardContent className="p-0 text-left">
                <div className="bg-green-400 text-teal-900 px-4 py-2 rounded-full inline-block text-sm font-medium mb-6">
                  Go PRO
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">$24</span>
                  <p className="text-gray-300 mt-2">One month only</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">Standout features</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Fast and Reliable</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Discover Data Everywhere</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Enrich Data with Context</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Risk Management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Privacy Compliance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Third-Party Management</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-green-400 hover:bg-green-500 text-teal-900 py-3 rounded-lg mb-3 font-semibold">
                  Try for free
                </Button>
                <p className="text-center text-gray-400 text-sm">No credit card required!</p>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="mt-16">
          <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-8 py-4 rounded-full text-lg font-semibold mb-8">
            Start your free trial
          </Button>
          
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-gray-300">Super!</span>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-green-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-gray-300">5,200+ reviews on</span>
            <span className="text-green-400 font-semibold">★ Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
