import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisaServicesPage from './pages/VisaServicesPage';
import DocumentServicesPage from './pages/DocumentServicesPage';
import TravelServicesPage from './pages/TravelServicesPage';
import EducationServicesPage from './pages/EducationServicesPage';
import EmbassyPage from './pages/EmbassyPage';
import ContactPage from './pages/ContactPage';
import CountryPage from './pages/CountryPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import EligibilityPage from './pages/EligibilityPage';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="font-display text-8xl font-bold text-primary-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">Go to Homepage</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services/visa" element={<VisaServicesPage />} />
              <Route path="/services/documents" element={<DocumentServicesPage />} />
              <Route path="/services/travel" element={<TravelServicesPage />} />
              <Route path="/services/education" element={<EducationServicesPage />} />
              <Route path="/services" element={<VisaServicesPage />} />
              <Route path="/countries/:country" element={<CountryPage />} />
              <Route path="/countries" element={<HomePage />} />
              <Route path="/embassy" element={<EmbassyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/eligibility" element={<EligibilityPage />} />
              <Route path="/privacy" element={<NotFound />} />
              <Route path="/terms" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
