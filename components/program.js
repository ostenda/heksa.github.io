export default function Program() {
    return (
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Program
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Junior Academy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="./img/image2.jpg" className="w-full h-48 object-cover" alt="Junior Academy" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">Akademia</h3>
                <p className="text-gray-600 mt-2 text-base">
                  Specjalny program szkoleniowy dla dzieci w wieku 6-14 lat.
                </p>
                <a href="#" className="text-orange-600 font-semibold mt-4 inline-block">
                  Więcej →
                </a>
              </div>
            </div>
  
            {/* Adult Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="./img/image3.jpg" className="w-full h-48 object-cover" alt="Adult Training" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">Trening dla Dorosłych</h3>
                <p className="text-gray-600 mt-2 text-base">
                  Ustrukturyzowany program dla dorosłych na wszystkich poziomach zaawansowania.
                </p>
                <a href="#" className="text-orange-600 font-semibold mt-4 inline-block">
                  Więcej →
                </a>
              </div>
            </div>
  
            {/* Elite Training */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="./img/image1.jpg" className="w-full h-48 object-cover" alt="Elite Training" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">Trening Elity</h3>
                <p className="text-gray-600 mt-2 text-base">
                  Profesjonalne treningi dla zawodników.
                </p>
                <a href="#" className="text-orange-600 font-semibold mt-4 inline-block">
                  Więcej →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  