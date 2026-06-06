import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe2, Menu, X, ChevronDown, Phone, Mail,
  MapPin, Clock
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { key: 'nav_home', path: '/' },
  { key: 'nav_about', path: '/about' },
  {
    key: 'nav_services', path: '/services',
    children: [
      { label: 'Visa Services', path: '/services/visa' },
      { label: 'Document Services', path: '/services/documents' },
      { label: 'Travel Services', path: '/services/travel' },
      { label: 'Education Services', path: '/services/education' },
    ]
  },
  {
    key: 'nav_countries', path: '/countries',
    children: [
      { label: 'USA Visa', path: '/countries/usa' },
      { label: 'UK Visa', path: '/countries/uk' },
      { label: 'Canada Visa', path: '/countries/canada' },
      { label: 'Schengen Visa', path: '/countries/schengen' },
    ]
  },
  { key: 'nav_embassy', path: '/embassy' },
  { key: 'nav_blog', path: '/blog' },
  { key: 'nav_contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang, languages } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-800 text-gray-300 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} />
              +45 91 78 39 70
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} />
              info@asadiaglobal.com
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              Mon–Sat: 9:00 AM – 6:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              Copenhagen, Denmark
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow duration-300">
                <Globe2 size={22} className="text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-navy-800 text-lg leading-tight">Asadia Global</div>
                <div className="text-xs text-gray-500 leading-none">Mobility Services</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.children && setDropdown(item.key)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {t(item.key)}
                    {item.children && <ChevronDown size={14} className={`transition-transform duration-200 ${dropdown === item.key ? 'rotate-180' : ''}`} />}
                  </Link>
                  {item.children && dropdown === item.key && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Language selector */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200"
                >
                  <span>{languages[lang as keyof typeof languages]?.flag}</span>
                  <span className="hidden xl:inline font-medium">{languages[lang as keyof typeof languages]?.name}</span>
                  <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                </button>
                {langOpen && (
                  <div className="absolute top-full right-0 mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {Object.values(languages).map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 ${
                          lang === l.code ? 'text-primary-600 bg-primary-50 font-medium' : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        {l.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-4"
              >
                {t('book_consultation')}
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {Object.values(languages).map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        lang === l.code ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span>{l.flag}</span>
                      {l.name}
                    </button>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                  {t('book_consultation')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
