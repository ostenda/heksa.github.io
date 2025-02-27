export default function Hero() {
    return(
        <section class="bg-gradient-to-r from-gray-100 to-white py-16">
  <div class="container mx-auto flex flex-col lg:flex-row items-center px-6">
    {/* Left Text Content */}

    <div class="lg:w-1/2 text-center lg:text-left">
      <h1 class="text-5xl font-bold text-gray-900">
        Witaj w Klubie Tenisa Stolowego HEKSA
      </h1>
      <p class="text-xl text-gray-600 mt-4">
           Dołącz do naszej społeczności graczy i odkryj ekscytujący świat tenisa stołowego
      </p>
      <div class="mt-6 flex justify-center lg:justify-start space-x-4">
        <a
          href="#join"
          class="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-700 transition"
        >
          Dolacz teraz
        </a>
        <a
          href="#schedule"
          class="border border-orange-600 text-orange-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-600 hover:text-white transition"
        >
          Plan Zajec
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div class="lg:w-1/2 mt-10 lg:mt-0">
      <img
        src="./img/image1.jpg"
        alt="Table Tennis Club"
        class="w-full max-w-lg mx-auto rounded-lg shadow-lg object-cover"
      />
    </div>
  </div>
</section>

    )

};