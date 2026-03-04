import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Loader2, Download, AlertCircle, CheckCircle2 } from "lucide-react";
import { useDownloadReel } from "@/hooks/use-reels";

export function Hero() {
  const [url, setUrl] = useState("");
  const { mutate, isPending, data, isError, error, reset } = useDownloadReel();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    mutate(url);
  };

  const handleReset = () => {
    setUrl("");
    reset();
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-400/20 rounded-full blur-3xl -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Download Instagram Reels <br />
            <span className="text-gradient">Instantly.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            Paste any public Instagram Reel or Video URL below to download it in high quality format. Free, fast, and no registration required.
          </p>

          <div className="mt-12 max-w-2xl mx-auto relative">
            <div className="glass-card rounded-[2rem] p-3 md:p-4 relative z-10 transition-all duration-500 ring-2 ring-transparent hover:ring-purple-500/50 animate-pulse-border">
              
              {!data ? (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                      <Link2 className="h-5 w-5 text-muted-foreground/60" />
                    </div>
                    <input
                      type="url"
                      placeholder="Paste Instagram URL here..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 md:py-5 bg-white/40 backdrop-blur-md border border-white/40 focus:border-purple-400/50 focus:bg-white/80 rounded-2xl outline-none transition-all text-foreground placeholder:text-muted-foreground/50 text-lg shadow-inner ring-offset-2 focus:ring-2 focus:ring-purple-500/50"
                      required
                      data-testid="input-reel-url"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isPending || !url}
                    className="btn-glass flex items-center justify-center gap-2 px-10 py-4 md:py-5 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    data-testid="button-submit-url"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Download
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center justify-center text-center border border-white/60 shadow-inner"
                >
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-20 h-20 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6 border border-green-500/20"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-foreground mb-3">Ready to Download</h3>
                  <p className="text-muted-foreground font-light mb-8 max-w-md">Your video has been processed in the highest available quality.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <motion.a 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`/api/proxy?url=${encodeURIComponent(data.videoUrl || "")}`}
                      download="instagram-reel.mp4"
                      className="px-10 py-4 bg-gradient-primary text-white rounded-2xl font-bold shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
                      data-testid="link-save-video"
                    >
                      <Download className="w-5 h-5" />
                      Save Video
                    </motion.a>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReset}
                      className="btn-glass px-10 py-4 bg-muted/50 text-foreground rounded-2xl font-bold transition-all"
                      data-testid="button-download-another"
                    >
                      Download Another
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              <AnimatePresence>
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl flex items-start gap-3 text-left border border-red-100">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Error processing URL</p>
                        <p className="text-sm opacity-90">{error?.message || "Please make sure it's a valid public Instagram Reel link."}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Disclaimer text */}
            <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              By using this service you agree to our Terms of Service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
