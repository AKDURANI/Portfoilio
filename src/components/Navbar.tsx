
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              Contact
            </button>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com/AKDURANI" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/muhammadalikhanaideveloper/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 hover:bg-accent rounded-md">
                Contact
              </button>
              <div className="flex space-x-4 px-3 py-2">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
