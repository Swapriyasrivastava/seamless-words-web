
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // You can implement actual theme switching logic here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 bg-green-400 hover:bg-green-500 text-teal-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeToggle;
