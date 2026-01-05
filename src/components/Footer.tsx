import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram, Github, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl">Block Mentor</span>
            </Link>
            <p className="text-sm text-[#86868B] mb-6">
              An AI-driven tutoring service operating on the blockchain,
              offering personalized learning experiences.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                target="_blank"
                className="h-10 w-10 rounded-full bg-[#1D1D1F]/5 flex items-center justify-center text-[#1D1D1F] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                className="h-10 w-10 rounded-full bg-[#1D1D1F]/5 flex items-center justify-center text-[#1D1D1F] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                className="h-10 w-10 rounded-full bg-[#1D1D1F]/5 flex items-center justify-center text-[#1D1D1F] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com/tumansutradhar/block_mentor"
                target="_blank"
                className="h-10 w-10 rounded-full bg-[#1D1D1F]/5 flex items-center justify-center text-[#1D1D1F] hover:bg-[#0A84FF]/10 hover:text-[#0A84FF] transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/tutors"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Find a Tutor
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/become-tutor"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Become a Tutor
                </Link>
              </li>
              <li>
                <Link
                  to="/blockchain-integration"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Blockchain Integration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-contract-license"
                  className="text-sm text-[#86868B] hover:text-[#0A84FF] transition-colors"
                >
                  Smart Contract License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#86868B]/10">
          <p className="text-sm text-[#86868B] mb-4 md:mb-0">
            © {new Date().getFullYear()} Block Mentor. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F] hover:text-[#0A84FF] transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
