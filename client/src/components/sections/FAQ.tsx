import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is it free to download Reels?",
    answer: "Yes! Our service is completely free to use. You can download as many public Instagram Reels as you want without any hidden charges or subscriptions."
  },
  {
    question: "Do I need to install an app or extension?",
    answer: "No installation is required. Our tool works entirely in your web browser, making it compatible with PC, Mac, iPhone, and Android devices."
  },
  {
    question: "Can I download private Instagram videos?",
    answer: "Currently, our tool can only download content from public Instagram accounts due to privacy restrictions set by Instagram."
  },
  {
    question: "Will the downloaded video have a watermark?",
    answer: "No, we extract the original high-quality MP4 file directly from the source, so there are no added watermarks or quality degradation."
  },
  {
    question: "Where are the videos saved on my phone?",
    answer: "Usually, videos are saved to your device's default 'Downloads' folder. On iOS, you might need to tap 'Save Video' after downloading to move it to your Camera Roll."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our downloader tool.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-purple-200 bg-purple-50/30 shadow-md" : "border-border bg-white hover:border-purple-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-2xl"
                >
                  <span className="font-semibold text-lg text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-purple-500" : ""
                    }`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
