
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      image: "/lovable-uploads/ac9d4ca6-52bb-4d81-af1e-e7edc3775e6d.png",
      title: "Seamless integrations with your app tools",
      description: "Connect and integrate with over 1000+ apps and tools seamlessly"
    },
    {
      image: "/lovable-uploads/b13875d9-c0ae-4bb7-a22a-1b6cd3c0c1f1.png",
      title: "Get more value from your tools",
      description: "Maximize the potential of your existing tools with our AI assistant"
    },
    {
      image: "/lovable-uploads/95da6a7f-f06c-4e46-97e1-23d80eaa3fb1.png",
      title: "Enrich Data with Risk Management",
      description: "Upload and manage files with comprehensive risk assessment"
    },
    {
      image: "/lovable-uploads/a5da3389-f63e-4bff-802e-7785b99755ed.png",
      title: "Scalable plans to fit any business size",
      description: "Flexible pricing plans that grow with your business needs"
    },
    {
      image: "/lovable-uploads/422b924a-54f1-410b-9aed-7a9f093c7dc5.png",
      title: "Automated data analysis and reporting",
      description: "Get comprehensive reports and analytics automatically generated"
    },
    {
      image: "/lovable-uploads/1f04e073-db8d-4e75-99e4-38318d5bcdc2.png",
      title: "Manage subscriptions efficiently",
      description: "Keep track of all your subscriptions and team members in one place"
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm hover-scale overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full mb-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 pt-0">
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
