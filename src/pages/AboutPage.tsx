import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Shield, Users, TrendingUp, Globe2, Heart,
  CheckCircle, ArrowRight, Quote, Target, Zap, Star,
  MapPin, Clock, Phone, Mail
} from 'lucide-react';

const team = [
  {
    name: 'Asad Malik',
    role: 'Founder & CEO',
    email: 'founder@asadiaglobal.com',
    phone: '+45 91 78 39 75',
    bio: 'Visionary leader with 15+ years in global immigration and mobility services.',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Immigration Strategy',
  },
  {
    name: 'Diana Leli',
    role: 'Study Visa Specialist',
    email: 'study@asadiaglobal.com',
    bio: 'Expert in student visas and university admission processes across UK, Canada, and Europe.',
    img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Study Visas',
  },
  {
    name: 'Diana Sereda',
    role: 'Work Visa Specialist',
    email: 'work@asadiaglobal.com',
    bio: 'Specialized in work permits and employment-based immigration for skilled professionals.',
    img: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Work Permits',
  },
  {
    name: 'Yavuz Ruslan',
    role: 'Business Visa Specialist',
    email: 'business@asadiaglobal.com',
    phone: '+994 55 601 15 39',
    bio: 'Expert in business immigration, investor visas, and corporate mobility solutions.',
    img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Business Visas',
  },
  {
    name: 'Gülşah',
    role: 'Visit Visa Specialist',
    email: 'visit@asadiaglobal.com',
    bio: 'Focused on tourist, family visit, and short-stay visa applications worldwide.',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Visit Visas',
  },
  {
    name: 'Paşa',
    role: 'Accounts Manager',
    email: 'accounts@asadiaglobal.com',
    bio: 'Ensures transparent billing and seamless financial management for all clients.',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Client Accounts',
  },
  {
    name: 'Farhat',
    role: 'Information & Support',
    email: 'info@asadiaglobal.com',
    bio: 'First point of contact ensuring every client gets the right information and support.',
    img: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialty: 'Client Support',
  },
];

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We provide honest, transparent advice without overpromising or misleading clients.' },
  { icon: Target, title: 'Excellence', desc: 'We pursue the highest standards in every application and client interaction.' },
  { icon: Heart, title: 'Empathy', desc: 'We understand the emotional journey of immigration and support clients with care.' },
  { icon: Zap, title: 'Efficiency', desc: 'We streamline every process to save your time and achieve results faster.' },
];

const milestones = [
  { year: '2009', event: 'Company founded in Copenhagen, Denmark' },
  { year: '2013', event: 'Expanded to serve clients from 20+ countries' },
  { year: '2016', event: 'Reached 2,500 successful visa applications' },
  { year: '2019', event: 'Opened multilingual support in 6 languages' },
  { year: '2022', event: 'Celebrated 8,000+ successful cases' },
  { year: '2026', event: 'Serving 10,000+ clients across 40+ countries' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-white/20 text-white border border-white/30 mb-4">
                <Globe2 size={14} />
                About Asadia Global
              </div>
              <h1 className="font-display text-5xl font-bold text-white mb-6 leading-tight">
                Your Trusted Partner in Global Mobility
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed mb-8">
                Founded in Copenhagen, Denmark, Asadia Global Mobility Services has been helping individuals, families, and businesses navigate the complexities of global immigration since 2009.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-gold">
                  Book Consultation <ArrowRight size={16} />
                </Link>
                <a href="https://wa.me/4591783970" target="_blank" rel="noopener noreferrer" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all duration-200 inline-flex items-center gap-2">
                  <Phone size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10,000+', label: 'Clients Served', icon: Users },
                { value: '95%', label: 'Success Rate', icon: TrendingUp },
                { value: '40+', label: 'Countries', icon: Globe2 },
                { value: '15+', label: 'Years Experience', icon: Award },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <stat.icon size={24} className="text-gold-400 mx-auto mb-2" />
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <div className="badge bg-primary-100 text-primary-700 mb-4">Our Mission</div>
              <h2 className="section-title mb-6">Making Global Mobility Accessible to Everyone</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Asadia Global Mobility Services, our mission is to simplify the immigration process and open doors to global opportunities for every client. We believe that with the right guidance, borders become gateways, not barriers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our vision is to be the most trusted and client-centric immigration consultancy in the world — recognized for our expertise, transparency, and unwavering commitment to client success.
              </p>
              <div className="space-y-3">
                {[
                  'Personalized, case-by-case immigration strategy',
                  'Complete transparency in fees and processes',
                  'Continuous support from consultation to approval',
                  'Expert guidance in 6+ languages',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle max-w-xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6 text-center group">
                <div className="w-14 h-14 bg-primary-50 group-hover:bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <v.icon size={26} className="text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title mb-4">Our Journey</h2>
            <p className="section-subtitle">A history of growth, trust, and success.</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-primary-100" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`relative flex items-center gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="inline-block bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="font-display text-primary-600 font-bold text-lg mb-1">{m.year}</div>
                    <div className="text-gray-600 text-sm">{m.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge bg-teal-100 text-teal-700 mb-4 mx-auto">Our Experts</div>
            <h2 className="section-title mb-4">Meet Our Team</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Dedicated professionals with deep expertise in global immigration and visa services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.email} className="card p-5 text-center group">
                <div className="relative inline-block mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover mx-auto shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 badge bg-primary-100 text-primary-700 text-xs py-0.5 px-2">
                    {member.specialty}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-0.5">{member.name}</h3>
                <div className="text-primary-600 text-sm font-medium mb-2">{member.role}</div>
                <p className="text-gray-500 text-xs leading-relaxed mb-3">{member.bio}</p>
                <div className="space-y-1.5 text-xs">
                  <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-primary-600 transition-colors">
                    <Mail size={12} />
                    {member.email}
                  </a>
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-1.5 text-gray-500 hover:text-primary-600 transition-colors">
                      <Phone size={12} />
                      {member.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote size={32} className="text-primary-300 mx-auto mb-4" />
          <p className="font-display text-2xl font-bold text-white mb-4 leading-relaxed">
            "Asadia Global turned what seemed like an impossible dream into reality. Their expertise and dedication are truly unmatched."
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold-400 fill-gold-400" />)}
            </div>
            <span className="text-blue-100 text-sm">— Ahmed K., Canada Study Visa Client</span>
          </div>
        </div>
      </section>
    </div>
  );
}
