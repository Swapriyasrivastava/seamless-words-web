
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const IntegrationsSection = () => {
  return (
    <section className="py-20 px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <Button className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
          Main Features
        </Button>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Automate your workflow with<br />
          our <span className="text-green-400">1000+</span> apps integrations
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Connect your tools, connect your teams with Lexend.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gray-800/20 border-gray-600/30 backdrop-blur-sm p-8 hover-scale">
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="text-gray-900 font-semibold mb-4">1000+ Apps & Integrations</h4>
                <h3 className="text-gray-900 text-xl font-bold mb-6">My apps</h3>
                <div className="space-y-4">
                  {[
                    { name: "Asana", color: "bg-red-500", progress: "60%" },
                    { name: "Mailchimp", color: "bg-yellow-500", progress: "80%" },
                    { name: "Zapier", color: "bg-orange-500", progress: "45%" },
                    { name: "Drive", color: "bg-blue-500", progress: "90%" }
                  ].map((app, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${app.color} rounded`}></div>
                      <div className="flex-1">
                        <div className="text-left text-gray-900 font-medium">{app.name}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-green-400 h-2 rounded-full" style={{width: app.progress}}></div>
                        </div>
                      </div>
                      <div className="w-6 h-6 border-2 border-gray-600 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Seamless integrations with your app tools</h3>
              <Button className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-2 rounded-lg">
                Learn more →
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/20 border-gray-600/30 backdrop-blur-sm p-8 hover-scale">
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="text-gray-900 font-semibold mb-4">AI Assistant</h4>
                <h3 className="text-gray-900 text-xl font-bold mb-6">Manage users</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="flex-1 bg-green-400 h-3 rounded"></div>
                      <div className="w-8 h-6 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Intuitive dashboard for at-a-glance insights</h3>
              <Button className="bg-green-400 hover:bg-green-500 text-gray-900 px-6 py-2 rounded-lg">
                Learn more →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
