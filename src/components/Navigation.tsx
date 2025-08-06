import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Building2 } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-primary-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary-green" />
            <span className="text-2xl font-bold text-primary-dark">Spondulix</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-primary-dark hover:text-primary-green transition-colors duration-200">
              Home
            </Link>
            
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('who-we-are')}
                className="flex items-center text-primary-dark hover:text-primary-green transition-colors duration-200"
              >
                Who We Are
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'who-we-are' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-primary-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/about-us" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    About Us
                  </Link>
                  <Link to="/our-team" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Our Team
                  </Link>
                  <Link to="/why-choose-spondulix" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Why Choose Spondulix
                  </Link>
                </div>
              )}
            </div>

            { <div className="relative">
              <button
                onClick={() => toggleDropdown('what-we-do')}
                className="flex items-center text-primary-dark hover:text-primary-green transition-colors duration-200"
              >
                What We Do
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'what-we-do' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-primary-white rounded-md shadow-lg py-2 z-50">
                  <Link to="/financial-guidance" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Financial Guidance
                  </Link>
                  <Link to="/taxation" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Taxation
                  </Link>
                  <Link to="/audit" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Audit
                  </Link>
                  <Link to="/outsourcing" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Outsourcing
                  </Link>
                  <Link to="/legal-advisory" className="block px-4 py-2 text-primary-dark hover:bg-primary-background transition-colors">
                    Legal Advisory & Compliances
                  </Link>
                </div>
              )}
            </div> }

            <Link to="/knowledge-hub" className="text-primary-dark hover:text-primary-green transition-colors duration-200">
              Knowledge Hub
            </Link>
            <Link to="/reach-us" className="text-primary-dark hover:text-primary-green transition-colors duration-200">
              Reach Us
            </Link> 
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-dark hover:text-primary-green"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-primary-dark hover:text-primary-green transition-colors">
                Home
              </Link>
              <Link to="/about-us" className="text-primary-dark hover:text-primary-green transition-colors">
                About Us
              </Link>
              <Link to="/our-team" className="text-primary-dark hover:text-primary-green transition-colors">
                Our Team
              </Link>
              <Link to="/financial-guidance" className="text-primary-dark hover:text-primary-green transition-colors">
                Financial Guidance
              </Link>
              <Link to="/taxation" className="text-primary-dark hover:text-primary-green transition-colors">
                Taxation
              </Link>
              <Link to="/knowledge-hub" className="text-primary-dark hover:text-primary-green transition-colors">
                Knowledge Hub
              </Link>
              <Link to="/reach-us" className="text-primary-dark hover:text-primary-green transition-colors">
                Reach Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;