import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WerewolfGame from "@/pages/werewolf";
import ErrorLogsPage from "@/pages/ErrorLogs";
import AboutPage from "@/pages/About";
import FaqPage from "@/pages/Faq";
import HowToPlayPage from "@/pages/HowToPlay";
import HistoryPage from "@/pages/History";
import ContactPage from "@/pages/Contact";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import TermsOfServicePage from "@/pages/TermsOfService";

function Router() {
  return (
    <Switch>
      <Route path="/error-logs" component={ErrorLogsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/how-to-play" component={HowToPlayPage} />
      <Route path="/history" component={HistoryPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-service" component={TermsOfServicePage} />
      <Route path="/" component={WerewolfGame} />
      <Route path="*" component={WerewolfGame} />
    </Switch>
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
