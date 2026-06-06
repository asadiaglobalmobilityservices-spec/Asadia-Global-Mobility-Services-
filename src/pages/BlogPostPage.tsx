import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Clock, User, Calendar, Tag, Share2,
  MessageCircle, ArrowRight, BookOpen
} from 'lucide-react';

const posts: Record<string, {
  title: string; content: string; category: string; author: string;
  date: string; readTime: string; img: string; tags: string[];
}> = {
  'canada-study-visa-2026': {
    title: 'How to Get a Canada Study Visa in 2026: Complete Step-by-Step Guide',
    category: 'Study Visa',
    author: 'Diana Leli',
    date: '2026-05-20',
    readTime: '8 min read',
    img: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Canada', 'Study Visa', 'Student', '2026'],
    content: `Canada remains one of the top destinations for international students, offering world-class universities and post-graduation work opportunities. The Canada Study Permit is your key to studying at a Designated Learning Institution (DLI).

**Who is Eligible?**

To apply for a Canadian Study Permit, you need an acceptance letter from a DLI in Canada, proof of financial support covering tuition and living expenses, a clean immigration record, and demonstrated intent to leave Canada after your studies.

**Required Documents**

1. Valid passport (6+ months beyond end of study period)
2. Letter of Acceptance from the DLI
3. Proof of sufficient funds (bank statements for last 6 months)
4. Language test results (IELTS Academic or TOEFL)
5. Well-written Statement of Purpose (SOP)
6. Police clearance certificate
7. Medical examination (if required by IRCC)
8. Two biometric passport photos

**Application Process**

The process involves:
- Creating an account on IRCC (Immigration, Refugees and Citizenship Canada) portal
- Completing the online application form (IMM 1294)
- Uploading all required documents in PDF format
- Paying the application fee (CAD $150)
- Submitting biometrics at a VFS centre
- Waiting for processing (4–12 weeks)

**Financial Requirements**

You must show you have enough money to pay for:
- Your tuition fees for the first year
- Living expenses: CAD $10,000/year outside Quebec, CAD $11,000/year in Quebec
- Return transportation

**Tips for Success**

- Apply at least 3–4 months before your program starts
- Demonstrate strong ties to your home country (family, property, employment)
- Show sufficient funds beyond just tuition fees
- Write a compelling SOP explaining your study plans and why you chose Canada
- Ensure all documents are translated by certified translators if not in English/French

**Post-Graduation Work Permit (PGWP)**

One of Canada's biggest advantages is the Post-Graduation Work Permit, which allows you to work in Canada for up to 3 years after graduation. This is a pathway to Canadian permanent residency through Express Entry.

Contact Asadia Global for professional assistance with your Canada study visa application.`,
  },
  'schengen-visa-requirements': {
    title: 'Schengen Visa Requirements 2026: A Complete Guide to 27 European Countries',
    category: 'Schengen',
    author: 'Asad Malik',
    date: '2026-05-10',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Schengen', 'Europe', 'Tourist Visa'],
    content: `The Schengen Area comprises 27 European countries that have abolished passport controls at their mutual borders. A single Schengen visa allows travel to all member states for up to 90 days in any 180-day period.

**Types of Schengen Visas**

- **Type A** (Airport Transit Visa): For transiting through international airports in the Schengen Zone without entering the country
- **Type C** (Short-Stay Visa): The most common type — allows stays up to 90 days in any 180-day period for tourism, business, or family visits
- **Type D** (National/Long-Stay Visa): For stays exceeding 90 days, such as work, study, or family reunification

**Required Documents**

1. Valid passport with at least 2 blank pages (must be valid for 3+ months beyond your return date)
2. Two recent biometric photographs (3.5cm x 4.5cm, white background)
3. Completed Schengen visa application form
4. Travel insurance covering all Schengen countries with minimum €30,000 coverage
5. Round-trip flight reservation (not necessarily a purchased ticket)
6. Proof of accommodation (hotel bookings or invitation letter)
7. Bank statements for the last 3-6 months
8. Cover letter explaining the purpose and itinerary of your trip
9. Employment letter or business registration (for self-employed)
10. Proof of ties to home country (property, family, employment)

**Where to Apply**

Apply at the embassy of the Schengen country where you will spend the most time. If spending equal time in multiple countries, apply at the embassy of your first entry point.

**Financial Requirements**

Most Schengen countries require approximately €100 per day per person. If staying with a host, provide their invitation letter and proof of their financial situation.

**Processing Time**

Standard processing time is 15 calendar days. You can apply up to 6 months before travel, but you must apply at least 15 days before your planned departure.

Contact Asadia Global's Schengen visa specialists for professional assistance.`,
  },
  'uk-skilled-worker-visa-2026': {
    title: 'UK Skilled Worker Visa 2026: Complete Guide to Requirements & Application',
    category: 'Work Visa',
    author: 'Diana Sereda',
    date: '2026-04-28',
    readTime: '7 min read',
    img: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['UK', 'Work Visa', 'Skilled Worker', '2026'],
    content: `The UK Skilled Worker Visa replaced the old Tier 2 (General) work visa and is the primary route for skilled workers to work in the United Kingdom. The points-based system assigns points for salary, job type, and English language skills.

**Points Requirement**

You need 70 points to qualify:

*Mandatory (50 points):*
- Job offer from Home Office approved UK employer (20 points)
- Job at appropriate skill level RQF 3 or above (20 points)
- English language requirement B1 level (10 points)

*Tradeable Points (20 points needed from):*
- Meeting general salary threshold of £38,700/year (20 points)
- Working in a shortage occupation (20 points)
- PhD relevant to the job (10 points)
- PhD in STEM subject (20 points)

**Application Process**

1. Receive a Certificate of Sponsorship (CoS) from your UK employer
2. Check if you qualify using the UK government's online tool
3. Apply online at least 3 months before your start date
4. Pay the visa fee (£625 for up to 3 years, £1,235 for over 3 years)
5. Pay the Immigration Health Surcharge (IHS) — £1,035/year for 2026
6. Submit biometrics and supporting documents
7. Wait for decision (typically 3 weeks)

**Salary Threshold 2026**

The general threshold was raised to £38,700/year. Some shortage occupation roles have lower thresholds. Check the Appendix Skilled Occupations list for your SOC code.

**Permitted Activities**

With a Skilled Worker visa, you can:
- Work for your sponsor in the permitted role
- Take on supplementary employment in the same occupation
- Study (subject to conditions)
- Be joined by dependants (family members)

Contact Diana Sereda at work@asadiaglobal.com for personalized UK work visa guidance.`,
  },
  'usa-tourist-visa-tips': {
    title: 'Top 10 Tips to Get Your USA B1/B2 Tourist Visa Approved in 2026',
    category: 'Visit Visa',
    author: 'Gülşah',
    date: '2026-04-15',
    readTime: '5 min read',
    img: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['USA', 'Tourist Visa', 'Tips', 'B1/B2'],
    content: `The US B1/B2 visa is one of the most applied-for but also one of the most scrutinized visas. Here are our top 10 professional tips to improve your approval chances.

**Tip 1: Strong Financial Documentation**
Show 3-6 months of bank statements with consistent balances. Sudden large deposits are red flags. Your funds should comfortably cover your trip and demonstrate you have stable finances at home.

**Tip 2: Employment Letter**
Get a strong letter from your employer confirming your position, salary, approved leave, and expected return date. This is one of the most important documents.

**Tip 3: Property and Assets**
Documents showing ownership of property, vehicles, or business assets in your home country demonstrate strong ties that motivate you to return.

**Tip 4: Family Ties**
Evidence of immediate family members (spouse, children, parents) remaining in your home country strengthens your case significantly.

**Tip 5: Clear Purpose of Visit**
Prepare a detailed, realistic itinerary showing what you plan to do in the USA. Vague or unrealistic plans raise suspicion.

**Tip 6: Travel History**
Previous travel to multiple countries, especially USA allies (UK, Canada, Schengen) shows you're a seasoned traveler who respects visa rules.

**Tip 7: DS-160 Accuracy**
Fill the DS-160 form with extreme care. Any inconsistencies between the form and your supporting documents can lead to rejection.

**Tip 8: Interview Preparation**
Practice answers to common questions: "What do you do?" "Why are you visiting?" "Who is sponsoring your trip?" "When will you return?" Be concise and truthful.

**Tip 9: Dress Professionally**
First impressions matter. Dress business-casual for your visa interview to demonstrate respect for the process.

**Tip 10: No Immigration Violations**
Any previous overstays, denials, or immigration violations are serious factors. Disclose them honestly as hiding them is worse.

Contact Gülşah at visit@asadiaglobal.com for USA visa assistance.`,
  },
  'canada-express-entry-guide': {
    title: 'Canada Express Entry 2026: How to Maximize Your CRS Score',
    category: 'Immigration',
    author: 'Asad Malik',
    date: '2026-04-01',
    readTime: '9 min read',
    img: 'https://images.pexels.com/photos/1750754/pexels-photo-1750754.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Canada', 'Express Entry', 'PR', 'Immigration'],
    content: `Express Entry is Canada's flagship immigration system for skilled workers seeking permanent residency. Understanding how the CRS (Comprehensive Ranking System) works is key to success.

**CRS Score Breakdown (Maximum: 1,200)**

*Core/Human Capital Factors (up to 500 pts):*
- Age: Maximum points at age 20-29
- Education: PhD (140 pts) > Master's (126 pts) > Bachelor's (112 pts)
- First Official Language: Up to 136 pts for CLB 10+ in all 4 skills
- Canadian Work Experience: Up to 80 pts

*Skill Transferability (up to 100 pts):*
- Strong combination of education + language + Canadian/foreign experience
- Educational credentials + language proficiency

*Additional Factors:*
- Provincial Nomination (PNP): 600 bonus points (essentially guarantees an ITA)
- Arranged Employment (LMIA-based): 50-200 points
- Canadian sibling: 15 points
- French language proficiency: Up to 50 points

**Strategic Steps to Maximize Your Score**

1. **Improve IELTS/CELPIP**: Each band increase = significant CRS boost. Aim for CLB 9+ in all four skills

2. **Get ECA**: Have your foreign credentials assessed by a designated organization (WES, IQAS, etc.)

3. **Gain More Canadian Experience**: Get a work permit and work in Canada — Canadian experience is worth much more than foreign experience

4. **Apply to Provincial Nominee Programs (PNP)**: Many provinces have streams for specific occupations. A provincial nomination gives +600 points

5. **LMIA-based Job Offer**: A valid job offer from a Canadian employer with an LMIA can add 50-200 points

6. **French Language**: If you speak French, submit your TEF/TCF scores — bilingualism gives extra points

7. **Consider Category-Based Draws**: IRCC now conducts draws targeting specific occupations and French speakers with lower CRS cut-offs

Contact Asad Malik at founder@asadiaglobal.com for personalized Express Entry strategy.`,
  },
  'uk-student-visa-guide': {
    title: 'UK Student Visa 2026: Requirements, Process & Common Mistakes to Avoid',
    category: 'Study Visa',
    author: 'Diana Leli',
    date: '2026-03-15',
    readTime: '6 min read',
    img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['UK', 'Student Visa', 'Study Abroad'],
    content: `The UK Student Visa allows international students to study full-time at licensed UK educational institutions. Here's your complete guide for 2026.

**Eligibility Requirements**

1. An unconditional offer from a UK Higher Education Provider with a Sponsor licence
2. CAS (Confirmation of Acceptance for Studies) reference number from your institution
3. Proof of English: IELTS Academic minimum 5.5 overall (varies by course)
4. Financial proof: £1,334/month for up to 9 months in London; £1,023 outside London
5. Parental consent (if under 18)
6. TB test certificate (if from a listed country)
7. ATAS clearance (for certain sensitive subjects)

**Financial Requirements in Detail**

You need enough money in your bank account (or your sponsor's):
- Course fees for up to 9 months OR remaining fees if course is shorter
- Living costs: up to 9 months x £1,334 (London) or £1,023 (elsewhere)
- Funds must have been held for at least 28 consecutive days before application

**Application Process**

1. Receive your Unconditional Offer from a licensed UK university
2. Receive your CAS number (after accepting the offer)
3. Apply online through UKVI at least 3 months before course start
4. Pay the visa fee (£363) and Immigration Health Surcharge (£776/year in 2026)
5. Book and attend biometrics appointment at VFS centre
6. Await decision (standard: 3 weeks)

**Common Mistakes to Avoid**

- Not maintaining 28-day funds rule: Your bank balance must be consistent for 28 days before application
- Wrong IELTS score for course level: Check minimum requirements carefully
- Expired CAS: CAS are valid for 6 months — don't delay application
- Insufficient living costs calculation: Many students underestimate the financial requirements
- Not including all family members if bringing dependants

Contact Diana Leli at study@asadiaglobal.com for expert UK student visa assistance.`,
  },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BookOpen size={48} className="text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split('\n\n');

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-900">
        <div className="absolute inset-0">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-navy-900/60" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors text-sm">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <span className="badge bg-primary-600/80 text-white mb-4">{post.category}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-blue-200 text-sm">
            <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {paragraphs.map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h2 key={i} className="font-display text-2xl font-bold text-gray-900 mt-8 mb-4">{para.replace(/\*\*/g, '')}</h2>;
                  }
                  if (para.match(/^\d+\./)) {
                    return (
                      <div key={i} className="bg-primary-50 rounded-xl p-4 my-4">
                        <p className="text-gray-700 leading-relaxed">{para}</p>
                      </div>
                    );
                  }
                  if (para.startsWith('- ') || para.startsWith('* ')) {
                    const items = para.split('\n').filter(l => l.trim());
                    return (
                      <ul key={i} className="space-y-2 my-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                            {item.replace(/^[-*]\s/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Handle bold inline
                  const parts = para.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed my-4">
                      {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="font-semibold text-gray-900">{part}</strong> : part)}
                    </p>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge bg-gray-100 text-gray-600 text-sm">
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-2">Need Help with Your Visa?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our expert consultants are ready to guide you. Book a free consultation today.
                </p>
                <div className="flex gap-3">
                  <Link to="/contact" className="btn-primary text-sm py-2.5">
                    Book Free Consultation
                  </Link>
                  <a href="https://wa.me/4591783970" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                    Book Consultation
                  </Link>
                  <Link to="/eligibility" className="btn-secondary w-full justify-center text-sm py-2.5">
                    Check Eligibility
                  </Link>
                  <a href="https://wa.me/4591783970" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors text-sm">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="card p-5">
                <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {Object.entries(posts)
                    .filter(([s]) => s !== slug)
                    .slice(0, 3)
                    .map(([s, p]) => (
                      <Link key={s} to={`/blog/${s}`} className="flex gap-3 group">
                        <img src={p.img} alt={p.title} className="w-16 h-12 rounded-lg object-cover flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors line-clamp-2 font-medium leading-snug">{p.title}</p>
                          <span className="text-xs text-gray-400 mt-1 block">{p.readTime}</span>
                        </div>
                      </Link>
                    ))}
                </div>
                <Link to="/blog" className="mt-4 flex items-center gap-1 text-primary-600 text-sm font-medium hover:gap-2 transition-all">
                  View all articles <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
