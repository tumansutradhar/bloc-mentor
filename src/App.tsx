import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Tutors from "./pages/Tutors";
import Dashboard from "./pages/Dashboard";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BecomeTutor from "./pages/BecomeTutor";
import BlockchainIntegration from "./pages/BlockchainIntegration";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import SmartContractLicense from "./pages/SmartContractLicense";
import { BlockchainProvider } from "./context/BlockchainContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Payment from "./pages/Payment";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";
import "@/App.css";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (user === undefined) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BlockchainProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses-detail/:id" element={<CourseDetail />} />
              <Route path="/tutors" element={<Tutors />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/become-tutor"
                element={
                  <ProtectedRoute>
                    <BecomeTutor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blockchain-integration"
                element={<BlockchainIntegration />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<Press />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route
                path="/smart-contract-license"
                element={<SmartContractLicense />}
              />
              <Route
                path="/payment"
                element={
                  <ProtectedRoute>
                    <Payment />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBot />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </BlockchainProvider>
  </QueryClientProvider>
);

export default App;
