import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Star, Globe2, Users, TrendingUp,
  Award, Shield, ChevronRight, Play, Quote, MapPin,
  BookOpen, Plane, FileText, GraduationCap, Building2,
  Clock, Phone, Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const services = [
  { icon: Plane, title: 'Visit Visa', desc: 'Tourist and family visit visas for top destinations worldwide.', color: 'blue', path: '/services/visa#visit' },
  { icon: GraduationCap, title: 'Study Visa', desc: 'Student visas for universities and colleges across the globe.', color: 'teal', path: '/services/visa#study' },
  { icon: Building2, title: 'Work Visa', desc: 'Employment-based visas and work permits for professionals.', color: 'gold', path: '/services/visa#work' },
  { icon: Globe2, title: 'Business Visa', desc: 'Business travel, meetings, and conference visas made simple.', color: 'green', path: '/services/visa#business' },
  { icon: FileText, title: 'Document Services', desc: 'Visa file prep, embassy appointments, invitation letters.', color: 'orange', path: '/services/documents' },
  { icon: BookOpen, title: 'Education Guidance', desc: 'University admissions, scholarships, SOP & CV writing.', color: 'purple', path: '/services/education' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  teal: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
  gold: 'bg-yellow-50 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white',
  green: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
  purple: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
};

const countries = [
  { name: 'United States', flag: '🇺🇸', path: '/countries/usa', visa: 'B1/B2, F1, H-1B', img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'United Kingdom', flag: '🇬🇧', path: '/countries/uk', visa: 'Visitor, Student, Skilled Worker', img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Canada', flag: '🇨🇦', path: '/countries/canada', visa: 'Express Entry, Study Permit', img: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Schengen Zone', flag: '🇪🇺', path: '/countries/schengen', visa: 'Short-stay, National Visa', img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const testimonials = [
  {
    name: 'Ahmed Al-Rashid',
    country: 'UAE',
    flag: '🇦🇪',
    rating: 5,
    text: 'Asadia Global made my Canada study visa process effortless. The team was professional, responsive, and guided me every step of the way. I got my visa approved in just 3 weeks!',
    visa: 'Canada Study Visa',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Priya Sharma',
    country: 'India',
    flag: '🇮🇳',
    rating: 5,
    text: 'Excellent service! They handled all my UK work visa documents efficiently. The team\'s expertise and attention to detail gave me complete confidence throughout the process.',
    visa: 'UK Work Visa',
    img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Mehmet Yilmaz',
    country: 'Turkey',
    flag: '🇹🇷',
    rating: 5,
    text: 'I highly recommend Asadia Global for any visa or immigration needs. They helped my entire family get Schengen visas. Transparent, honest, and truly professional!',
    visa: 'Schengen Visa',
    img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const whyUs = [
  { icon: Shield, title: 'Licensed Consultants', desc: 'Fully licensed and certified immigration consultants with deep expertise.' },
  { icon: TrendingUp, title: '95% Success Rate', desc: 'Proven track record with thousands of successful visa applications.' },
  { icon: Clock, title: 'Fast Processing', desc: 'Efficient processes to ensure the fastest possible turnaround time.' },
  { icon: Users, title: 'Multilingual Team', desc: 'Our team speaks English, Arabic, Turkish, Urdu, Azerbaijani, and Romanian.' },
  { icon: Zap, title: '24/7 Support', desc: 'Round-the-clock support via WhatsApp, email, and phone.' },
  { icon: Award, title: '15+ Years Experience', desc: 'Over a decade of specialized experience in global immigration services.' },
];

const blogPosts = [
  {
    title: 'How to Get a Canada Study Visa in 2026: Complete Guide',
    excerpt: 'Everything you need to know about applying for a Canadian student visa, from eligibility requirements to document preparation.',
    date: '2026-05-20',
    category: 'Study Visa',
    path: '/blog/canada-study-visa-2026',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '8 min read',
  },
  {
    title: 'Schengen Visa Requirements: A Comprehensive Overview',
    excerpt: 'Your complete guide to Schengen visa types, required documents, application process, and tips for approval.',
    date: '2026-05-10',
    category: 'Schengen',
    path: '/blog/schengen-visa-requirements',
    img: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '6 min read',
  },
  {
    title: 'UK Skilled Worker Visa 2026: Changes & How to Apply',
    excerpt: 'The UK Skilled Worker Visa has seen major updates. Here\'s what\'s changed and how you can successfully apply.',
    date: '2026-04-28',
    category: 'Work Visa',
    path: '/blog/uk-skilled-worker-visa-2026',
    img: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600',
    readTime: '7 min read',
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [activeCountry, setActiveCountry] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3 });

  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="animated-bg relative overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="badge bg-gold-500/20 text-gold-300 border border-gold-500/30 mb-6">
                <Award size={14} />
                Trusted by 10,000+ clients worldwide
              </div>
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                {t('hero_title')}
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed mb-8 max-w-xl">
                {t('hero_subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/contact" className="btn-gold text-base py-4 px-8">
                  {t('hero_cta')} <ArrowRight size={18} />
                </Link>
                <Link to="/eligibility" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-200 inline-flex items-center gap-2 backdrop-blur-sm">
                  <CheckCircle size={18} />
                  {t('hero_cta2')}
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                {['USA', 'UK', 'Canada', 'Schengen', 'Australia'].map((c) => (
                  <span key={c} className="text-blue-200 text-sm font-medium flex items-center gap-1.5">
                    <CheckCircle size={14} className="text-teal-400" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:block animate-slide-in-right">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-white">Quick Visa Check</div>
                    <Zap size={16} className="text-gold-400" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-blue-200 text-xs mb-1 block">Your Nationality</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/40 backdrop-blur-sm">
                        <option value="" className="text-gray-800">Select your country</option>
                        <option value="pk" className="text-gray-800">Pakistan</option>
                        <option value="bd" className="text-gray-800">Bangladesh</option>
                        <option value="in" className="text-gray-800">India</option>
                        <option value="ng" className="text-gray-800">Nigeria</option>
                        <option value="az" className="text-gray-800">Azerbaijan</option>
                        <option value="tr" className="text-gray-800">Turkey</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-blue-200 text-xs mb-1 block">Destination</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/40 backdrop-blur-sm">
                        <option value="" className="text-gray-800">Choose destination</option>
                        <option value="usa" className="text-gray-800">United States</option>
                        <option value="uk" className="text-gray-800">United Kingdom</option>
                        <option value="ca" className="text-gray-800">Canada</option>
                        <option value="eu" className="text-gray-800">Schengen (Europe)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-blue-200 text-xs mb-1 block">Purpose of Travel</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-white/40 backdrop-blur-sm">
                        <option value="" className="text-gray-800">Select purpose</option>
                        <option value="visit" className="text-gray-800">Visit / Tourism</option>
                        <option value="study" className="text-gray-800">Study</option>
                        <option value="work" className="text-gray-800">Work</option>
                        <option value="business" className="text-gray-800">Business</option>
                      </select>
                    </div>
                    <Link to="/eligibility" className="btn-gold w-full justify-center mt-2">
                      Check My Eligibility <ArrowRight size={16} />
                    </Link>
                  </div>
                  <p className="text-blue-300 text-xs mt-3 text-center">Free, instant, no registration needed</p>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Visa Approved!</div>
                    <div className="text-xs text-gray-500">Just 2 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <div className="text-xs">Scroll to explore</div>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section ref={statsRef} className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: t('stats_clients'), value: 10000, suffix: '+', icon: Users, color: 'text-primary-600' },
              { label: t('stats_countries'), value: 40, suffix: '+', icon: Globe2, color: 'text-teal-600' },
              { label: t('stats_success'), value: 95, suffix: '%', icon: TrendingUp, color: 'text-green-600' },
              { label: t('stats_years'), value: 15, suffix: '+', icon: Award, color: 'text-gold-600' },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className={`inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-primary-50 mb-3 transition-colors ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className={`font-display text-4xl font-bold ${stat.color} mb-1`}>
                  {statsInView ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge bg-primary-100 text-primary-700 mb-4 mx-auto">
              <Zap size={14} />
              Comprehensive Solutions
            </div>
            <h2 className="section-title mb-4">{t('our_services')}</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From visa applications to university admissions — we provide end-to-end support for all your global mobility needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.path} className="service-card">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${colorMap[service.color]}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className="text-primary-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services/visa" className="btn-primary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== COUNTRIES ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge bg-teal-100 text-teal-700 mb-4 mx-auto">
              <MapPin size={14} />
              Global Reach
            </div>
            <h2 className="section-title mb-4">Top Destination Countries</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Expert visa processing for the most sought-after immigration destinations worldwide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, i) => (
              <Link
                key={country.name}
                to={country.path}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={country.img}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{country.flag}</span>
                    <h3 className="font-semibold text-white text-lg">{country.name}</h3>
                  </div>
                  <p className="text-blue-200 text-xs">{country.visa}</p>
                  <div className="mt-3 flex items-center gap-1 text-gold-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore visas <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE US ====== */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge bg-gold-500/20 text-gold-400 border border-gold-500/30 mb-4">
                <Shield size={14} />
                Why Clients Choose Us
              </div>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Your Trusted Partner in Every Step of Your Journey
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With over 15 years of specialized experience, our certified consultants provide transparent, personalized guidance with a proven track record of success.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Licensed & Certified', '10,000+ Clients', '95% Success Rate', '40+ Countries', '15+ Years Exp.', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-teal-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-gold">
                About Our Company <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-primary-600/20 group-hover:bg-primary-600 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300">
                    <item.icon size={20} className="text-primary-400 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge bg-primary-100 text-primary-700 mb-4 mx-auto">
              <Play size={14} />
              How It Works
            </div>
            <h2 className="section-title mb-4">Simple 4-Step Process</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Getting your visa has never been easier. Follow our streamlined process.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Discuss your requirements with our expert consultants for free.', icon: Phone },
              { step: '02', title: 'Document Review', desc: 'We review and prepare all necessary documents for your application.', icon: FileText },
              { step: '03', title: 'Application Submission', desc: 'We submit your application and track it in real-time.', icon: Globe2 },
              { step: '04', title: 'Visa Approved!', desc: 'Receive your visa and embark on your journey with confidence.', icon: CheckCircle },
            ].map((step, i) => (
              <div key={step.step} className="relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary-200 to-transparent z-0 -translate-x-4" />
                )}
                <div className="card p-6 text-center relative z-10">
                  <div className="inline-flex flex-col items-center mb-4">
                    <span className="text-primary-200 font-bold text-sm mb-2">{step.step}</span>
                    <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <step.icon size={26} className="text-primary-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge bg-yellow-100 text-yellow-700 mb-4 mx-auto">
              <Star size={14} />
              Client Stories
            </div>
            <h2 className="section-title mb-4">{t('testimonials')}</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Don't just take our word for it — hear from our satisfied clients around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t_item) => (
              <div key={t_item.name} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {Array(t_item.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <Quote size={24} className="text-primary-100" />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{t_item.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img src={t_item.img} alt={t_item.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
                      {t_item.name} <span>{t_item.flag}</span>
                    </div>
                    <div className="badge bg-primary-50 text-primary-600 text-xs mt-0.5 px-2 py-0.5">{t_item.visa}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== BLOG ====== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="badge bg-teal-100 text-teal-700 mb-4">
                <BookOpen size={14} />
                Knowledge Hub
              </div>
              <h2 className="section-title mb-2">{t('latest_news')}</h2>
              <p className="section-subtitle">Expert insights, guides, and immigration news.</p>
            </div>
            <Link to="/blog" className="btn-secondary hidden md:inline-flex">
              All Articles <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.path} to={post.path} className="card group overflow-hidden">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="badge bg-primary-100 text-primary-600 text-xs">{post.category}</span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-primary-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Read article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="btn-secondary">All Articles <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white mb-6 mx-auto border border-white/30">
            <Zap size={14} />
            Free Consultation Available
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Immigration Journey?
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Our expert consultants are ready to guide you through every step. Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold text-base py-4 px-8">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/4591783970"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 transition-all duration-200 inline-flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone size={18} />
              WhatsApp: +45 91 78 39 70
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
