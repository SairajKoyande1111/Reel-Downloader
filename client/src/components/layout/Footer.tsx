import { DownloadCloud } from "lucide-react";
import { Link } from "wouter";
import instagramIcon from "@assets/instagram_(1)_1772634012258.png";
import facebookIcon from "@assets/facebook_(1)_1772634020519.png";
import twitterIcon from "@assets/twitter_1772634025574.png";

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
              <span className="font-display font-bold text-lg">FastVideoSaves</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The fastest, easiest way to download Instagram Reels, Photos, and IGTV videos in high quality. No login required.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/reels" className="hover:text-primary transition-colors">Reels Downloader</Link></li>
              <li><Link href="/photos" className="hover:text-primary transition-colors">Photo Downloader</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Story Downloader</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How to use</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/tos" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FastVideoSaves. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Professional Instagram Media Downloader. Not affiliated with Instagram.</p>
        </div>
      </div>
    </footer>
  );
}
