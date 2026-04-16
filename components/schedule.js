import SectionHeader from '@/components/ui/section-header';
import SectionWrapper from '@/components/ui/section-wrapper';

const DAYS = ['Poniedziałek', 'Środa', 'Piątek'];

const ROWS = [
  {
    time: '09:00–11:00',
    cells: ['Trening Juniorów', 'Dorośli Początkujący', 'Trening Elity'],
  },
  {
    time: '14:00–16:00',
    cells: ['Dorośli Zaawansowani', 'Trening Juniorów', 'Wolna Gra'],
  },
  {
    time: '18:00–20:00',
    cells: ['Trening Elity', 'Dorośli Zaawansowani', 'Przygotowanie Turniejowe'],
  },
];

export default function Schedule() {
  return (
    <section className="bg-gray-50 py-24">
      <SectionWrapper>
        <SectionHeader
          eyebrow="Harmonogram"
          title="Plan Treningów"
          description="Treningi odbywają się trzy razy w tygodniu. Wybierz termin pasujący do Twojego grafiku."
        />
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-orange-600 text-white">
                <th className="px-6 py-4 text-left font-semibold tracking-wide w-36">Godzina</th>
                {DAYS.map((day) => (
                  <th key={day} className="px-6 py-4 text-left font-semibold tracking-wide">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(({ time, cells }, i) => (
                <tr key={time} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}>
                  <td className="px-6 py-4 font-bold text-orange-600 whitespace-nowrap" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {time}
                  </td>
                  {cells.map((cell, j) => (
                    <td key={DAYS[j]} className="px-6 py-4 text-gray-700">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
          Masz pytania dotyczące harmonogramu?{' '}
          <a href="#contact" className="text-orange-600 hover:underline font-medium">Napisz do nas</a>
        </p>
      </SectionWrapper>
    </section>
  );
}
