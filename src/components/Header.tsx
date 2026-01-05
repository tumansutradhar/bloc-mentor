import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useBlockchain } from "@/context/BlockchainContext";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { isConnected, walletAddress, disconnectWallet } = useBlockchain();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Tutors", path: "/tutors" },
    ...(user || isConnected ? [{ name: "Dashboard", path: "/dashboard" }] : []),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setShouldRenderMenu(true);
    } else {
      setTimeout(() => setShouldRenderMenu(false), 300);
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await logout();
    if (isConnected) {
      await disconnectWallet();
    }
    toast.success("Logged out successfully", {
      description: "You have been signed out of your account.",
    });
    navigate("/", { replace: true });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl sm:block">Block Mentor</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#0A84FF] ${
                location.pathname === link.path ? "text-[#0A84FF]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          {user || isConnected ? (
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">
                {user?.name ||
                  user?.email ||
                  (isConnected && walletAddress
                    ? `${walletAddress.substring(
                        0,
                        6
                      )}...${walletAddress.substring(38)}`
                    : "User")}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 h-[40px] text-sm border-[#1D1D1F] hover:bg-[#F5F5F7]"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                className="text-sm border-[#1D1D1F] hover:bg-[#F5F5F7]"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
              <Button
                className="text-sm text-white bg-[#0A84FF] hover:bg-[#0055D4]"
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
        <button
          className="md:hidden rounded-md p-2"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {shouldRenderMenu && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 glass-effect ${
            isMobileMenuOpen ? "animate-fade-in" : "animate-fade-out"
          }`}
        >
          <nav className="fixed inset-0 flex flex-col px-6 w-screen h-screen bg-white items-center justify-center pb-[72px] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 text-sm font-medium transition-colors hover:text-[#0A84FF] ${
                  location.pathname === link.path ? "text-[#0A84FF]" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              {user || isConnected ? (
                <Button
                  variant="outline"
                  className="w-full justify-start h-[40px] text-sm border-[#1D1D1F] hover:bg-[#F5F5F7]"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    className="w-full py-3.5 px-4 text-sm border-[#1D1D1F] hover:bg-[#F5F5F7]"
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full py-3.5 px-4 text-sm text-white bg-[#0A84FF] hover:bg-[#0055D4]"
                    onClick={() => navigate("/register")}
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
