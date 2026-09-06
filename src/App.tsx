import { Toaster } from "@src/components/ui/toaster";
import { Toaster as Sonner } from "@src/components/ui/sonner";
import { TooltipProvider } from "@src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@src/pages/Index";
import { PortfolioProvider } from "@src/context/PortfolioContext";
import ErrorPage from "@src/pages/ErrorPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={`/`}>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="/*"
            element={
              <PortfolioProvider>
                <Index />
              </PortfolioProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
