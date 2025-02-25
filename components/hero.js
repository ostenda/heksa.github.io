export default function Hero() {
    return(
        <section class="bg-gradient-to-r from-blue-100 to-white py-16">
  <div class="container mx-auto flex flex-col lg:flex-row items-center px-6">
    {/* Left Text Content */}

    <div class="lg:w-1/2 text-center lg:text-left">
      <h1 class="text-5xl font-bold text-gray-900">
        Welcome to HEXA Table Tennis Club
      </h1>
      <p class="text-xl text-gray-600 mt-4">
        Join our community of passionate players and discover the exciting
        world of table tennis.
      </p>
      <div class="mt-6 flex justify-center lg:justify-start space-x-4">
        <a
          href="#join"
          class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
        >
          Join Now
        </a>
        <a
          href="#schedule"
          class="border border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition"
        >
          View Schedule
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