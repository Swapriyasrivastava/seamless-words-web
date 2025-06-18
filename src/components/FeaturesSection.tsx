
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔗",
      title: "Seamless integrations with your app tools",
      description: "Connect all your favorite tools effortlessly",
      image: "/lovable-uploads/0849c795-2189-47b4-9a0c-d92db33bd0a6.png"
    },
    {
      icon: "📊",
      title: "Get more value from your tools",
      description: "Maximize the potential of your existing software",
      image: "/lovable-uploads/cca30290-6b1a-417d-95d5-e9863d79638e.png"
    },
    {
      icon: "🛡️",
      title: "Enrich Data with Risk Management",
      description: "Advanced data enrichment with built-in security",
      image: "/lovable-uploads/b757f028-23ee-40eb-ad11-a44b771f8501.png"
    },
    {
      icon: "📈",
      title: "Scalable plans to fit any business size",
      description: "Grow with flexible pricing options",
      image: "/lovable-uploads/9fd12d85-6a07-4297-96c2-d0207f23c30a.png"
    },
    {
      icon: "⚡",
      title: "Automated data analysis and reporting",
      description: "Streamline your workflow with smart automation",
      image: "/lovable-uploads/7b0e9514-9393-41d2-bfd6-a05109e4aa7b.png"
    },
    {
      icon: "📋",
      title: "Advanced project management",
      description: "Keep track of all your projects in one place",
      image: "/lovable-uploads/bde807d2-cd7b-4c08-8af7-1c59e2f1c3a1.png"
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
            Main Features
          </Button>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful features to<br />
            <span className="text-green-400">transform your workflow</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm hover-scale overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-gradient-to-br from-teal-800 to-teal-900 relative overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg">Trusted by over most popular companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 mt-8 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 bg-green-400/20 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
