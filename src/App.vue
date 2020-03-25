<template>
  <div id="app">
    <MovieCard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovieCard from "./components/MovieCard.vue";

export default Vue.extend({
  name: "App",
  components: {
    MovieCard
  }
});
</script>

<style>
#app {
  
}
</style>
