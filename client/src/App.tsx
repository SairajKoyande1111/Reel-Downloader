import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/reels" component={Home} />
          <Route path="/photos" component={Home} />
          <Route path="/stories" component={Home} />
          <Route path="/tos">
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              <div className="prose prose-slate max-w-none">
                <p>Welcome to FastVideoSaves. By using our service, you agree to these terms.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Use of Service</h2>
                <p>FastVideoSaves is a tool for personal use only. You must not use it to infringe on copyright or intellectual property rights.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">2. Responsibility</h2>
                <p>Users are responsible for the content they download and must ensure they have permission to do so.</p>
              </div>
            </div>
          </Route>
          <Route path="/privacy">
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="prose prose-slate max-w-none">
                <p>FastVideoSaves respects your privacy.</p>
                <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
                <p>We do not store your download history or personal information. All processing happens in real-time.</p>
              </div>
            </div>
          </Route>
          <Route path="/cookies">
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
              <div className="prose prose-slate max-w-none">
                <p>We use minimal cookies for essential site functionality and analytics.</p>
              </div>
            </div>
          </Route>
          <Route path="/contact">
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4">
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              <p>For support or inquiries, please contact us at support@fastvideosaves.com</p>
            </div>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
