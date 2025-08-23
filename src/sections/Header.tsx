import { Menu, X } from "lucide-react";
import { removeUser, selectIsAuthenticated } from "@/store/auth";
import { useDispatch, useSelector } from "@/store/setup/hooks";
import { removeUserFromLocalStorage } from "@/utils/authStorage";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import Button from "@/components/elements/button";
import { useNavigate } from "react-router";
import { clearError } from "@/store/error";

const navItems = [
  { label: "Nasıl Çalışır", path: "how-it-works" },
  { label: "Kategoriler", path: "categories" },
  { label: "Not Ara", path: "/search" },
];

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAuthDialogVisible, setIsAuthDialogVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const toggleAuthDialog = () => {
    // Dialog açılırken hataları temizle
    if (!isAuthDialogVisible) {
      dispatch(clearError());
    }
    setIsAuthDialogVisible(!isAuthDialogVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    dispatch(removeUser());
    await removeUserFromLocalStorage();
    setIsAuthDialogVisible(false);
  };

  const handleNavigation = (item: { label: string; path: string }) => {
    if (item.path === "/search") {
      // Navigate to search page
      navigate("/search");
    } else {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(item.path);
        }, 100);
      } else {
        scrollToSection(item.path);
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("/", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent py-4 px-4 md:px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleNavigation({ label: "Ana Sayfa", path: "hero" })}
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NP</span>
          </div>
          <h4 className="text-xl font-bold text-heading">Not Paylaşım</h4>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item)}
              className="text-heading/70 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => navigate("/create-note")}
              className="text-heading/70 hover:text-primary transition-colors font-medium cursor-pointer"
            >
              Not Paylaş
            </button>
          )}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/profile")}
                className="text-heading/70 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Profil
              </button>
              <Button onClick={handleLogout} variant="outline">
                Çıkış Yap
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button onClick={toggleAuthDialog}>Giriş Yap</Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-heading cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-accent shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleNavigation(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-heading/70 hover:text-primary transition-colors font-medium py-2 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    navigate("/create-note");
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-heading/70 hover:text-primary transition-colors font-medium py-2 cursor-pointer"
                >
                  Not Paylaş
                </button>
              )}

              <div className="border-t border-accent pt-4">
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left text-heading/70 hover:text-primary transition-colors font-medium py-2 cursor-pointer"
                    >
                      Profil
                    </button>
                    <Button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      variant="outline"
                    >
                      Çıkış Yap
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        toggleAuthDialog();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left text-heading/70 hover:text-primary transition-colors font-medium py-2 cursor-pointer"
                    >
                      Giriş Yap
                    </button>
                    <Button
                      onClick={() => {
                        toggleAuthDialog();
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Ücretsiz Kayıt
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}

        <AuthModal
          isVisible={isAuthDialogVisible}
          onHide={() => setIsAuthDialogVisible(false)}
        />
      </div>
    </header>
  );
};
