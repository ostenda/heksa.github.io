export default function Aboutus() {

    return(
<div class="bg-white py-20">
  <div class="max-w-7xl mx-auto text-center px-6">
    <h2 class="text-3xl font-bold text-gray-900 font-['Montserrat-Bold']">
      Why Choose HEXA?
    </h2>
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
      {/* Professional Training */}
      <div class="flex flex-col items-center">
        <img src="frame1.svg" class="w-12 h-12 mb-4" alt="Professional Training Icon" />
        <h3 class="text-xl font-bold text-gray-900">Professional Training</h3>
        <p class="text-gray-600 mt-2 text-base">
          Expert coaches with international experience to guide your journey.
        </p>
      </div>
     {/* Inclusive Community */}
      <div class="flex flex-col items-center">
        <img src="frame3.svg" class="w-12 h-12 mb-4" alt="Inclusive Community Icon" />
        <h3 class="text-xl font-bold text-gray-900">Inclusive Community</h3>
        <p class="text-gray-600 mt-2 text-base">
          Players of all levels welcome, from beginners to professionals.
        </p>
      </div>
      {/* Regular Tournaments */}
      <div class="flex flex-col items-center">
        <img src="frame5.svg" class="w-12 h-12 mb-4" alt="Tournaments Icon" />
        <h3 class="text-xl font-bold text-gray-900">Regular Tournaments</h3>
        <p class="text-gray-600 mt-2 text-base">
          Participate in local and regional competitions.
        </p>
      </div>
    </div>
  </div>
</div>


    )

};