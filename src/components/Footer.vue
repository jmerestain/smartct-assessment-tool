<template>
    <footer class="bg-primary py-5">
      <div class="flex flex-col items-center container mx-auto lg:px-20 px-5">
        <img class="mx-auto w-32 h-auto" :src="require('@/assets/img/Smart-CT-White 1.png')" />
        <div class="flex justify-center">
          <p class="text-white tracking-wider text-sm py-2">
            This work and its contents by SmartCitiesPH, Inc. is licensed under a Creative Commons
            Attribution-NonCommercial-ShareAlike 4.0 International License. Other works (software,
            source code, etc.) referenced in this website are under their own respective licenses.
          </p>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
