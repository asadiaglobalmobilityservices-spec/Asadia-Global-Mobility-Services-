import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Calendar, Mail, Briefcase, CheckCircle,
  ArrowRight, Clock, Shield, AlertCircle, Zap
} from 'lucide-react';

const documentServices = [
  {
    id: 'file-prep',
    icon: FileText,
    title: 'Visa File Preparation',
    desc: 'We meticulously prepare your complete visa file — from gathering required documents to organizing and verifying every detail to meet embassy standards.',
    color: 'blue',
    features: [
      'Complete document checklist for your visa type',
      'Document gathering and organization',
      'Translation and notarization guidance',
      'Cover letter preparation',
      'Form filling and review',
      'Quality control before submission',
    ],
  },
  {
    id: 'appointment',
    icon: Calendar,
    title: 'Embassy Appointment Booking',
    desc: 'Securing a timely embassy appointment can be challenging. Our team handles the booking process for you, ensuring you get the earliest available slots.',
    color: 'teal',
    features: [
      'Priority appointment booking service',
      'VFS / TLScontact appointment management',
      'Rescheduling and cancellation support',
      'Biometrics appointment coordination',
      'Appointment reminders and guidance',
      'Emergency appointment assistance',
    ],
  },
  {
    id: 'invitation',
    icon: Mail,
    title: 'Invitation Letter Arrangement',
    desc: 'Need an invitation letter for your visa application? We provide professionally drafted and legally compliant invitation letters for personal, business, and academic visits.',
    color: 'gold',
    features: [
      'Personal invitation letters',
      'Business invitation letters',
      'University acceptance/invitation letters',
      'Conference and event invitation letters',
      'Notarized and apostilled documents',
      'Translation services (20+ languages)',
    ],
  },
  {
    id: 'work-permit',
    icon: Briefcase,
    title: 'Work Permit Assistance',
    desc: 'Navigating work permit requirements is complex. Our specialists guide you through the entire process — from eligibility assessment to submission and follow-up.',
    color: 'green',
    features: [
      'Work permit eligibility assessment',
      'Employer and employee documentation',
      'Labour Market Impact Assessment (LMIA) support',
      'Skills recognition and credential evaluation',
      'Work permit extension applications',
      'Post-approval settlement guidance',
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', icon: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' },
  teal: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', icon: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white' },
  gold: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', icon: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', icon: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white' },
};

export default function DocumentServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <FileText size={14} />
            Document Services
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Professional Document Services
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto">
            We handle all your visa documentation needs — from file preparation to embassy appointments and invitation letters.
          </p>
        </div>
      </section>

      {/* Why good docs matter */}
      <section className="py-16 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <AlertCircle size={24} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Why Proper Documentation Matters</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                Over 30% of visa rejections are due to incomplete or incorrectly prepared documentation. Our experienced team ensures your file is complete, accurate, and professionally presented to maximize your chances of approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {documentServices.map((service) => {
              const c = colorMap[service.color];
              return (
                <div key={service.id} id={service.id} className="card p-8 group scroll-mt-20">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${c.icon}`}>
                    <service.icon size={26} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <CheckCircle size={16} className="text-teal-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary">
                    Get This Service <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Document Process</h2>
            <p className="section-subtitle max-w-xl mx-auto">Streamlined, professional, and efficient.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assessment', desc: 'We assess your visa type and specific document requirements.', icon: Shield },
              { step: '2', title: 'Collection', desc: 'We provide a personalized checklist and collect your documents.', icon: FileText },
              { step: '3', title: 'Preparation', desc: 'Our experts prepare, review, and organize all documents professionally.', icon: Clock },
              { step: '4', title: 'Submission', desc: 'Documents are submitted on time with full tracking and follow-up.', icon: Zap },
            ].map((step) => (
              <div key={step.step} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <step.icon size={22} className="text-primary-600" />
                </div>
                <div className="text-primary-300 text-xs font-bold mb-1">STEP {step.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Get Your Documents Prepared?
          </h2>
          <p className="text-teal-100 mb-8">
            Contact us today for a free document assessment and get expert guidance.
          </p>
          <Link to="/contact" className="btn-gold">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
