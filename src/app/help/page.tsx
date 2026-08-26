import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const STUDENT_RESOURCES = [
  {
    title: "Scholarship Program",
    description: "Annual scholarships for deserving FJMU students to support their medical education.",
    icon: "🎓",
    link: "/projects#scholarship-fund",
    category: "Financial Aid"
  },
  {
    title: "Interest-Free Loans",
    description: "Shariah-compliant financial assistance for tuition, board exam fees, and educational expenses. Zero interest, flexible repayment terms.",
    icon: "💰",
    link: "/loan",
    category: "Financial Aid"
  },
  {
    title: "Mentorship Program",
    description: "Connect with experienced FJMU alumni practicing in North America for guidance and career advice.",
    icon: "🤝",
    link: "#mentorship",
    category: "Career Development"
  },
  {
    title: "Board Exam Preparation",
    description: "Resources and guidance for USMLE, PLAB, and other international medical board examinations.",
    icon: "📚",
    link: "#board-prep",
    category: "Academic Support"
  }
];

const PROFESSIONAL_RESOURCES = [
  {
    title: "Networking Opportunities",
    description: "Annual conferences, meetings, and events to connect with fellow FJMU alumni and build professional relationships.",
    icon: "🌐",
    link: "/impact/events",
    category: "Professional Network"
  },
  {
    title: "New Arrival Orientation",
    description: "Support for newly arriving physicians with practical guidance on licensing, credentialing, and settling in North America.",
    icon: "✈️",
    link: "#orientation",
    category: "Transition Support"
  },
  {
    title: "CME & Professional Development",
    description: "Continuing medical education opportunities and professional development workshops.",
    icon: "📖",
    link: "#cme",
    category: "Education"
  },
  {
    title: "Health Channel",
    description: "Free online medical education and health awareness sessions with physician experts.",
    icon: "📺",
    link: "/get-involved/health-channel",
    category: "Community Health"
  }
];

const FAQ_ITEMS = [
  {
    question: "How do I apply for the FJMCAANA scholarship?",
    answer: "Scholarship applications are typically announced in early spring each year. Contact us at team@fjmcaana.org for current application deadlines and requirements. Applicants must be currently enrolled at FJMU and demonstrate financial need and academic merit."
  },
  {
    question: "Can I get help with my USMLE preparation?",
    answer: "Yes! FJMCAANA provides guidance resources and can connect you with alumni who have successfully completed the USMLE exams. We also offer interest-free loans to help cover exam fees and preparation materials."
  },
  {
    question: "How can I connect with a mentor?",
    answer: "Email us at team@fjmcaana.org with your area of interest, career goals, and what kind of mentorship you're seeking. We'll match you with an appropriate alumni mentor based on specialty and location."
  },
  {
    question: "I'm planning to move to North America. What support is available?",
    answer: "FJMCAANA offers orientation support for newly arriving physicians, including guidance on medical licensing, credentialing processes, job search strategies, and settling into life in the USA or Canada. Contact us to be connected with local alumni who can assist."
  },
  {
    question: "Are there networking events I can attend?",
    answer: "Yes! FJMCAANA hosts annual meetings, scientific conferences, and regional gatherings. Check our Events page for upcoming opportunities to connect with fellow alumni."
  }
];

