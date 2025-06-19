
const FloatingIcons = () => {
  const icons = [
    { id: 1, emoji: "🔵", position: "top-20 left-20", delay: "0s", x: 160, y: 80 },
    { id: 2, emoji: "🟠", position: "top-32 right-20", delay: "1s", x: 1120, y: 128 },
    { id: 3, emoji: "🔴", position: "top-1/2 left-16", delay: "2s", x: 64, y: 400 },
    { id: 4, emoji: "💚", position: "bottom-40 right-32", delay: "0.5s", x: 896, y: 520 },
    { id: 5, emoji: "🟡", position: "bottom-32 left-32", delay: "1.5s", x: 128, y: 568 },
    { id: 6, emoji: "🛒", position: "top-40 left-1/3", delay: "2.5s", x: 427, y: 160 },
  ];

  const connections = [
    { from: 0, to: 5, color: "#14b8a6" },
    { from: 5, to: 1, color: "#0891b2" },
    { from: 2, to: 4, color: "#06b6d4" },
    { from: 4, to: 3, color: "#0284c7" },
    { from: 0, to: 2, color: "#0369a1" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* SVG for dotted connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          {connections.map((connection, index) => (
            <pattern
              key={`pattern-${index}`}
              id={`dotted-${index}`}
              patternUnits="userSpaceOnUse"
              width="8"
              height="8"
            >
              <circle cx="4" cy="4" r="1" fill={connection.color} opacity="0.6">
                <animate
                  attributeName="opacity"
                  values="0.3;0.8;0.3"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.5}s`}
                />
              </circle>
            </pattern>
          ))}
        </defs>
        
        {connections.map((connection, index) => {
          const fromIcon = icons[connection.from];
          const toIcon = icons[connection.to];
          return (
            <line
              key={index}
              x1={fromIcon.x}
              y1={fromIcon.y}
              x2={toIcon.x}
              y2={toIcon.y}
              stroke={`url(#dotted-${index})`}
              strokeWidth="2"
              opacity="0.7"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,100;50,50;0,100"
                dur="4s"
                repeatCount="indefinite"
                begin={`${index * 0.3}s`}
              />
            </line>
          );
        })}
      </svg>

      {/* Floating icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} w-16 h-16 bg-gradient-to-br from-teal-600/40 to-teal-700/60 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-500/30 hover-scale shadow-lg`}
          style={{
            animationDelay: icon.delay,
            animation: `float 6s ease-in-out infinite`,
            zIndex: 2,
          }}
        >
          <span className="text-2xl filter drop-shadow-sm">{icon.emoji}</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-800/20 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
