import React, { useState, useEffect } from 'react';
import { type NavItem } from '../../types/navigation';
import NavDropdown from './NavDropdown';
import Logo from '../ui/Logo';
import '../../styles/globals.css';

interface MainNavProps {
  items: NavItem[];
}

const MainNav: React.FC<MainNavProps> = ({ items }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemId: string, e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === itemId ? null : itemId);
    }
  };

  const handleNavLinkClick = (item: NavItem, e: React.MouseEvent) => {
    if (isMobile && item.children) {
      e.preventDefault();
      handleDropdownToggle(item.id, e);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <Logo />
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
          {items.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeDropdown === item.id ? 'active' : ''}`}
              onMouseEnter={() => !isMobile && setActiveDropdown(item.id)}
              onMouseLeave={() => !isMobile && setActiveDropdown(null)}
            >
              {item.href ? (
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={(e) => handleNavLinkClick(item, e)}
                >
                  {item.label}
                  {item.children && (
                    <span 
                      className={`mobile-dropdown-toggle ${activeDropdown === item.id ? 'active' : ''}`}
                      onClick={(e) => handleDropdownToggle(item.id, e)}
                    >
                      ▼
                    </span>
                  )}
                </a>
              ) : (
                <span 
                  className="nav-link"
                  onClick={(e) => item.children && handleDropdownToggle(item.id, e)}
                >
                  {item.label}
                  {item.children && (
                    <span className={`mobile-dropdown-toggle ${activeDropdown === item.id ? 'active' : ''}`}>
                      ▼
                    </span>
                  )}
                </span>
              )}
              
              {item.children && (
                <NavDropdown
                  items={item.children}
                  isVisible={activeDropdown === item.id || (!isMobile && activeDropdown === item.id)}
                  onItemClick={closeMobileMenu}
                />
              )}
            </li>
          ))}
          
          {/* Theme Toggle Button */}
          <li className="nav-item nav-toggle-item">
            <button
              className="toggle-button"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="toggle-track">
                <span className={`toggle-thumb ${isDarkMode ? 'dark' : 'light'}`}>
                  {isDarkMode ? '🌙' : '☀️'}
                </span>
              </span>
              <span className="toggle-label">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={closeMobileMenu}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default MainNav;