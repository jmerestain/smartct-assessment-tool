<template>
    <nav class="bg-primary">
      <div class="flex flex-row justify-center items-center container mx-auto px-20">
        <router-link to="/">
          <img :src="navLogo" class="py-4 w-48 h-auto" />
        </router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      // eslint-disable-next-line global-require
      navLogo: require('@/assets/img/Smart-CT-White 1.png'),
    };
  },
};
</script>
