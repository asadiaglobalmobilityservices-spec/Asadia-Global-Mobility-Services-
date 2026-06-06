import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Clock, DollarSign, Users,
  Star, FileText, Globe2, Shield, Zap, Award
} from 'lucide-react';

const countryData: Record<string, {
  name: string; flag: string; img: string; heroBg: string;
  intro: string; overview: string;
  visaTypes: { title: string; desc: string; fee: string; processing: string; requirements: string[] }[];
  requirements: string[];
  tips: string[];
  stats: { label: string; value: string }[];
}> = {
  usa: {
    name: 'United States',
    flag: '🇺🇸',
    img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroBg: 'from-blue-900 to-blue-700',
    intro: 'The land of opportunities — apply for your USA visa with expert guidance.',
    overview: 'The United States offers a wide range of visa categories for tourists, students, workers, and investors. As one of the most sought-after destinations, US visa applications require careful preparation and professional guidance to maximize your approval chances.',
    visaTypes: [
      { title: 'B1/B2 Tourist & Business Visa', desc: 'For tourism, family visits, and business trips.', fee: '$185 (MRV fee)', processing: '2–4 weeks', requirements: ['Valid passport', 'DS-160 form', 'Interview at US Embassy', 'Bank statements', 'Employment proof', 'Travel itinerary'] },
      { title: 'F-1 Student Visa', desc: 'For full-time students at accredited US institutions.', fee: '$160 + $350 SEVIS', processing: '3–5 weeks', requirements: ['I-20 form from school', 'SEVIS fee payment', 'Financial proof', 'Academic transcripts', 'English proficiency', 'Embassy interview'] },
      { title: 'H-1B Work Visa', desc: 'For specialty occupation workers sponsored by US employers.', fee: '$460–$730', processing: '3–6 months', requirements: ['Job offer from US employer', 'Bachelor\'s degree or equivalent', 'I-129 petition', 'Labor Condition Application', 'Specialty occupation proof'] },
    ],
    requirements: ['Valid passport (6+ months validity)', 'Completed visa application form', 'Passport-sized photographs', 'Proof of financial sufficiency', 'Purpose of travel documents', 'Ties to home country evidence'],
    tips: ['Apply at least 3 months in advance', 'Prepare strong financial documentation', 'Show strong ties to your home country', 'Be honest in your interview', 'Bring all original documents to the interview'],
    stats: [{ label: 'Success Rate', value: '85%' }, { label: 'Avg. Processing', value: '3 weeks' }, { label: 'Visa Validity', value: 'Up to 10 yrs' }, { label: 'Our Clients', value: '800+' }],
  },
  uk: {
    name: 'United Kingdom',
    flag: '🇬🇧',
    img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroBg: 'from-red-900 to-red-700',
    intro: 'Apply for your UK visa with professional guidance and high success rates.',
    overview: 'The UK operates a points-based immigration system offering visas for visitors, students, and skilled workers. Post-Brexit, the UK has introduced new immigration routes making it accessible to talent from around the world.',
    visaTypes: [
      { title: 'UK Standard Visitor Visa', desc: 'For tourism, family visits, and short business trips.', fee: '£115', processing: '3 weeks (standard)', requirements: ['Valid passport', 'Bank statements', 'Travel history', 'Accommodation proof', 'Return ticket', 'Sponsor letter (if visiting family)'] },
      { title: 'UK Student Visa (Tier 4)', desc: 'For studying at licensed UK institutions.', fee: '£490', processing: '3 weeks', requirements: ['CAS from licensed sponsor', 'Proof of funds', 'English language proof', 'Academic qualifications', 'TB test (if applicable)'] },
      { title: 'UK Skilled Worker Visa', desc: 'Work in the UK with an eligible job offer.', fee: '£625–£1,423', processing: '3 weeks', requirements: ['Job offer from UK sponsor', 'Certificate of Sponsorship', 'Meet salary threshold', 'English language', 'Points calculation (70 points)'] },
    ],
    requirements: ['Valid passport', 'Biometric information', 'Supporting documents for visa type', 'UK Visa & Immigration (UKVI) fee', 'Completed online application', 'Appointment at VFS / TLScontact'],
    tips: ['Apply via the official UK Visa and Immigration portal', 'Submit a complete application first time', 'Provide honest and consistent information', 'Financial documents should be recent (last 3-6 months)', 'Apply in advance — minimum 3 months recommended'],
    stats: [{ label: 'Success Rate', value: '92%' }, { label: 'Avg. Processing', value: '3 weeks' }, { label: 'Entry', value: 'Multiple' }, { label: 'Our Clients', value: '1,200+' }],
  },
  canada: {
    name: 'Canada',
    flag: '🇨🇦',
    img: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroBg: 'from-red-900 to-orange-700',
    intro: 'Canada welcomes immigrants — let us help you make Canada your new home.',
    overview: 'Canada is one of the most immigrant-friendly countries in the world. With the Express Entry system, Provincial Nominee Programs, and various study and work permits, Canada offers numerous pathways for immigration and temporary stays.',
    visaTypes: [
      { title: 'Canada Visitor Visa (TRV)', desc: 'For tourism, family visits, and short trips.', fee: 'CAD $100', processing: '2–8 weeks', requirements: ['Valid passport', 'Proof of funds', 'Return ticket', 'No immigration violations', 'Purpose of visit', 'Ties to home country'] },
      { title: 'Canada Study Permit', desc: 'For studying at Designated Learning Institutions (DLIs).', fee: 'CAD $150', processing: '4–12 weeks', requirements: ['Acceptance letter from DLI', 'Proof of financial support', 'Language test results', 'Medical exam (some cases)', 'Police clearance'] },
      { title: 'Express Entry (PR)', desc: 'Fast-track permanent residency for skilled workers.', fee: 'CAD $1,325', processing: '6 months', requirements: ['CRS score calculation', 'Language test (IELTS/CELPIP)', 'Educational credential assessment', 'Work experience proof', 'Job offer (beneficial)'] },
    ],
    requirements: ['Valid passport (6+ months)', 'Digital photograph', 'Proof of financial means', 'Travel history documents', 'Application forms', 'Biometrics (most applicants)'],
    tips: ['Start your application early — especially for study permits', 'Maintain strong financial documentation', 'Express Entry requires good IELTS scores', 'Consider PNP streams for easier pathways', 'Hire a Regulated Canadian Immigration Consultant (RCIC)'],
    stats: [{ label: 'Success Rate', value: '90%' }, { label: 'Avg. Processing', value: '4–8 weeks' }, { label: 'PR Pathway', value: 'Available' }, { label: 'Our Clients', value: '1,500+' }],
  },
  schengen: {
    name: 'Schengen Zone',
    flag: '🇪🇺',
    img: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroBg: 'from-blue-900 to-teal-700',
    intro: 'Explore 27 European countries with a single Schengen visa.',
    overview: 'The Schengen visa grants access to 27 European countries with one application. Whether for tourism, business, or short study, a Schengen visa opens doors to some of the most beautiful destinations in the world.',
    visaTypes: [
      { title: 'Schengen Type C (Short-Stay)', desc: 'For stays up to 90 days within any 180-day period.', fee: '€90 (adults)', processing: '15 calendar days', requirements: ['Valid passport (3+ months after return)', 'Travel insurance (€30,000 minimum)', 'Proof of accommodation', 'Flight itinerary', 'Bank statements', 'Purpose of visit'] },
      { title: 'Schengen Type D (National Visa)', desc: 'For stays exceeding 90 days (work, study, family).', fee: '€75–€100', processing: '4–6 weeks', requirements: ['Same as Type C plus:', 'Employment/study contract', 'Language proficiency', 'Additional country-specific docs'] },
    ],
    requirements: ['Valid passport (3+ months beyond return date)', 'Two recent passport photos', 'Travel insurance (€30,000 coverage)', 'Return flight reservation', 'Hotel/accommodation bookings', 'Bank statements (last 3-6 months)', 'Cover letter'],
    tips: ['Apply at the embassy of the country where you spend the most time', 'Apply minimum 15 days before travel', 'Your travel insurance must cover all Schengen countries', 'Show enough funds: ~€100/day minimum', 'A strong travel history helps significantly'],
    stats: [{ label: 'Success Rate', value: '88%' }, { label: 'Validity', value: 'Up to 5 yrs' }, { label: 'Countries', value: '27 nations' }, { label: 'Our Clients', value: '2,000+' }],
  },
};

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const data = country ? countryData[country] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Globe2 size={48} className="text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Country Not Found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${data.heroBg} py-24 relative overflow-hidden`}>
        <div className={`absolute inset-0 bg-cover bg-center opacity-15`} style={{ backgroundImage: `url(${data.img})` }} />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{data.flag}</span>
                <div className="badge bg-white/20 text-white border border-white/30">
                  {data.name} Visa Guide
                </div>
              </div>
              <h1 className="font-display text-5xl font-bold text-white mb-4 leading-tight">
                {data.name} Visa Services
              </h1>
              <p className="text-blue-100 text-xl leading-relaxed mb-8">{data.intro}</p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-gold">
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link to="/eligibility" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all inline-flex items-center gap-2">
                  Check Eligibility
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center">
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{data.overview}</p>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Available Visa Types</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.visaTypes.map((visa) => (
              <div key={visa.title} className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{visa.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{visa.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-primary-50 rounded-lg p-2.5">
                    <DollarSign size={14} className="text-primary-600 mb-1" />
                    <div className="text-xs text-gray-500">Fee</div>
                    <div className="font-semibold text-primary-700 text-sm">{visa.fee}</div>
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2.5">
                    <Clock size={14} className="text-teal-600 mb-1" />
                    <div className="text-xs text-gray-500">Processing</div>
                    <div className="font-semibold text-teal-700 text-sm">{visa.processing}</div>
                  </div>
                </div>
                <div className="space-y-1.5">
                  {visa.requirements.map((r) => (
                    <div key={r} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-xs">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="section-title mb-6">Document Requirements</h2>
              <div className="space-y-3">
                {data.requirements.map((r) => (
                  <div key={r} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <FileText size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-title mb-6">Expert Tips</h2>
              <div className="space-y-3">
                {data.tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-primary-50">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Apply for Your {data.name} Visa?
          </h2>
          <p className="text-blue-100 mb-8">
            Our {data.name} visa specialists are ready to guide you through the entire process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">
              Start Your Application <ArrowRight size={16} />
            </Link>
            <Link to="/eligibility" className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition-all inline-flex items-center gap-2">
              Check Eligibility First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
