
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-6 relative z-50">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/7bd09204-e7d1-4286-afc3-97b1b535f663.png" 
          alt="Logo" 
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-green-300 transition-colors">
          <span>Products</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-green-300 transition-colors">
          <span>Solutions</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <span className="cursor-pointer hover:text-green-300 transition-colors">Blog</span>
        <span className="cursor-pointer hover:text-green-300 transition-colors">Pricing</span>
        <span className="cursor-pointer hover:text-green-300 transition-colors">Integrations</span>
      </div>
      
      {/* Desktop Contact Button */}
      <Button className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
        Contact sales
      </Button>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:bg-teal-700"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-teal-900/95 backdrop-blur-sm border-t border-teal-600/20 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-300 transition-colors">
              <span>Products</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-green-300 transition-colors">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="cursor-pointer hover:text-green-300 transition-colors">Blog</span>
            <span className="cursor-pointer hover:text-green-300 transition-colors">Pricing</span>
            <span className="cursor-pointer hover:text-green-300 transition-colors">Integrations</span>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors w-full mt-4">
              Contact sales
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
