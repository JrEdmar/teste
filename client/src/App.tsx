import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/Landing";
import TutorDashboard from "@/pages/TutorDashboard";
import SearchClinics from "@/pages/SearchClinics";
import DigitalCard from "@/pages/DigitalCard";
import SelectProfile from "@/pages/SelectProfile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/select-profile" component={SelectProfile} />
      <Route path="/dashboard" component={TutorDashboard} />
      <Route path="/clinics" component={SearchClinics} />
      <Route path="/card" component={DigitalCard} />
      <Route component={NotFound} />
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
