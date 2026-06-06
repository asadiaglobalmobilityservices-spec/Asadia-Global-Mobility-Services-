import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, XCircle, ArrowRight, Globe2, Plane,
  GraduationCap, Building2, Briefcase, ArrowLeft, Zap,
  AlertCircle, Info
} from 'lucide-react';

const questions = [
  {
    id: 'purpose',
    question: 'What is the primary purpose of your travel?',
    options: [
      { value: 'visit', label: 'Tourism / Family Visit', icon: Plane },
      { value: 'study', label: 'Study / Education', icon: GraduationCap },
      { value: 'work', label: 'Work / Employment', icon: Building2 },
      { value: 'business', label: 'Business / Conference', icon: Briefcase },
      { value: 'immigration', label: 'Permanent Residency / Immigration', icon: Globe2 },
    ],
  },
  {
    id: 'destination',
    question: 'Where do you plan to go?',
    options: [
      { value: 'usa', label: '🇺🇸 United States (USA)', icon: null },
      { value: 'uk', label: '🇬🇧 United Kingdom', icon: null },
      { value: 'canada', label: '🇨🇦 Canada', icon: null },
      { value: 'schengen', label: '🇪🇺 Schengen / Europe', icon: null },
      { value: 'australia', label: '🇦🇺 Australia', icon: null },
      { value: 'other', label: '🌍 Other Country', icon: null },
    ],
  },
  {
    id: 'nationality',
    question: 'What is your current nationality?',
    options: [
      { value: 'pakistan', label: '🇵🇰 Pakistani', icon: null },
      { value: 'bangladesh', label: '🇧🇩 Bangladeshi', icon: null },
      { value: 'india', label: '🇮🇳 Indian', icon: null },
      { value: 'nigeria', label: '🇳🇬 Nigerian', icon: null },
      { value: 'azerbaijani', label: '🇦🇿 Azerbaijani', icon: null },
      { value: 'turkish', label: '🇹🇷 Turkish', icon: null },
      { value: 'romanian', label: '🇷🇴 Romanian', icon: null },
      { value: 'arab', label: '🌍 Arab Country', icon: null },
      { value: 'other', label: '🌏 Other', icon: null },
    ],
  },
  {
    id: 'employment',
    question: 'What is your current employment status?',
    options: [
      { value: 'employed', label: 'Employed (Full-time)', icon: null },
      { value: 'self-employed', label: 'Self-employed / Business Owner', icon: null },
      { value: 'student', label: 'Student', icon: null },
      { value: 'unemployed', label: 'Unemployed / Job Seeking', icon: null },
      { value: 'retired', label: 'Retired', icon: null },
    ],
  },
  {
    id: 'funds',
    question: 'How much savings / financial support do you have?',
    options: [
      { value: 'high', label: 'More than $10,000 / €10,000', icon: null },
      { value: 'medium', label: '$5,000 – $10,000 / €5,000–€10,000', icon: null },
      { value: 'low', label: '$2,000 – $5,000', icon: null },
      { value: 'very-low', label: 'Less than $2,000', icon: null },
      { value: 'sponsor', label: 'Sponsored by family/employer', icon: null },
    ],
  },
  {
    id: 'denial',
    question: 'Have you ever had a visa denied or been deported?',
    options: [
      { value: 'no', label: 'No — Clean immigration record', icon: null },
      { value: 'once', label: 'Yes — Once, minor issue', icon: null },
      { value: 'multiple', label: 'Yes — Multiple times', icon: null },
    ],
  },
];

type Answers = Record<string, string>;

