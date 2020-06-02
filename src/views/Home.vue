<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Index/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Index from '@/components/Index.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Index,
  },
};
</script>
