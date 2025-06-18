
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    // Note: The current design is already dark, so this is just for the toggle functionality
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={toggleDarkMode}
        className="w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 border border-teal-500 shadow-lg"
        size="icon"
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-white" />
        ) : (
          <Sun className="w-5 h-5 text-white" />
        )}
      </Button>
    </div>
  );
};

export default DarkModeToggle;
