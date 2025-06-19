
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      title: "Advanced Business Intelligence",
      description: "Transform your data into actionable insights with powerful analytics dashboards"
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Smart File Processing",
      description: "Intelligent document processing with automated categorization and analysis"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Real-time Data Monitoring",
      description: "Monitor your business metrics in real-time with customizable alerts and notifications"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Team Collaboration Hub",
      description: "Enhanced team productivity with integrated collaboration tools and shared workspaces"
    },
    {
      image: "/lovable-uploads/13f9f00b-fb56-4611-a6dc-a7f4ae67f797.png",
      title: "Smart File Upload System",
      description: "Drag and drop file management with real-time progress tracking and format support"
    },
    {
      image: "/lovable-uploads/040e3b8a-0c01-4a36-8db5-9d7767a7e88c.png",
      title: "Subscription Management Dashboard",
      description: "Manage team members and subscriptions with comprehensive user permission controls"
    },
    {
      image: "/lovable-uploads/24fd1ec4-7054-419e-a910-0c828699fbca.png",
      title: "Business Growth Analytics",
      description: "Track your business growth with detailed scalable plan analytics and insights"
    },
    {
      image: "/lovable-uploads/8238a560-993b-4dd9-b3d1-86040fe7b877.png",
      title: "Project Reporting Suite",
      description: "Generate comprehensive project reports with multi-series data visualization"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Main Features</h2>
          <h3 className="text-xl md:text-2xl text-white mb-2">Automate your workflow with</h3>
          <h3 className="text-xl md:text-2xl text-white mb-6">our 1000+ apps integrations</h3>
          <p className="text-gray-300 text-base md:text-lg">Connect your tools, connect your teams with Lexend.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-teal-700/30 border-teal-600/20 backdrop-blur-sm hover-scale overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <div className="p-6 md:p-8 pb-6">
                  <div className="bg-white rounded-xl p-4 md:p-6 mb-4 md:mb-6 shadow-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-32 md:h-48 object-contain"
                    />
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-lg md:text-xl">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm md:text-base">{feature.description}</p>
                  <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-4 md:px-6 py-2 rounded-full text-sm font-medium">
                    Learn more →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
