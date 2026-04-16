import Header from '@/components/header';
import Hero from '@/components/hero';
import Aboutus from '@/components/aboutus';
import Program from '@/components/program';
import Schedule from '@/components/schedule';
import ContactForm from '@/components/contactform';
import SectionWrapper from '@/components/ui/section-wrapper';
import { CONTACT_INFO } from '@/lib/contact-info';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div id="about"><Aboutus /></div>
        <div id="programs"><Program /></div>
        <div id="schedule"><Schedule /></div>

        {/* Contact section */}
        <section id="contact" className="bg-gray-950 py-24">
          <SectionWrapper>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div>
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">Kontakt</span>
                <h2 className="text-4xl font-extrabold text-white mt-3 mb-6" style={{ textWrap: 'balance' }}>
                  Gotowy, żeby dołączyć?
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Napisz do nas — odpowiemy na wszystkie pytania dotyczące treningów, harmonogramu i zapisów.
                </p>
                <ul className="space-y-4">
                  {CONTACT_INFO.map(({ label, value, icon }) => (
                    <li key={label} className="flex items-center gap-3 text-gray-400">
                      <span className="text-orange-500">{icon}</span>
                      <span className="whitespace-pre-line">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <ContactForm />
              </div>
            </div>
          </SectionWrapper>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 py-8">
          <SectionWrapper className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} KS HEKSA — Klub Tenisa Stołowego</p>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z" />
              </svg>
              <span className="sr-only">Facebook (otwiera nową kartę)</span>
            </a>
          </SectionWrapper>
        </footer>
      </main>
    </div>
  );
}
