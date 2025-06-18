
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeedbackSection = () => {
  const testimonials = [
    {
      quote: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate to help our employees.",
      author: "Mark Zellers",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      author: "Jason Barella",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      quote: "Look for service suppliers that comply with this regulation, and as we look to create our website, this builder is just outstanding!",
      author: "Sarah Edrissi",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6b5c0e2?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <Button className="bg-green-400 hover:bg-green-500 text-teal-900 px-6 py-2 rounded-full mb-8 text-sm font-medium">
          Clients feedback
        </Button>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          What our satisfied <span className="text-green-400">clients<br />
          said about us!</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm text-left">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex space-x-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-green-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
