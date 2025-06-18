
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "📊",
      title: "Enrich Data with Context & Risk Management",
      description: "Advanced data enrichment capabilities"
    },
    {
      icon: "📈",
      title: "Intuitive dashboard for at-a-glance insights",
      description: "Get instant insights from your data"
    },
    {
      icon: "⏰",
      title: "Automated data analysis and reporting",
      description: "Streamline your workflow automation"
    },
    {
      icon: "📐",
      title: "Scalable plans to fit any business size",
      description: "Grow with flexible pricing options"
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm hover-scale">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
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
