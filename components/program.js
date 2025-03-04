export default function Program() {
    return(
        <div class="bg-gray-100 py-20">
  <div class="max-w-7xl mx-auto text-center px-6">
    <h2 class="text-3xl font-bold text-gray-900 font-['Montserrat-Bold']">
      Our Programs
    </h2>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Junior Academy  */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="img0.png" class="w-full h-48 object-cover" alt="Junior Academy" />
        <div class="p-6 text-left">
          <h3 class="text-xl font-bold text-gray-900">Junior Academy</h3>
          <p class="text-gray-600 mt-2 text-base">
            Special training program for children aged 7-14 years.
          </p>
          <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">
            Learn More →
          </a>
        </div>
      </div>
      {/* <!-- Adult Training --> */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="img1.png" class="w-full h-48 object-cover" alt="Adult Training" />
        <div class="p-6 text-left">
          <h3 class="text-xl font-bold text-gray-900">Adult Training</h3>
          <p class="text-gray-600 mt-2 text-base">
            Structured programs for adults of all skill levels.
          </p>
          <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">
            Learn More →
          </a>
        </div>
      </div>
      {/* <!-- Elite Training --> */}
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="img2.png" class="w-full h-48 object-cover" alt="Elite Training" />
        <div class="p-6 text-left">
          <h3 class="text-xl font-bold text-gray-900">Elite Training</h3>
          <p class="text-gray-600 mt-2 text-base">
            Advanced coaching for competitive players.
          </p>
          <a href="#" class="text-blue-600 font-semibold mt-4 inline-block">
            Learn More →
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}