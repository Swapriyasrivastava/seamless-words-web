
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Do I need to know about how to code?",
      answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend."
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, you can use Lexend for commercial projects. Our business plans are designed specifically for commercial use cases."
    },
    {
      question: "Can I use it for multiple projects?",
      answer: "Absolutely! Our plans support multiple projects and integrations across different workflows."
    },
    {
      question: "Can I use this to create and sell a product?",
      answer: "Yes, you can create and sell products using our platform. We provide all the tools you need for successful product development."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all our paid plans. If you're not satisfied, we'll provide a full refund."
    }
  ];

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently asked<br />
            <span className="text-green-400">questions!</span>
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-teal-700/20 border-teal-600/30 backdrop-blur-sm rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-teal-700/30 transition-colors"
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