function getResult(answers: Answers) {
  const { purpose, destination, funds, denial } = answers;

  let score = 0;
  let chances: 'excellent' | 'good' | 'fair' | 'challenging' = 'good';
  let visaType = '';
  let tips: string[] = [];
  let recommended: string[] = [];

  if (funds === 'high') score += 30;
  else if (funds === 'medium') score += 20;
  else if (funds === 'low') score += 10;
  else if (funds === 'sponsor') score += 15;

  if (denial === 'no') score += 30;
  else if (denial === 'once') score += 10;

  if (purpose === 'visit') {
    visaType = 'Tourist / Visitor Visa';
    tips = [
      'Strong bank statements are critical',
      'Employment letter is highly recommended',
      'Show ties to home country (property, family)',
      'Prepare a detailed travel itinerary',
    ];
  } else if (purpose === 'study') {
    visaType = 'Student Visa';
    tips = [
      'Get admission from a recognized institution first',
      'Prepare proof of financial support (tuition + living)',
      'Write a compelling Statement of Purpose (SOP)',
      'IELTS/TOEFL scores are typically required',
    ];
    score += 15;
  } else if (purpose === 'work') {
    visaType = 'Work Visa / Work Permit';
    tips = [
      'A job offer from an employer is usually required',
      'Skills and qualifications must meet destination requirements',
      'Language proficiency tests may be needed',
      'Check if your occupation is on the shortage list',
    ];
  } else if (purpose === 'business') {
    visaType = 'Business Visa';
    tips = [
      'Provide business registration documents',
      'Invitation letter from the host company is essential',
      'Show business ties in your home country',
      'Business bank statements strengthen the application',
    ];
    score += 10;
  } else if (purpose === 'immigration') {
    visaType = 'Permanent Residency / Immigration';
    tips = [
      'Research the points-based systems (Express Entry, etc.)',
      'Improve language test scores (IELTS)',
      'Get your credentials assessed',
      'Consider Provincial Nominee Programs (PNP)',
    ];
    score += 20;
  }

  if (destination === 'uk') recommended = ['UK Visit Visa', 'UK Skilled Worker', 'UK Student'];
  else if (destination === 'canada') recommended = ['Canada Tourist Visa', 'Canada Study Permit', 'Express Entry'];
  else if (destination === 'usa') recommended = ['B1/B2 Visa', 'F-1 Student Visa', 'H-1B Work Visa'];
  else if (destination === 'schengen') recommended = ['Schengen Type C', 'National Visa (Type D)'];
  else recommended = ['Tourist Visa', 'Work Visa', 'Student Visa'];

  if (score >= 60) chances = 'excellent';
  else if (score >= 40) chances = 'good';
  else if (score >= 25) chances = 'fair';
  else chances = 'challenging';

  return { chances, visaType, tips, recommended, score };
}

const chanceConfig = {
  excellent: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', icon: CheckCircle, label: 'Excellent Chances', desc: 'Your profile looks strong! With proper documentation, your chances of approval are high.' },
  good: { color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', icon: CheckCircle, label: 'Good Chances', desc: 'Your profile looks promising. With the right preparation and guidance, you have a good chance of approval.' },
  fair: { color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', icon: Info, label: 'Fair Chances', desc: 'Your profile has some strengths but also areas to improve. Professional guidance is strongly recommended.' },
  challenging: { color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', icon: AlertCircle, label: 'Needs Professional Help', desc: 'Your application may face challenges. Our expert consultants can significantly improve your approval chances.' },
};

export default function EligibilityPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const result = showResult ? getResult(answers) : null;
  const config = result ? chanceConfig[result.chances] : null;

  if (showResult && result && config) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">Your Eligibility Result</h1>
            <p className="text-gray-500">Based on your profile, here's our assessment:</p>
          </div>

          <div className={`rounded-2xl p-8 border-2 ${config.bg} ${config.border} mb-8 text-center`}>
            <config.icon size={48} className={`${config.color} mx-auto mb-4`} />
            <h2 className={`font-display text-3xl font-bold ${config.color} mb-3`}>{config.label}</h2>
            <p className="text-gray-700 text-lg mb-4">{config.desc}</p>
            <div className="inline-flex items-center gap-2 bg-white rounded-xl px-5 py-2.5 shadow-sm">
              <span className="text-gray-600 text-sm font-medium">Recommended visa:</span>
              <span className="font-bold text-gray-900">{result.visaType}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recommended Visa Types</h3>
              <div className="space-y-2">
                {result.recommended.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-teal-500" />
                    <span className="text-gray-700 text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Preparation Tips</h3>
              <div className="space-y-2">
                {result.tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2">
                    <Zap size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-8 text-center bg-gradient-to-br from-primary-50 to-teal-50 border-primary-200">
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
              Get Expert Guidance for Your Application
            </h3>
            <p className="text-gray-600 mb-6">
              Our certified consultants will review your full profile and provide a personalized strategy for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/4591783970" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => { setStep(0); setAnswers({}); setShowResult(false); }}
              className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"
            >
              <ArrowLeft size={14} /> Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <Zap size={14} />
            Free Eligibility Check
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-3">
            Which Visa Can I Get?
          </h1>
          <p className="text-blue-100 text-lg">
            Answer {questions.length} quick questions to find out which visa you qualify for and your chances of approval.
          </p>
        </div>
      </section>

      {/* Progress */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(step / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="card p-8">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-8 text-center">
              {current.question}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => handleAnswer(opt.value)}
                  className="flex items-center gap-3 p-4 border-2 border-gray-100 hover:border-primary-300 hover:bg-primary-50 rounded-xl transition-all duration-200 text-left group"
                >
                  {opt.icon && (
                    <div className="w-10 h-10 bg-primary-100 group-hover:bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                      <opt.icon size={20} className="text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                  )}
                  <span className="font-medium text-gray-700 group-hover:text-primary-700 transition-colors">{opt.label}</span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-6 flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm transition-colors"
              >
                <ArrowLeft size={14} /> Previous question
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
