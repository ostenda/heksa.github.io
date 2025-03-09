export default function Schedule() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Plan Treningów
        </h2>
        <div className="mt-10 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-600 text-white text-left font-bold text-base p-4 grid grid-cols-4 text-center">
            <div className="px-4">Godzina</div>
            <div className="px-4">Poniedziałek</div>
            <div className="px-4">Środa</div>
            <div className="px-4">Piątek</div>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="grid grid-cols-4 p-4">
              <div className="px-4">09:00 - 11:00</div>
              <div className="px-4">Trening Juniorów</div>
              <div className="px-4">Dorośli Początkujący</div>
              <div className="px-4">Trening Elity</div>
            </div>
            <div className="grid grid-cols-4 p-4">
              <div className="px-4">14:00 - 16:00</div>
              <div className="px-4">Dorośli Zaawansowani</div>
              <div className="px-4">Trening Juniorów</div>
              <div className="px-4">Wolna Gra</div>
            </div>
            <div className="grid grid-cols-4 p-4">
              <div className="px-4">18:00 - 20:00</div>
              <div className="px-4">Trening Elity</div>
              <div className="px-4">Dorośli Zaawansowani</div>
              <div className="px-4">Przygotowanie Turniejowe</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
