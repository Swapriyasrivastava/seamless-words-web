
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 relative z-50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">+</span>
        </div>
        <span className="text-2xl font-bold text-white">lexend</span>
      </div>
      
      <div className="flex items-center space-x-8">
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
      
      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-colors">
        Contact sales
      </Button>
    </nav>
  );
};

export default Navigation;