export default function HelpPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Support & Resources"
        title="Help for Students & Professionals"
        description="Comprehensive support for FJMU students and graduates at every stage of their medical journey."
      />

      <div className="bg-cream">
        {/* Introduction */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl bg-gradient-to-br from-pine/5 to-sage/30 p-8 md:p-12">
            <h2 className="font-display text-2xl font-semibold text-pine-dark sm:text-3xl">
              We're Here to Support Your Journey
            </h2>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-3xl">
              Whether you're a current medical student, recent graduate preparing for board exams, or an experienced physician looking to expand your professional network, FJMCAANA provides resources, mentorship, and financial support to help you succeed.
            </p>
            
            {/* Resources for Training in North America */}
            <div className="mt-8 rounded-xl border-2 border-gold/30 bg-white p-6">
              <h3 className="font-display text-xl font-semibold text-pine-dark flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Resources for Training in North America
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-none rounded-lg bg-green-100 p-2">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-pine-dark">APPNA YPC WhatsApp Channel</h4>
                    <p className="mt-1 text-sm text-ink-soft">
                      Follow the APPNA Young Physicians Committee channel for latest updates, resources, networking opportunities, and professional development information.
                    </p>
                    <a 
                      href="https://whatsapp.com/channel/0029Vb8Vte4GehEIDXyLVo2l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Follow WhatsApp Channel
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-none rounded-lg bg-blue-100 p-2">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-pine-dark">APPNA YPC Facebook Group</h4>
                    <p className="mt-1 text-sm text-ink-soft">
                      Join the vibrant community of young Pakistani-American physicians on Facebook for networking, discussions, and support.
                    </p>
                    <a 
                      href="https://www.facebook.com/share/g/19N5SxA3dY/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Join Facebook Group
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-none rounded-lg bg-gold/20 p-2">
                    <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-pine-dark">Residency Application Support</h4>
                    <p className="mt-1 text-sm text-ink-soft">
                      Email all residency inquiries, application questions, and guidance requests to our team. We're here to help you navigate the process.
                    </p>
                    <a 
                      href="mailto:team@fjmcaana.org?subject=Residency Inquiry"
                      className="mt-3 inline-flex items-center gap-2 rounded-lg bg-pine px-4 py-2 text-sm font-semibold text-white transition hover:bg-pine-dark"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email: team@fjmcaana.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Resources */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              For Students
            </h2>
          </div>
          <p className="mb-12 text-lg text-ink-soft">
            Resources to support FJMU students throughout their medical education.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STUDENT_RESOURCES.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <span className="inline-block rounded-full bg-sage/50 px-3 py-1 text-xs font-semibold text-pine-dark mb-3">
                    {resource.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-pine-dark">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-pine">
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Professional Resources */}
        <section className="bg-sage/20 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gold rounded-full" />
              <h2 className="font-display text-3xl font-semibold text-pine-dark">
                For Professionals
              </h2>
            </div>
            <p className="mb-12 text-lg text-ink-soft">
              Career development and networking resources for FJMU graduates and practicing physicians.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROFESSIONAL_RESOURCES.map((resource, index) => {
                const isExternal = resource.link.startsWith('http') || resource.link.startsWith('mailto');
                const Component = isExternal ? 'a' : Link;
                const linkProps = isExternal 
                  ? { href: resource.link, target: "_blank", rel: "noopener noreferrer" }
                  : { href: resource.link };
                
                return (
                  <Component
                    key={index}
                    {...linkProps}
                    className="group relative overflow-hidden rounded-xl border border-pine/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
                    <div className="relative">
                      <div className="text-4xl mb-4">{resource.icon}</div>
                      <span className="inline-block rounded-full bg-sage/50 px-3 py-1 text-xs font-semibold text-pine-dark mb-3">
                        {resource.category}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-pine-dark">
                        {resource.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-pine">
                        {isExternal ? 'Visit' : 'Learn more'}
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Component>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gold rounded-full" />
            <h2 className="font-display text-3xl font-semibold text-pine-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border border-pine/10 bg-white shadow-sm overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-pine-dark hover:bg-sage/10 transition-colors">
                  <span className="font-display text-lg">{item.question}</span>
                  <svg className="h-5 w-5 flex-none transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="border-t border-pine/10 bg-sage/5 p-6">
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-pine-dark py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-cream/80">
              Our team is here to help. Reach out with any questions about resources, programs, or support available through FJMCAANA.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:team@fjmcaana.org"
                className="rounded-lg bg-gold px-8 py-3 font-semibold text-pine-dark transition hover:bg-gold-light"
              >
                Email Us
              </a>
              <Link
                href="/contact"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
