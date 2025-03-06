export default function Program() {
    return (
        <div class="bg-gray-100 py-20">
            <div class="max-w-7xl mx-auto text-center px-6">
                <h2 class="text-3xl font-bold text-gray-900">
                    Program
                </h2>
                <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Junior Academy  */}
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="./img/image2.jpg" class="w-full h-48 object-cover" alt="Junior Academy" />
                        <div class="p-6 text-left">
                            <h3 class="text-xl font-bold text-gray-900">Akademia</h3>
                            <p class="text-gray-600 mt-2 text-base">
                                Specjalny program szkoleniowy dla dzieci w wieku 6-14 lat.
                            </p>
                            <a href="#" class="text-orange-600 font-semibold mt-4 inline-block">
                                Wiecej →
                            </a>
                        </div>
                    </div>
                    {/* <!-- Adult Training --> */}
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="./img/image3.jpg" class="w-full h-48 object-cover" alt="Adult Training" />
                        <div class="p-6 text-left">
                            <h3 class="text-xl font-bold text-gray-900">Trening dla Dorosłych</h3>
                            <p class="text-gray-600 mt-2 text-base">
                                Ustrukturyzowany program dla dorosłych na wszystkich poziomach zaawansowania.
                            </p>
                            <a href="#" class="text-orange-600 font-semibold mt-4 inline-block">
                                Wiecej →
                            </a>
                        </div>
                    </div>
                    {/* <!-- Elite Training --> */}
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="./img/image1.jpg" class="w-full h-48 object-cover" alt="Elite Training" />
                        <div class="p-6 text-left">
                            <h3 class="text-xl font-bold text-gray-900">Trening Elity</h3>
                            <p class="text-gray-600 mt-2 text-base">
                                Profesjonalne treningi dla zawodnikow
                            </p>
                            <a href="#" class="text-orange-600 font-semibold mt-4 inline-block">
                                Wiecej →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}