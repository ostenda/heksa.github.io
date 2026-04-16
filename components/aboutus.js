import SectionHeader from '@/components/ui/section-header';
import IconBox from '@/components/ui/icon-box';
import SectionWrapper from '@/components/ui/section-wrapper';

const FEATURES = [
  {
    title: 'Profesjonalny Trening',
    description: 'Doświadczeni trenerzy z międzynarodowym doświadczeniem, którzy poprowadzą Twoją podróż.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: 'Tworzymy Społeczność',
    description: 'Mile widziani gracze na każdym poziomie — od początkujących po profesjonalistów.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Regularne Turnieje',
    description: 'Weź udział w krajowych i międzynarodowych turniejach i sprawdź się w rywalizacji.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
  },
];

export default function Aboutus() {
  return (
    <section className="bg-gray-950 py-24">
      <SectionWrapper>
        <SectionHeader
          eyebrow="O nas"
          title="Dlaczego HEKSA?"
          description="Oferujemy więcej niż tylko treningi — budujemy środowisko, w którym każdy może się rozwijać."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-orange-600/50 hover:bg-gray-900/80 transition-colors duration-300"
            >
              <IconBox className="mb-6 group-hover:bg-orange-600/20">{icon}</IconBox>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
