<template>
  <div id="wrapper" class="flex flex-col justify-between">
  <Navbar />
  <router-view/>
  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html, body, #app {
  min-height: 100vh;
}
#wrapper {
  min-height: 100vh;
  justify-content: space-between;
}
.bg-primary {
  background: #ff5039;
}
.text-primary {
  color: #ff5039;
}
.border-primary {
  border-color: #ff5039;
}
.bg-secondary {
  background: #87c540;
}
.text-secondary {
  color: #87c540;
}
.bg-tertiary {
  background: #410f35;
}
.text-tertiary {
  color: #410f35;
}
</style>
