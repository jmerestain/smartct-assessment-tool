<template>
  <div class="about">
    <div class="flex justify-between items-center container mx-auto px-5 md:px-20">
      <Radar class="w-1/3"/>
      <div class="flex flex-col text-center w-1/3">
        <h1 class="text-4xl">Points</h1>
        <h1 class="text-4xl">{{ this.$store.state.points }}</h1>
      </div>
    </div>
    <router-link to="/"
    class="bg-primary border-2 border-primary text-white px-4 py-3 font-medium tracking-wide">
      Return to Home
    </router-link>
  </div>
</template>
<script>
import Radar from '@/components/Radar.vue';

export default {
  name: 'Results',
  components: {
    Radar,
  },
};
</script>
