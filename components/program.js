import SectionHeader from '@/components/ui/section-header';
import SectionWrapper from '@/components/ui/section-wrapper';

const PROGRAMS = [
  {
    title: 'Akademia',
    subtitle: 'Dla dzieci 6–14 lat',
    description: 'Specjalny program szkoleniowy budujący fundamenty techniczne i miłość do sportu.',
    image: '/img/image2.jpg',
    alt: 'Akademia Juniorów',
    badge: 'Juniorzy',
  },
  {
    title: 'Trening dla Dorosłych',
    subtitle: 'Wszystkie poziomy',
    description: 'Ustrukturyzowany program dla dorosłych — od zupełnie początkujących po zaawansowanych.',
    image: '/img/image3.jpg',
    alt: 'Trening dla Dorosłych',
    badge: 'Dorośli',
  },
  {
    title: 'Trening Elity',
    subtitle: 'Dla zawodników',
    description: 'Profesjonalne treningi dla zawodników nastawionych na rywalizację i wyniki.',
    image: '/img/image1.jpg',
    alt: 'Trening Elity',
    badge: 'Elita',
  },
];

export default function Program() {
  return (
    <section className="bg-white py-24">
      <SectionWrapper>
        <SectionHeader
          eyebrow="Oferta"
          title="Nasze Programy"
          description="Znajdź program dopasowany do Twojego wieku i poziomu zaawansowania."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PROGRAMS.map(({ title, subtitle, description, image, alt, badge }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden bg-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  {badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-orange-600 text-xs font-semibold uppercase tracking-wide mb-1">{subtitle}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-orange-600 font-semibold text-sm group/link"
                >
                  Zapisz się
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
