
<template>
  <div class="home">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
/* import Burger from '@/components/consultant/catalogue/Burger.vue'; */
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Footer,
  },
};
</script>
<style lang="css">

</style>
