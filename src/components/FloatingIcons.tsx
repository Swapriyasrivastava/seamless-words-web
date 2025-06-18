
const FloatingIcons = () => {
  const icons = [
    { id: 1, emoji: "🔵", position: "top-20 left-20", delay: "0s" },
    { id: 2, emoji: "🟠", position: "top-32 right-20", delay: "1s" },
    { id: 3, emoji: "🔴", position: "top-1/2 left-16", delay: "2s" },
    { id: 4, emoji: "💚", position: "bottom-40 right-32", delay: "0.5s" },
    { id: 5, emoji: "🟡", position: "bottom-32 left-32", delay: "1.5s" },
    { id: 6, emoji: "🛒", position: "top-40 left-1/3", delay: "2.5s" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.position} w-16 h-16 bg-teal-700/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-600/20 hover-scale`}
          style={{
            animationDelay: icon.delay,
            animation: `float 6s ease-in-out infinite`,
          }}
        >
          <span className="text-2xl">{icon.emoji}</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
