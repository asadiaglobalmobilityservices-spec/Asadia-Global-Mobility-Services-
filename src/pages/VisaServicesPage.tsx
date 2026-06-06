import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Plane, GraduationCap, Building2, Globe2, FileText,
  CheckCircle, ArrowRight, Clock, DollarSign, Shield,
  Users, AlertCircle, Star, Zap
} from 'lucide-react';

const visaTypes = [
  {
    id: 'visit',
    icon: Plane,
    title: 'Visit Visa',
    subtitle: 'Tourism & Family Visits',
    color: 'blue',
    img: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Explore the world with confidence. Our visit visa service covers tourist visas, family reunion visits, and short-stay visas for top destinations including the USA, UK, Canada, and Schengen countries.',
    features: [
      'Tourist & holiday visa applications',
      'Family visit visa assistance',
      'Embassy appointment booking',
      'Document preparation & review',
      'Travel insurance guidance',
      'Itinerary and accommodation support',
    ],
    processing: '2–8 weeks',
    validity: 'Up to 10 years (varies)',
    fee: 'Starts from €99',
    countries: ['🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇪🇺 Schengen', '🇦🇺 Australia'],
  },
  {
    id: 'study',
    icon: GraduationCap,
    title: 'Study Visa',
    subtitle: 'Student Visa & Education',
    color: 'teal',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Pursue your education abroad with our comprehensive student visa service. From university selection and admission to visa application and pre-departure briefing — we handle everything.',
    features: [
      'University & college selection guidance',
      'Application & offer letter assistance',
      'Student visa documentation',
      'Financial proof guidance (bank statements)',
      'CAS/acceptance letter follow-up',
      'Pre-departure orientation',
    ],
    processing: '3–12 weeks',
    validity: 'Duration of course',
    fee: 'Starts from €149',
    countries: ['🇬🇧 UK', '🇨🇦 Canada', '🇺🇸 USA', '🇦🇺 Australia', '🇪🇺 Europe'],
  },
  {
    id: 'work',
    icon: Building2,
    title: 'Work Visa',
    subtitle: 'Employment & Work Permits',
    color: 'gold',
    img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Build your career abroad with our expert work visa consultancy. We assist skilled workers, IT professionals, healthcare workers, and tradespeople in securing work visas and employment authorization.',
    features: [
      'Skills assessment & eligibility check',
      'Employer sponsorship guidance',
      'Work permit application management',
      'IELTS/language requirement advice',
      'Job offer letter support',
      'Dependent visa for family members',
    ],
    processing: '4–16 weeks',
    validity: '1–5 years (renewable)',
    fee: 'Starts from €199',
    countries: ['🇬🇧 UK', '🇨🇦 Canada', '🇩🇪 Germany', '🇦🇺 Australia', '🇸🇪 Scandinavia'],
  },
  {
    id: 'business',
    icon: Globe2,
    title: 'Business Visa',
    subtitle: 'Corporate & Investor Visa',
    color: 'green',
    img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Unlock global business opportunities. Whether you\'re attending meetings, conferences, trade fairs, or looking to invest in a foreign country, we provide end-to-end business visa solutions.',
    features: [
      'Business visit visa applications',
      'Investor & entrepreneur visa',
      'Conference & trade fair visas',
      'Company registration support abroad',
      'Business plan preparation',
      'Multi-entry business visa',
    ],
    processing: '1–6 weeks',
    validity: 'Up to 5 years',
    fee: 'Starts from €149',
    countries: ['🇺🇸 USA', '🇬🇧 UK', '🇨🇳 China', '🇦🇪 UAE', '🇪🇺 Europe'],
  },
  {
    id: 'immigration',
    icon: FileText,
    title: 'Immigration Consultancy',
    subtitle: 'Permanent Residency & Citizenship',
    color: 'orange',
    img: 'https://images.pexels.com/photos/4427623/pexels-photo-4427623.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Planning to make a permanent move abroad? Our immigration consultancy service covers permanent residency, skilled migration, Express Entry, Points-Based Systems, and citizenship applications.',
    features: [
      'Permanent residency applications (PR)',
      'Express Entry / Points-Based System',
      'Family sponsorship immigration',
      'Refugee & asylum support',
      'Citizenship by naturalization',
      'Immigration appeals assistance',
    ],
    processing: '6 months – 3 years',
    validity: 'Permanent',
    fee: 'Custom quote',
    countries: ['🇨🇦 Canada', '🇦🇺 Australia', '🇳🇿 New Zealand', '🇩🇪 Germany', '🇵🇹 Portugal'],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'bg-blue-100 text-blue-600' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', icon: 'bg-teal-100 text-teal-600' },
  gold: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: 'bg-yellow-100 text-yellow-600' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'bg-green-100 text-green-600' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', icon: 'bg-orange-100 text-orange-600' },
};

export default function VisaServicesPage() {
  const location = useLocation();
  const hash = location.hash.replace('#', '');

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <Plane size={14} />
            Visa Services
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Comprehensive Visa Services
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
            Expert guidance for all types of visas — visit, study, work, business, and immigration consultancy with a 95% success rate.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {visaTypes.map((v) => (
              <a key={v.id} href={`#${v.id}`} className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200">
                {v.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Visa type sections */}
      {visaTypes.map((visa, i) => {
        const c = colorMap[visa.color];
        return (
          <section id={visa.id} key={visa.id} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} scroll-mt-20`}>
            <div className="max-w-7xl mx-auto px-4">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className={`badge ${c.bg} ${c.text} mb-4`}>
                    <visa.icon size={14} />
                    {visa.subtitle}
                  </div>
                  <h2 className="section-title mb-4">{visa.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{visa.desc}</p>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { icon: Clock, label: 'Processing', value: visa.processing },
                      { icon: Shield, label: 'Validity', value: visa.validity },
                      { icon: DollarSign, label: 'Fee', value: visa.fee },
                    ].map((info) => (
                      <div key={info.label} className={`${c.bg} rounded-xl p-3 border ${c.border}`}>
                        <info.icon size={16} className={`${c.text} mb-1`} />
                        <div className="text-xs text-gray-500">{info.label}</div>
                        <div className={`text-sm font-semibold ${c.text}`}>{info.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {visa.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {visa.countries.map((c) => (
                      <span key={c} className="badge bg-gray-100 text-gray-600 text-sm">{c}</span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Link to="/contact" className="btn-primary">
                      Apply Now <ArrowRight size={16} />
                    </Link>
                    <Link to="/eligibility" className="btn-secondary">
                      Check Eligibility
                    </Link>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                  <img
                    src={visa.img}
                    alt={visa.title}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Not Sure Which Visa You Need?
          </h2>
          <p className="text-blue-100 mb-8">
            Use our free eligibility checker or speak with one of our expert consultants today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/eligibility" className="btn-gold">
              Free Eligibility Check <Zap size={16} />
            </Link>
            <Link to="/contact" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all inline-flex items-center gap-2">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
