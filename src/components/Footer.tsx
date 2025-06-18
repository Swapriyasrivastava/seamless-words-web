
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    "How it works": ["Features", "Key Goods", "Pro Elements", "Pricing", "Changelog"],
    "About us": ["Careers", "Press", "News", "Media kit", "Contact"],
    "Blog": ["Newsletter", "Events", "Help center", "Tutorials", "Support"]
  };

  return (
    <footer className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">+</span>
              </div>
              <span className="text-2xl font-bold text-white">lexend</span>
            </div>
            <p className="text-gray-300 mb-6">
              Design amazing digital experiences that create more happy in the world.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-sm">🌐 English</span>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-teal-700/30 pt-8 text-center">
          <p className="text-gray-400">Lexend © 2025, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
