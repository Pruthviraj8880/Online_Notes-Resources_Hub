import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">📚</span>
            </div>
            <span className="text-gray-900">StudyHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#subjects" className="text-gray-700 hover:text-primary transition-colors">
              Subjects
            </a>
            <a href="#notes" className="text-gray-700 hover:text-primary transition-colors">
              Notes
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 mt-2 space-y-2">
            <a href="#subjects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Subjects
            </a>
            <a href="#notes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Notes
            </a>
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Features
            </a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Contact
            </a>
            <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
