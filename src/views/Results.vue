<template>
  <div class="about">
    <div class="flex justify-center lg:justify-between items-end
    container mx-auto px-5 md:px-20 flex-wrap">
      <div class="flex flex-col text-center flex-grow gap-4">
        <div class="flex flex-col text-center my-5">
          <h1 class="text-2xl uppercase font-medium">SmartCT LGU Assessment Score Total</h1>
          <h1 class="text-5xl">{{ this.$store.state.points }}/110</h1>
        </div>
        <div class="flex flex-col">
          <h2 class="font-medium text-xl text-left pb-2 tracking-wide">Legend</h2>
          <ul class="flex flex-col text-left">
            <li>LS: LGU Strategy</li>
            <li>LCCS: Localizing Climate Change and Sustainability</li>
            <li>SEC: Stakeholder Engagement & Communication</li>
            <li>OMSD: Operating Model & Service Delivery</li>
            <li>PAM: Physical Asset Management</li>
            <li>DS: Data Strategy</li>
            <li>ATD: Access to Data</li>
            <li>IP: ICT Plan</li>
            <li>STD: Standards</li>
            <li>IE: Innovation Ecosystem</li>
            <li>PM: Performance management</li>
          </ul>
        </div>
      </div>
      <div class="">
        <Radar class="p-10" />
      </div>
      <img class="w-full p-10" :src="require('@/assets/img/chart.png')" />
    </div>
    <div class="flex justify-center mb-10">
      <router-link to="/"
      class="bg-primary border-2 border-primary text-white
      px-4 py-3 font-medium tracking-wide mr-4">
        Return to Home
      </router-link>
      <a href="mailto:assess@smartct.org"
      class="bg-primary border-2 border-primary text-white
      px-4 py-3 font-medium tracking-wide">
        Contact SmartCT at assess@smartct.org
      </a>
    </div>
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
