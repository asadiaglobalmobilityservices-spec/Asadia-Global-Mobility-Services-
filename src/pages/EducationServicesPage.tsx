import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap, BookOpen, FileText, Award, CheckCircle,
  ArrowRight, Globe2, Star, Zap, Users, DollarSign
} from 'lucide-react';

const services = [
  {
    id: 'scholarship',
    icon: Award,
    title: 'Scholarship Information',
    desc: 'Explore fully-funded and partial scholarships for international students. We research and identify opportunities that match your academic profile and destination country.',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'Government and university scholarships',
      'Fully-funded scholarship research',
      'Scholarship eligibility assessment',
      'Application guidance and support',
      'Deadline tracking and reminders',
      'Award comparison and selection',
    ],
  },
  {
    id: 'admission',
    icon: GraduationCap,
    title: 'University Admission Guidance',
    desc: 'Navigate the complex university application process with confidence. Our education consultants guide you from selecting the right university to receiving your offer letter.',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'University shortlisting based on profile',
      'Program and course selection guidance',
      'Application form submission',
      'Conditional offer negotiation',
      'English language test preparation (IELTS/TOEFL)',
      'Enrollment and pre-departure support',
    ],
  },
  {
    id: 'sop-cv',
    icon: FileText,
    title: 'SOP / CV / Essay Preparation',
    desc: 'Stand out from thousands of applicants with a compelling Statement of Purpose, professional CV, and university essays crafted by our experienced academic writers.',
    img: 'https://images.pexels.com/photos/4427623/pexels-photo-4427623.jpeg?auto=compress&cs=tinysrgb&w=600',
    features: [
      'Professional Statement of Purpose (SOP)',
      'Academic CV and resume writing',
      'Personal statement for UK universities',
      'Scholarship essay preparation',
      'Letter of Motivation (LOM)',
      'Reference letter guidance',
    ],
  },
];

const topUniversities = [
  { name: 'University of Toronto', country: 'Canada', flag: '🇨🇦', rank: '#1 in Canada' },
  { name: 'University of Oxford', country: 'UK', flag: '🇬🇧', rank: '#1 in UK' },
  { name: 'Harvard University', country: 'USA', flag: '🇺🇸', rank: '#1 in USA' },
  { name: 'TU Munich', country: 'Germany', flag: '🇩🇪', rank: '#1 in Germany' },
  { name: 'University of Melbourne', country: 'Australia', flag: '🇦🇺', rank: '#1 in Australia' },
  { name: 'ETH Zurich', country: 'Switzerland', flag: '🇨🇭', rank: '#1 in Switzerland' },
];

const scholarships = [
  { name: 'Chevening Scholarship', country: 'UK', flag: '🇬🇧', value: 'Fully Funded', type: 'Government' },
  { name: 'Vanier Canada Graduate', country: 'Canada', flag: '🇨🇦', value: 'CAD 50,000/yr', type: 'Government' },
  { name: 'Fulbright Program', country: 'USA', flag: '🇺🇸', value: 'Fully Funded', type: 'Government' },
  { name: 'DAAD Scholarship', country: 'Germany', flag: '🇩🇪', value: 'Fully Funded', type: 'Government' },
  { name: 'Australia Awards', country: 'Australia', flag: '🇦🇺', value: 'Fully Funded', type: 'Government' },
  { name: 'Erasmus+ Programme', country: 'Europe', flag: '🇪🇺', value: '€500–€1500/mo', type: 'European' },
];

export default function EducationServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-white/20 text-white border border-white/30 mb-4">
                <GraduationCap size={14} />
                Education Services
              </div>
              <h1 className="font-display text-5xl font-bold text-white mb-4 leading-tight">
                Shape Your Future with Quality Education Abroad
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed mb-8">
                From scholarship research to university admission and visa — we guide you through every step of your international education journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">
                  Get Education Consultation <ArrowRight size={16} />
                </Link>
                <Link to="/eligibility" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all inline-flex items-center gap-2">
                  Check Eligibility
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Globe2, value: '50+', label: 'Countries' },
                { icon: GraduationCap, value: '500+', label: 'Universities' },
                { icon: Award, value: '100+', label: 'Scholarships' },
                { icon: Users, value: '3,000+', label: 'Students Guided' },
                { icon: Star, value: '95%', label: 'Admit Rate' },
                { icon: DollarSign, value: '$2M+', label: 'Scholarships Won' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <stat.icon size={20} className="text-gold-400 mx-auto mb-1.5" />
                  <div className="font-bold text-white text-xl">{stat.value}</div>
                  <div className="text-blue-200 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, i) => (
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
                    Get This Service <ArrowRight size={16} />
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

      {/* Scholarships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge bg-gold-100 text-gold-700 mb-4 mx-auto">
              <Award size={14} />
              Funding Opportunities
            </div>
            <h2 className="section-title mb-4">Top Scholarships We Help With</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              We've helped students win millions in scholarships. Here are some of the top programs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scholarships.map((s) => (
              <div key={s.name} className="card p-5 flex items-start gap-4">
                <span className="text-3xl">{s.flag}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{s.name}</h3>
                  <div className="text-gray-500 text-xs mb-2">{s.country} · {s.type}</div>
                  <span className="badge bg-green-100 text-green-700 text-xs">{s.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/contact" className="btn-primary">
              Explore All Scholarships <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="badge bg-primary-100 text-primary-700 mb-4 mx-auto">
              <BookOpen size={14} />
              Partner Institutions
            </div>
            <h2 className="section-title mb-4">Top Universities We Work With</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topUniversities.map((uni) => (
              <div key={uni.name} className="card p-4 flex items-center gap-4">
                <div className="text-3xl">{uni.flag}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{uni.name}</h3>
                  <div className="text-gray-500 text-xs">{uni.country}</div>
                  <span className="badge bg-primary-50 text-primary-600 text-xs mt-1">{uni.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
