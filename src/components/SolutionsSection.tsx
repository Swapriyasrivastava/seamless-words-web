
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: "⚡",
      title: "Fast and Reliable",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "🔍",
      title: "Discover Data Everywhere",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "🎯",
      title: "Enrich Data with Context",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "🔒",
      title: "Privacy Compliance",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: "🔗",
      title: "Third-Party Management",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
          Solutions
        </Button>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          End-to-End seamless data<br />
          management solutions
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Offers a unified platform that fosters innovation while providing end-to-end data management.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm p-6 text-left hover-scale">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">{solution.icon}</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
