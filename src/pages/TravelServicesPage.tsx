import React from 'react';
import { Link } from 'react-router-dom';
import {
  Hotel, Plane, Map, CheckCircle, ArrowRight,
  Star, Clock, Shield, Globe2, Heart
} from 'lucide-react';

const travelServices = [
  {
    id: 'hotel',
    icon: Hotel,
    title: 'Hotel Booking',
    desc: 'We book verified, comfortable accommodations that meet embassy requirements for visa applications, at competitive rates across 100+ countries.',
    img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'Embassy-compliant hotel bookings',
      'Budget, mid-range, and luxury options',
      'Refundable reservation letters',
      'Group and family bookings',
      'Airport hotel packages',
      'Extended stay arrangements',
    ],
  },
  {
    id: 'tickets',
    icon: Plane,
    title: 'Air Ticket Booking',
    desc: 'Get the best airfare deals for your international travel. We provide flight itineraries for visa applications as well as confirmed tickets for all major airlines.',
    img: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'Cheapest fare guarantee',
      'Dummy/provisional ticket for visa purposes',
      'Round-trip and one-way tickets',
      'Multi-city flight bookings',
      'Business and first-class options',
      'Group travel discounts',
    ],
  },
  {
    id: 'tours',
    icon: Map,
    title: 'Tour Packages',
    desc: 'Explore the world with our carefully curated tour packages covering Europe, USA, Canada, and beyond. All-inclusive packages tailored to your preferences and budget.',
    img: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'European highlights (Schengen countries)',
      'North America (USA & Canada) tours',
      'Custom itinerary planning',
      'Group and family tour packages',
      'Guided and self-guided options',
      'Honeymoon and anniversary packages',
    ],
  },
];

const destinations = [
  { name: 'Paris, France', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇫🇷', price: 'From €599' },
  { name: 'New York, USA', img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇺🇸', price: 'From €799' },
  { name: 'Toronto, Canada', img: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇨🇦', price: 'From €699' },
  { name: 'London, UK', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇬🇧', price: 'From €499' },
  { name: 'Barcelona, Spain', img: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇪🇸', price: 'From €449' },
  { name: 'Dubai, UAE', img: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=400', flag: '🇦🇪', price: 'From €549' },
];

export default function TravelServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <Plane size={14} />
            Travel Services
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Complete Travel Solutions
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto">
            From hotel bookings to tour packages — we make your international travel seamless and memorable.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {travelServices.map((service, i) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-16 items-center scroll-mt-20 ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className="badge bg-primary-100 text-primary-700 mb-4">
                    <service.icon size={14} />
                    {service.title}
                  </div>
                  <h2 className="section-title mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary">
                    Book Now <ArrowRight size={16} />
                  </Link>
                </div>
                <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge bg-teal-100 text-teal-700 mb-4 mx-auto">
              <Heart size={14} />
              Top Picks
            </div>
            <h2 className="section-title mb-4">Popular Destinations</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Discover our most-booked travel packages with unbeatable value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link key={dest.name} to="/contact" className="group card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{dest.flag}</span>
                        <h3 className="font-semibold text-white">{dest.name}</h3>
                      </div>
                      <span className="badge bg-gold-500/90 text-white text-xs font-bold">{dest.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Secure Bookings', desc: 'All bookings are secure and verified with confirmation documentation.' },
              { icon: Star, title: 'Best Price', desc: 'We guarantee competitive rates with no hidden fees or charges.' },
              { icon: Clock, title: '24/7 Support', desc: 'Our travel team is available around the clock for any assistance.' },
              { icon: Globe2, title: '100+ Countries', desc: 'We arrange travel and accommodation in over 100 countries worldwide.' },
            ].map((g) => (
              <div key={g.title} className="text-center p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <g.icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
