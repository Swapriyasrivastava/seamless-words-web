
import { Card, CardContent } from "@/components/ui/card";

const FeedbackSection = () => {
  const testimonials = [
    {
      quote: "We're looking for people who share our vision! most of our time used to be taken up by most of alternate to help our employees.",
      author: "Mark Zellers",
      rating: 5
    },
    {
      quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      author: "Jason Barella",
      rating: 5
    },
    {
      quote: "Look for service suppliers that comply with this regulation, and as we look to create our website, this builder is just outstanding!",
      author: "Sarah Edrissi",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-green-400 text-teal-900 px-6 py-2 rounded-full inline-block text-sm font-medium mb-8">
          Clients feedback
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          What our satisfied <span className="text-green-400">clients<br />
          said about us!</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm p-6 text-left">
              <CardContent className="p-0">
                <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-teal-900 font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex space-x-1 mb-1">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <span key={i} className="text-green-400 text-lg">★</span>
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
