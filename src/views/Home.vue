<template>
  <div class="home flex-grow flex flex-col">
    <section class="flex-grow py-16 bg-white text-gray-900">
      <div class="container mx-auto px-5 md:px-20">
        <p class="text-4xl font-medium tracking-wider text-gray-800">
          Map your way to smartness success
        </p>
        <p class="text-opacity-75 text-gray-800 text-xl">
          This assessment is designed as a questionnaire. It has 10 questions for each dimension.
          The result is an indication of the success of the community’s initiatives to date.
        </p>
      </div>
    </section>
    <section class="bg-secondary">
      <div class="container mx-auto px-5 md:px-20 flex flex-col pt-4 pb-10">
        <p class="text-4xl font-medium text-center tracking-wide pb-4 text-white">
          Assessment Benefits
        </p>
        <div class="flex md:space-x-2 flex-wrap justify-center
        md:flex-no-wrap space-y-2 md:space-y-0">
          <div class="bg-white shadow-md border-2 border-secondary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-2xl max-w-sm p-4">
              Understand the fundamentals of becoming smart.
            </p>
          </div>
          <div class="bg-white shadow-md border-2 border-secondary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-2xl max-w-sm p-4">
              Discover your community’s strengths and weaknesses against 11 smartness dimensions.
            </p>
          </div>
          <div class="bg-white shadow-md border-2 border-secondary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-2xl max-w-sm p-4">
              Identify areas of improvement to optimize the smartness journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex-grow py-20 bg-white text-gray-900 shadow-md">
      <div class="container mx-auto px-5 md:px-20">
        <div class="flex justify-center space-x-4 items-center">
          <router-link to="/assess"
          class="bg-primary border-2 border-primary text-white px-4 py-3 font-medium tracking-wide">
            Get Started
          </router-link>
          <a href="https://smartct.org"
          class="border-primary border-2 text-gray-800 px-4 py-3 tracking-wide">
            Learn More
          </a>
        </div>
      </div>
    </section>
    <hr>
    <section class="bg-gray-100">
      <div class="container mx-auto px-5 md:px-20 py-10">
        <p class="text-2xl tracking-wider font-medium pb-2">
          Support SmartCT
        </p>
        <p class="pb-4 pt-2 text-lg tracking-wide text-gray-700">
          Smart LGU Assessment is brought to you by SmartCT. It was funded to beta by
          Friedrich Naumann Foundation to enable any local government unit (LGU) to
          assess their smartness growth.
          We love to evolve and iterate. To sponsor a new feature or offer
          financial support contact
          <span class="text-primary underline font-medium">assess@smartct.org</span>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>
