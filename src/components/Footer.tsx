import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe2, Phone, Mail, MapPin, Facebook, Twitter,
  Linkedin, Instagram, Youtube, ArrowRight, Shield,
  Award, CheckCircle
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Visit Visa', path: '/services/visa#visit' },
    { label: 'Study Visa', path: '/services/visa#study' },
    { label: 'Work Visa', path: '/services/visa#work' },
    { label: 'Business Visa', path: '/services/visa#business' },
    { label: 'Immigration Consultancy', path: '/services/visa#immigration' },
  ],
  countries: [
    { label: 'USA Visa', path: '/countries/usa' },
    { label: 'UK Visa', path: '/countries/uk' },
    { label: 'Canada Visa', path: '/countries/canada' },
    { label: 'Schengen Visa', path: '/countries/schengen' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Embassy & Appointments', path: '/embassy' },
    { label: 'Travel Services', path: '/services/travel' },
    { label: 'Education Services', path: '/services/education' },
  ],
};

const team = [
  { name: 'Asad Malik', role: 'Founder', email: 'founder@asadiaglobal.com', phone: '+45 91 78 39 75' },
  { name: 'Diana Leli', role: 'Study Visa Specialist', email: 'study@asadiaglobal.com' },
  { name: 'Diana Sereda', role: 'Work Visa Specialist', email: 'work@asadiaglobal.com' },
  { name: 'Yavuz Ruslan', role: 'Business Visa Specialist', email: 'business@asadiaglobal.com', phone: '+994 55 601 15 39' },
  { name: 'Gülşah', role: 'Visit Visa Specialist', email: 'visit@asadiaglobal.com' },
  { name: 'Paşa', role: 'Accounts Manager', email: 'accounts@asadiaglobal.com' },
  { name: 'Farhat', role: 'Information & Support', email: 'info@asadiaglobal.com' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-primary-700 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Ready to Start Your Journey?</h3>
            <p className="text-primary-100 mt-1">Book a free consultation with our experts today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/4591783970"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              WhatsApp Us
            </a>
            <Link to="/contact" className="btn-secondary">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Globe2 size={22} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Asadia Global</div>
                <div className="text-xs text-gray-400 leading-none">Mobility Services</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Professional immigration consultancy, visa assistance, and global mobility solutions with a commitment to excellence and client success.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-teal-400 flex-shrink-0" />
                <span>+45 91 78 39 70</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@asadiaglobal.com" className="hover:text-white transition-colors">info@asadiaglobal.com</a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Copenhagen, Denmark</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <button key={i} className="w-8 h-8 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                  <Icon size={15} />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6">
              {[Shield, Award, CheckCircle].map((Icon, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Icon size={14} className="text-gold-400" />
                  {['Licensed', 'Certified', 'Trusted'][i]}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Visa Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-white font-semibold mb-4">Countries</h4>
            <ul className="space-y-2.5">
              {footerLinks.countries.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-4 mt-6">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Team</h4>
            <div className="space-y-3">
              {team.map((member) => (
                <div key={member.email} className="text-xs space-y-0.5">
                  <div className="text-white font-medium">{member.name}</div>
                  <div className="text-gray-500">{member.role}</div>
                  <a href={`mailto:${member.email}`} className="text-teal-400 hover:text-teal-300 transition-colors">
                    {member.email}
                  </a>
                  {member.phone && (
                    <div className="text-gray-400">{member.phone}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Asadia Global Mobility Services. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
