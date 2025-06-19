
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, Eye, RefreshCw } from "lucide-react";

const iconUrls = [
  "https://lexend-nextjs.vercel.app/assets/images/apps/stipe.svg",
  "https://lexend-nextjs.vercel.app/assets/images/apps/zapier.svg",
  "https://lexend-nextjs.vercel.app/assets/images/apps/mailchimp.svg",
  "https://lexend-nextjs.vercel.app/assets/images/apps/bitbucket.svg",
  "https://lexend-nextjs.vercel.app/assets/images/apps/asana.svg",
  "https://lexend-nextjs.vercel.app/assets/images/apps/bitbucket.svg",
];

const FloatingIcons = () => {
  // All icons are now outside the circular periphery
  const positions = [
    { top: "5%", left: "10%" },
    { top: "10%", left: "85%" },
    { top: "90%", left: "15%" },
    { top: "85%", left: "80%" },
    { top: "0%", left: "50%" },
    { top: "100%", left: "60%" },
  ];

  return (
    <>
      {iconUrls.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`icon-${i}`}
          className="w-10 h-10 absolute animate-pulse"
          style={{ ...positions[i], zIndex: 2 }}
        />
      ))}
    </>
  );
};

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ["existing tools", "ai automation"];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const shouldDelete = isDeleting;

    const timeout = setTimeout(() => {
      if (!shouldDelete) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, shouldDelete ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  const featureBoxes = [
    {
      icon: <ChevronRight className="w-6 h-6" />,
      title: "Enrich Data with Context & Risk Management",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Intuitive dashboard for at-a-glance insights",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Automated data analysis and reporting",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Scalable plans to fit any business size",
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-20 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #277f95, #1c6474, #124a55, #093238, #021b1e)",
      }}
    >
      {/* SVG Circles */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <svg width="1600" height="1600" viewBox="0 0 1600 1600">
          {[400, 600, 750].map((r, i) => (
            <circle
              key={i}
              cx="800"
              cy="800"
              r={r}
              fill="none"
              stroke="rgba(137, 255, 174, 0.3)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Floating Icons */}
      <FloatingIcons />

      {/* Main Content */}
      <div className="text-center max-w-6xl mx-auto relative z-10">
        <Button
          className="text-sm font-medium px-6 py-2 rounded-full mb-8"
          style={{
            backgroundColor: "#D9FFB2",
            color: "#021B1E",
            boxShadow: "0px 0px 20px rgba(137, 255, 174, 0.3)",
          }}
        >
          Get started today!
        </Button>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-[#F6F6F6]">
          Seamless integrations
          <br />
          with your <span style={{ color: "#D9FFB2" }}>{displayText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        <p className="text-xl text-[#A5B1B9] mb-12 max-w-2xl mx-auto">
          See how we help your team solve today's biggest challenges.
        </p>

        <Button
          className="text-lg font-semibold px-8 py-4 rounded-full mb-10 shadow-md"
          style={{
            backgroundColor: "#D9FFB2",
            color: "#021B1E",
            boxShadow: "0px 0px 20px rgba(137, 255, 174, 0.3)",
          }}
        >
          Start your free trial
        </Button>

        {/* Trustpilot Stars */}
        <div className="flex items-center justify-center space-x-2 text-sm mb-12">
          <span className="text-[#A5B1B9]">Super</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className="bg-[#00C275] text-white w-6 h-6 flex items-center justify-center rounded"
              >
                ★
              </div>
            ))}
          </div>
          <span className="text-[#A5B1B9]">5,200+ reviews on</span>
          <span className="text-[#00C275] font-semibold">★ Trustpilot</span>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {featureBoxes.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-[#1a4a55] hover:border-[#2a5a65] transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: "rgba(18, 74, 85, 0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                style={{ backgroundColor: "#D9FFB2" }}
              >
                <div style={{ color: "#021B1E" }}>{feature.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-[#F6F6F6] text-left leading-tight">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Screenshot Preview */}
        <div className="w-full flex items-center justify-center">
          <img
            src="/Screenshot%202025-06-19%20112500.png"
            alt="Attached Showcase"
            className="rounded-2xl shadow-lg border border-[#89FFAE]"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
