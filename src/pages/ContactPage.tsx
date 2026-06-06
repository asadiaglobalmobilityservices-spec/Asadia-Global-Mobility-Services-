import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle,
  Send, CheckCircle, Calendar, User, Globe2, FileText, ArrowRight
} from 'lucide-react';

const services = [
  'Visit Visa', 'Study Visa', 'Work Visa', 'Business Visa',
  'Immigration Consultancy', 'Document Services', 'Travel Services',
  'Education Services', 'Embassy Appointment', 'Other',
];

const team = [
  { name: 'Asad Malik', role: 'Founder', email: 'founder@asadiaglobal.com', phone: '+45 91 78 39 75', specialty: 'All Services' },
  { name: 'Diana Leli', role: 'Study Visa Specialist', email: 'study@asadiaglobal.com', specialty: 'Study Visa' },
  { name: 'Diana Sereda', role: 'Work Visa Specialist', email: 'work@asadiaglobal.com', specialty: 'Work Visa' },
  { name: 'Yavuz Ruslan', role: 'Business Visa Specialist', email: 'business@asadiaglobal.com', phone: '+994 55 601 15 39', specialty: 'Business Visa' },
  { name: 'Gülşah', role: 'Visit Visa Specialist', email: 'visit@asadiaglobal.com', specialty: 'Visit Visa' },
  { name: 'Farhat', role: 'Information & Support', email: 'info@asadiaglobal.com', specialty: 'General Inquiries' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', nationality: '',
    destination: '', service: '', date: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <MessageCircle size={14} />
            Get in Touch
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Contact & Book a Consultation
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Reach out to our expert team for a free consultation. We respond within 2 hours.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                label: 'Call Us',
                value: '+45 91 78 39 70',
                sub: '+45 91 78 39 75 (Asad)',
                href: 'tel:+4591783970',
                color: 'text-primary-600',
                bg: 'bg-primary-50',
              },
              {
                icon: MessageCircle,
                label: 'WhatsApp',
                value: '+45 91 78 39 70',
                sub: 'Available 24/7',
                href: 'https://wa.me/4591783970',
                color: 'text-green-600',
                bg: 'bg-green-50',
              },
              {
                icon: Mail,
                label: 'Email Us',
                value: 'info@asadiaglobal.com',
                sub: 'Reply within 2 hours',
                href: 'mailto:info@asadiaglobal.com',
                color: 'text-teal-600',
                bg: 'bg-teal-50',
              },
              {
                icon: MapPin,
                label: 'Our Office',
                value: 'Copenhagen, Denmark',
                sub: 'Mon–Sat: 9 AM – 6 PM',
                href: '#map',
                color: 'text-gold-600',
                bg: 'bg-yellow-50',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card p-5 flex items-start gap-4 hover:border-primary-200 group"
              >
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-primary-600 transition-colors">{item.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Book a Free Consultation</h2>
                <p className="text-gray-500 mb-6">Fill in your details and we'll get back to you within 2 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Consultation Booked!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you, {form.name}! Our team will contact you at <strong>{form.email}</strong> within 2 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', nationality: '', destination: '', service: '', date: '', message: '' }); }}
                      className="btn-primary"
                    >
                      Book Another Consultation
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 234 567 8900"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Nationality</label>
                        <input
                          name="nationality"
                          value={form.nationality}
                          onChange={handleChange}
                          placeholder="e.g. Pakistani"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed *</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Destination Country</label>
                        <input
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          placeholder="e.g. United Kingdom"
                          className="input-field"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Consultation Date</label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message / Details</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your visa requirements, travel plans, or any questions..."
                        className="input-field resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Book Free Consultation
                        </span>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-primary-600" />
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', time: '10:00 AM – 3:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-gray-600">{h.day}</span>
                      <span className={`font-medium ${h.time === 'Closed' ? 'text-red-500' : 'text-gray-900'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MessageCircle size={14} className="text-green-500" />
                    WhatsApp support available 24/7
                  </div>
                </div>
              </div>

              {/* Team Contacts */}
              <div className="card p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User size={18} className="text-primary-600" />
                  Specialist Contacts
                </h3>
                <div className="space-y-3">
                  {team.map((m) => (
                    <div key={m.email} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-medium text-gray-900 text-sm">{m.name}</span>
                        <span className="badge bg-primary-50 text-primary-600 text-xs">{m.specialty}</span>
                      </div>
                      <a href={`mailto:${m.email}`} className="text-xs text-primary-600 hover:underline">{m.email}</a>
                      {m.phone && <div className="text-xs text-gray-500 mt-0.5">{m.phone}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/4591783970"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-600 hover:bg-green-700 rounded-2xl p-5 text-white transition-all group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="font-semibold">Chat on WhatsApp</div>
                  <div className="text-green-100 text-sm">+45 91 78 39 70</div>
                </div>
                <ArrowRight size={18} className="ml-auto opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
