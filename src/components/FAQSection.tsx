
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need to know about how to code?",
      answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, you can use Lexend for commercial projects. Our licensing allows for commercial use across different project types."
    },
    {
      question: "Can I use it for multiple projects?",
      answer: "Absolutely! Our plans support multiple projects, and you can manage them all from a single dashboard."
    },
    {
      question: "Can I use this to create and sell a product?",
      answer: "Yes, you can create and sell products using our platform. We provide all the tools needed for product development and sales."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 30 days of purchase."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Frequently asked<br />
              <span className="text-green-400">questions!</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-teal-600/20 transition-colors"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-green-400 transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
