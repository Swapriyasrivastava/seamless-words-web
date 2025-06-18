
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingIcons from "@/components/FloatingIcons";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["existing tools", "ai automation", "business app"];
  
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;
    
    const timeout = setTimeout(() => {
      if (!shouldDelete) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, shouldDelete ? 50 : 100);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-20">
      <FloatingIcons />
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
          Get started today!
        </Button>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Seamless integrations<br />
          with your <span className="text-green-400">{displayText}</span>
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          See how we help your team solve today's biggest challenges.
        </p>
        
        <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-8 py-4 rounded-full text-lg font-semibold mb-8">
          Start your free trial
        </Button>
        
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span className="text-gray-300">Super</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-green-400 text-lg">★</span>
            ))}
          </div>
          <span className="text-gray-300">5,200+ reviews on</span>
          <span className="text-green-400 font-semibold">★ Trustpilot</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
