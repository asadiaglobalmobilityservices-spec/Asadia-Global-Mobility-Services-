import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Clock, ArrowRight, Tag, Search, User, Calendar
} from 'lucide-react';

const posts = [
  {
    slug: 'canada-study-visa-2026',
    title: 'How to Get a Canada Study Visa in 2026: Complete Step-by-Step Guide',
    excerpt: 'Everything you need to know about applying for a Canadian student visa, from eligibility requirements to document preparation and interview tips. Updated for 2026.',
    content: `
      Canada remains one of the top destinations for international students, offering world-class universities and post-graduation work opportunities. The Canada Study Permit is your key to studying at a Designated Learning Institution (DLI).

      ## Who is Eligible?

      To apply for a Canadian Study Permit, you need:
      - An acceptance letter from a DLI in Canada
      - Proof of financial support (tuition + living expenses)
      - A clean immigration record
      - Intent to leave Canada after your studies

      ## Required Documents

      1. Valid passport (6+ months beyond end of study)
      2. Letter of Acceptance from the DLI
      3. Proof of funds (bank statements for last 6 months)
      4. Language test results (IELTS/TOEFL)
      5. Statement of Purpose (SOP)
      6. Police clearance certificate
      7. Medical examination (if required)

      ## Application Process

      The process involves creating an account on IRCC (Immigration, Refugees and Citizenship Canada) portal, completing the application form, uploading documents, paying the fee (CAD $150), and submitting biometrics.

      ## Tips for Success

      - Apply at least 3–4 months before your program starts
      - Demonstrate strong ties to your home country
      - Show sufficient funds beyond tuition fees
      - Write a compelling SOP explaining your study plans

      Contact Asadia Global for professional assistance with your Canada study visa application.
    `,
    category: 'Study Visa',
    author: 'Diana Leli',
    date: '2026-05-20',
    readTime: '8 min read',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Canada', 'Study Visa', 'Student', '2026'],
    featured: true,
  },
  {
    slug: 'schengen-visa-requirements',
    title: 'Schengen Visa Requirements 2026: A Complete Guide to 27 European Countries',
    excerpt: 'Your complete guide to Schengen visa types, required documents, application process, and professional tips to get your European visa approved.',
    content: `
      The Schengen Area comprises 27 European countries that have abolished passport controls at their mutual borders. A single Schengen visa allows travel to all member states.

      ## Types of Schengen Visas

      - **Type A** (Airport Transit): For transiting through international airports
      - **Type C** (Short-Stay): For stays up to 90 days in any 180-day period
      - **Type D** (National/Long-Stay): For stays beyond 90 days

      ## Required Documents

      1. Valid passport (3+ months beyond return date)
      2. Two biometric photos (3.5cm x 4.5cm)
      3. Completed visa application form
      4. Travel insurance (€30,000 minimum coverage)
      5. Round-trip flight reservation
      6. Proof of accommodation (hotel bookings)
      7. Bank statements (last 3-6 months)
      8. Cover letter explaining purpose of travel

      ## Processing Time

      Standard processing time is 15 calendar days. You can apply up to 6 months before travel, but minimum 15 days in advance.

      ## Financial Requirements

      Most Schengen countries require proof of sufficient funds:
      - Approximately €100 per day per person
      - Or an invitation letter from a EU sponsor

      Contact our Schengen visa specialists for expert assistance.
    `,
    category: 'Schengen',
    author: 'Asad Malik',
    date: '2026-05-10',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Schengen', 'Europe', 'Tourist Visa'],
    featured: false,
  },
  {
    slug: 'uk-skilled-worker-visa-2026',
    title: 'UK Skilled Worker Visa 2026: Complete Guide to Requirements & Application',
    excerpt: 'The UK Skilled Worker Visa has seen significant updates in 2026. Here\'s everything you need to know about eligibility, salary requirements, and how to apply successfully.',
    content: `
      The UK Skilled Worker Visa replaced the old Tier 2 (General) work visa and is the primary route for skilled workers to work in the United Kingdom. The points-based system assigns points for salary, job type, and English language.

      ## Key Requirements (70 Points Needed)

      Mandatory (50 points):
      - Job offer from approved UK employer (20 points)
      - Job at appropriate skill level RQF 3+ (20 points)
      - English language requirement B1 (10 points)

      Tradeable (20 points from the following):
      - Meeting salary threshold of £38,700 (20 points)
      - Working in a shortage occupation (20 points)
      - PhD relevant to job (10 points)

      ## Application Process

      1. Get a Certificate of Sponsorship (CoS) from your employer
      2. Check if you have enough points
      3. Apply online at least 3 months before start date
      4. Pay the Immigration Health Surcharge (IHS)
      5. Submit biometrics and documents
      6. Wait for decision (typically 3 weeks)

      ## Salary Threshold 2026

      The general threshold is £38,700/year. Some occupations (nurses, teachers) have lower thresholds. Check the official occupation code list for your specific role.

      Contact our UK visa specialists for personalized guidance.
    `,
    category: 'Work Visa',
    author: 'Diana Sereda',
    date: '2026-04-28',
    readTime: '7 min read',
    img: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UK', 'Work Visa', 'Skilled Worker', '2026'],
    featured: false,
  },
  {
    slug: 'usa-tourist-visa-tips',
    title: 'Top 10 Tips to Get Your USA B1/B2 Tourist Visa Approved in 2026',
    excerpt: 'US tourist visa denials are common, but with the right preparation, you can significantly boost your approval chances. Our experts share their top 10 proven tips.',
    content: `
      The US B1/B2 visa is one of the most applied-for but also one of the most scrutinized visas in the world. Immigration officers assess your intent and ties to your home country carefully.

      ## Top 10 Tips

      1. **Strong financial documentation**: Show 3-6 months of bank statements with consistent balance
      2. **Employment letter**: Get a strong letter from your employer with leave approval
      3. **Property/assets**: Documents showing ownership of property or assets in home country
      4. **Family ties**: Evidence of family members staying behind (spouse, children)
      5. **Clear purpose**: A detailed itinerary and clear explanation of why you're visiting
      6. **Travel history**: Previous travel to other countries strengthens your application
      7. **DS-160 accuracy**: Fill the form accurately — any inconsistencies can lead to rejection
      8. **Interview preparation**: Practice common interview questions with our consultants
      9. **Dress professionally**: First impressions matter at the interview
      10. **Don't overstay previous visas**: Any immigration violations are serious red flags

      Our USA visa specialists help you prepare a strong application. Contact us today.
    `,
    category: 'Visit Visa',
    author: 'Gülşah',
    date: '2026-04-15',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['USA', 'Tourist Visa', 'Tips', 'B1/B2'],
    featured: false,
  },
  {
    slug: 'canada-express-entry-guide',
    title: 'Canada Express Entry 2026: How to Maximize Your CRS Score',
    excerpt: 'The Comprehensive Ranking System (CRS) determines who gets invited to apply for Canadian permanent residency. Learn how to boost your score.',
    content: `
      Express Entry is Canada's flagship immigration system for skilled workers. Understanding how the CRS score works can help you strategically position your profile for an ITA (Invitation to Apply).

      ## CRS Score Breakdown

      The maximum CRS score is 1,200 points. Key factors:
      - **Core/Human Capital** (up to 500 pts): Age, education, language
      - **Spouse factors** (up to 40 pts): Language, education
      - **Skill Transferability** (up to 100 pts): Combination of education, work experience, and language
      - **Additional Factors** (up to 600 pts): Provincial nomination (600 pts), arranged employment (50-200 pts)

      ## How to Boost Your Score

      1. Improve your IELTS/CELPIP score — each band increase = significant points
      2. Get a Canadian or foreign post-secondary credential assessment (ECA)
      3. Gain additional years of work experience
      4. Secure a provincial nomination through a PNP stream (instant +600 points)
      5. Get a valid job offer from a Canadian employer

      ## Current CRS Cut-offs

      Typical draw scores range from 450–520 for the general pool. However, PNP-specific and category-based draws can have lower minimums.

      Contact our Canadian immigration specialists to create a strategic profile.
    `,
    category: 'Immigration',
    author: 'Asad Malik',
    date: '2026-04-01',
    readTime: '9 min read',
    img: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Canada', 'Express Entry', 'PR', 'Immigration'],
    featured: false,
  },
  {
    slug: 'uk-student-visa-guide',
    title: 'UK Student Visa 2026: Requirements, Process & Common Mistakes to Avoid',
    excerpt: 'Planning to study in the UK? Our comprehensive guide covers everything from CAS to biometrics, financial requirements, and what not to do.',
    content: `
      The UK Student Visa (formerly Tier 4) allows international students to study at UK institutions. With the right preparation, the process is straightforward.

      ## Key Requirements

      1. Unconditional offer from a licensed UK sponsor
      2. CAS (Confirmation of Acceptance for Studies) reference number
      3. Proof of English language proficiency (IELTS Academic 5.5+)
      4. Financial requirements: £1,334/month for London, £1,023/month outside
      5. ATAS clearance (for certain courses)
      6. Tuberculosis test (if from a high TB prevalence country)

      ## Common Mistakes to Avoid

      - Not having sufficient funds in account for 28 consecutive days before application
      - Applying with incorrect IELTS scores for the course level
      - Late application (apply at least 3 months before course start)
      - Incorrect CAS reference number or expired CAS
      - Not accounting for maintenance funds for the entire course

      Contact Diana Leli, our UK study visa specialist, for personalized guidance.
    `,
    category: 'Study Visa',
    author: 'Diana Leli',
    date: '2026-03-15',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UK', 'Student Visa', 'Study Abroad'],
    featured: false,
  },
];

const categories = ['All', 'Study Visa', 'Work Visa', 'Visit Visa', 'Schengen', 'Immigration', 'Business Visa'];

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-primary-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="badge bg-white/20 text-white border border-white/30 mb-4 mx-auto">
            <BookOpen size={14} />
            Immigration Knowledge Hub
          </div>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Visa & Immigration Blog
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
            Expert guides, visa updates, country-specific tips, and immigration news to help you navigate your journey.
          </p>
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 text-base"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && !search && featured && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-6">
              <span className="badge bg-gold-100 text-gold-700">
                <Tag size={12} />
                Featured Article
              </span>
            </div>
            <Link to={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 card overflow-hidden p-0">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="badge bg-primary-100 text-primary-700 mb-4">{featured.category}</span>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime}</span>
                </div>
                <span className="btn-primary w-fit">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No articles found for your search.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="text-primary-600 text-sm mt-2 hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="card group overflow-hidden">
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
                      <span className="text-gray-400 text-xs flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1"><User size={12} />{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
