import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Image as ImageIcon } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Our optimized servers process and fetch your video links in milliseconds.",
      icon: <Zap className="w-6 h-6 text-orange-500" />
    },
    {
      title: "No Watermarks",
      description: "Download pure, original content without any annoying logos or watermarks added.",
      icon: <ImageIcon className="w-6 h-6 text-pink-500" />
    },
    {
      title: "100% Secure",
      description: "We don't store your history. All downloads are direct and private.",
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: "High Quality (HD)",
      description: "Get the highest available resolution for every Reel you download.",
      icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why choose <br/>
              <span className="text-gradient">FastVideoSaves?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              We've built the most reliable tool to save content from Instagram directly to your device. Here's what makes us different.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-5 rounded-2xl flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-white/50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground/80 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* 3D App Representation / Graphic container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-purple-100 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
            <div className="glass-panel w-full max-w-md aspect-[4/5] rounded-[2.5rem] p-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-white">
              
              {/* Decorative inner elements representing 'Instagram' aesthetic without using exact trademarked logos heavily */}
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 shadow-2xl mb-8">
                <div className="w-full h-full border-4 border-white rounded-[1.5rem] flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-white rounded-full relative">
                    <div className="absolute top-[-8px] right-[-8px] w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="w-3/4 h-4 bg-muted rounded-full mb-4"></div>
              <div className="w-1/2 h-4 bg-muted rounded-full mb-8"></div>
              
              <div className="w-full grid grid-cols-3 gap-3">
                <div className="aspect-square bg-slate-100 rounded-xl"></div>
                <div className="aspect-square bg-slate-100 rounded-xl"></div>
                <div className="aspect-square bg-slate-100 rounded-xl"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent backdrop-blur-[2px]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
