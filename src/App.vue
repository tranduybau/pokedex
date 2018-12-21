<template>
  <div id="app">
    <navbar />

    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/partial/Navbar.vue';

  export default {
    name: 'Main',
    components: { Navbar },
  };
</script>
