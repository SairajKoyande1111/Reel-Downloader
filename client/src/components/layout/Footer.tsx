import { DownloadCloud, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                <DownloadCloud className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg">FastVideoSave</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The fastest, easiest way to download Instagram Reels, Photos, and IGTV videos in high quality. No login required.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Reels Downloader</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Photo Downloader</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Story Downloader</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Chrome Extension</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How to use</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FastVideoSave. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Not affiliated with Instagram.</p>
        </div>
      </div>
    </footer>
  );
}
