import { motion } from "framer-motion";
import { Link, Copy, ArrowDownToLine } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Copy className="w-8 h-8" />,
      title: "Copy the Link",
      description: "Open the Instagram app or website, find the Reel you want to download, and copy its link.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Paste URL",
      description: "Return to our website and paste the copied link into the input field at the top of this page.",
      color: "from-orange-400 to-pink-500"
    },
    {
      icon: <ArrowDownToLine className="w-8 h-8" />,
      title: "Download",
      description: "Click the download button and wait a few seconds. Your high-quality video will start downloading.",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Downloading your favorite Reels is easier than ever. Just follow these three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 glass-card p-8 rounded-3xl text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-xl font-bold text-foreground shadow-sm">
                {index + 1}
              </div>
              
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} p-[2px] mb-6 mt-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-foreground">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
