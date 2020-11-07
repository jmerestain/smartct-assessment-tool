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
    <section class="bg-gray-300">
      <div class="container mx-auto px-5 md:px-20 flex flex-col py-10">
        <p class="text-4xl font-medium text-center tracking-wide pb-4">
          Benefits
        </p>
        <div class="flex md:space-x-2 flex-wrap justify-center
        md:flex-no-wrap space-y-2 md:space-y-0">
          <div class="bg-white shadow-md border-2 border-primary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-3xl max-w-sm">
              Understand the fundamentals of becoming smart.
            </p>
          </div>
          <div class="bg-white shadow-md border-2 border-primary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-2xl max-w-sm">
              Discover your community’s strengths and weaknesses against 11 smartness dimensions.
            </p>
          </div>
          <div class="bg-white shadow-md border-2 border-primary p-4 rounded-tl-lg rounded-br-lg">
            <p class="text-2xl max-w-sm">
              Identify areas of improvement to optimize the smartness journey.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex-grow py-10 bg-white text-gray-900">
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
