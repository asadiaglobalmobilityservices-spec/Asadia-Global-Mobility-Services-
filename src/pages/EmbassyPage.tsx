import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Globe2, Phone, Mail, ExternalLink,
  MapPin, Clock, ChevronDown, ChevronUp, Calendar, ArrowRight
} from 'lucide-react';

const embassies = [
  {
    country: 'United States (USA)',
    flag: '🇺🇸',
    visaTypes: ['B1/B2 Tourist', 'F-1 Student', 'H-1B Work', 'J-1 Exchange', 'L-1 Intra-company'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://dk.usembassy.gov',
    phone: '+45 33 41 71 00',
    address: 'Dag Hammarskjölds Allé 24, 2100 Copenhagen',
    hours: 'Mon–Fri: 8:00 AM – 4:00 PM',
    processing: '3–8 weeks',
    interview: 'Required for most visas',
    notes: 'DS-160 online application required before appointment',
  },
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    visaTypes: ['Visitor', 'Student', 'Skilled Worker', 'Family', 'Business'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://www.gov.uk/contact-consulate',
    phone: '+45 35 44 52 00',
    address: 'Kastelsvej 36–40, 2100 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 5:00 PM',
    processing: '3 weeks standard, 5 days priority',
    interview: 'Generally not required',
    notes: 'Apply via UKVI online portal',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    visaTypes: ['Visitor', 'Student Permit', 'Work Permit', 'Express Entry', 'PNP'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://www.canada.ca/en/immigration-refugees-citizenship',
    phone: '+1 888 242-2100',
    address: 'Kristen Bernikows Gade 1, 1105 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 4:00 PM',
    processing: '2–8 weeks (eTA: 72 hrs)',
    interview: 'Sometimes required',
    notes: 'Most applications processed online via IRCC portal',
  },
  {
    country: 'Schengen (Germany)',
    flag: '🇩🇪',
    visaTypes: ['Tourist (C Visa)', 'Business (C Visa)', 'Transit (A/B)', 'National (D Visa)', 'Student'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://kopenhagen.diplo.de',
    phone: '+45 35 45 99 00',
    address: 'Stockholmsgade 57, 2100 Copenhagen',
    hours: 'Mon–Fri: 8:30 AM – 1:00 PM',
    processing: '15 calendar days',
    interview: 'Sometimes required',
    notes: 'Apply up to 6 months before travel, minimum 15 days before',
  },
  {
    country: 'France',
    flag: '🇫🇷',
    visaTypes: ['Tourist (C)', 'Business (C)', 'Student (D)', 'Long-stay', 'Working Holiday'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://dk.ambafrance.org',
    phone: '+45 33 67 01 00',
    address: 'Kongens Nytorv 4, 1050 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 12:00 PM',
    processing: '15 calendar days',
    interview: 'Sometimes required',
    notes: 'Apply via France Visa portal',
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    visaTypes: ['Tourist', 'Business', 'Family', 'Student', 'Long-stay'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://www.netherlandsandyou.nl',
    phone: '+45 33 70 72 00',
    address: 'Toldbodgade 33, 1253 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 12:30 PM',
    processing: '15 calendar days',
    interview: 'Not usually required',
    notes: 'Apply via IND (Netherlands immigration)',
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    visaTypes: ['Visitor (600)', 'Student (500)', 'Work (482)', 'Skilled Migration', 'Working Holiday'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://denmark.embassy.gov.au',
    phone: '+45 70 26 36 76',
    address: 'Dampfærgevej 26, 2100 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 4:30 PM',
    processing: '4–8 weeks',
    interview: 'Not usually required',
    notes: 'Most applications lodged online via ImmiAccount',
  },
  {
    country: 'UAE (Dubai / Abu Dhabi)',
    flag: '🇦🇪',
    visaTypes: ['Tourist', 'Transit', 'Work', 'Business', 'Residence'],
    embassyIn: 'Copenhagen, Denmark',
    website: 'https://www.government.ae/en/information-and-services/visa-and-emirates-id',
    phone: '+45 39 16 09 00',
    address: 'Amaliegade 36, 1256 Copenhagen',
    hours: 'Mon–Fri: 9:00 AM – 2:00 PM',
    processing: '3–5 working days',
    interview: 'Not required',
    notes: 'Tourist visa can be obtained on arrival or via airlines',
  },
];

export default function EmbassyPage() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = embassies.filter(
    (e) => e.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <Building2 size={14} />
            Embassy Directory
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Embassy & Appointment Center
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
            Comprehensive embassy directory and appointment booking service for all major countries.
          </p>
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search by country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Appointment Booking Banner */}
      <section className="py-8 bg-gold-50 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Calendar size={24} className="text-gold-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900">Need Help Booking an Embassy Appointment?</h3>
              <p className="text-gray-600 text-sm">Our team handles appointment bookings at all major embassies and VFS centres.</p>
            </div>
          </div>
          <Link to="/contact" className="btn-gold flex-shrink-0">
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Embassy List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-4">
            {filtered.map((embassy) => (
              <div key={embassy.country} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => setExpanded(expanded === embassy.country ? null : embassy.country)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-3xl">{embassy.flag}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{embassy.country}</h3>
                    <p className="text-gray-500 text-sm">
                      {embassy.visaTypes.slice(0, 3).join(' · ')}
                      {embassy.visaTypes.length > 3 && ` +${embassy.visaTypes.length - 3} more`}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="hidden md:flex items-center gap-1.5">
                      <Clock size={14} />
                      {embassy.processing}
                    </span>
                    <span className="hidden lg:flex items-center gap-1.5">
                      <MapPin size={14} />
                      {embassy.embassyIn}
                    </span>
                    {expanded === embassy.country
                      ? <ChevronUp size={18} className="text-primary-600" />
                      : <ChevronDown size={18} className="text-gray-400" />
                    }
                  </div>
                </button>

                {expanded === embassy.country && (
                  <div className="px-5 pb-5 border-t border-gray-100 bg-gray-50">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Visa Types</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {embassy.visaTypes.map((v) => (
                            <span key={v} className="badge bg-primary-100 text-primary-700 text-xs">{v}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Contact & Location</h4>
                        <div className="space-y-1.5 text-sm text-gray-600">
                          <div className="flex items-start gap-1.5">
                            <MapPin size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                            {embassy.address}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone size={14} className="text-primary-500" />
                            {embassy.phone}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-primary-500" />
                            {embassy.hours}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Process Info</h4>
                        <div className="space-y-1.5 text-sm text-gray-600">
                          <div><span className="font-medium text-gray-700">Processing:</span> {embassy.processing}</div>
                          <div><span className="font-medium text-gray-700">Interview:</span> {embassy.interview}</div>
                          <div className="text-xs text-gray-500 mt-2 bg-blue-50 p-2 rounded-lg">{embassy.notes}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-5">
                      <Link to="/contact" className="btn-primary text-sm py-2">
                        Book Appointment <Calendar size={14} />
                      </Link>
                      <a
                        href={embassy.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm py-2"
                      >
                        Official Website <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Globe2 size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No embassies found for "{search}"</p>
              <button onClick={() => setSearch('')} className="text-primary-600 text-sm mt-2 hover:underline">
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Help section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: 'Appointment Booking', desc: 'We book your embassy appointment at the earliest available slot, handling all the paperwork.' },
              { icon: Clock, title: 'Reminders & Updates', desc: 'Receive timely reminders and real-time updates about your appointment and application status.' },
              { icon: Building2, title: 'VFS / BLS Support', desc: 'We assist with VFS Global, BLS International, and other third-party visa application centres.' },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
