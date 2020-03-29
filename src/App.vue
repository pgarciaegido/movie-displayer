<template>
  <div id="app">
    <main>
      <MovieCard />
    </main>
    <button @click="loadTheme('LIGHT')">Light Theme</button>
    <button @click="loadTheme('DARK')">Dark Theme</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovieCard from "./components/MovieCard.vue";
import { ref, computed, Ref, onMounted } from '@vue/composition-api';

import { loadTheme } from "@/tokens/infra/tokens";

export default Vue.extend({
  components: { MovieCard },
  setup() {
    onMounted(() => {
      loadTheme('LIGHT');
    });

    return { loadTheme };
  }
});
</script>

<style>
#app {
  background-color: var(--app-background-color);
  color: var(--app-color);
  max-width: 1200px;
  margin: 0 auto;
}

#app main {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  grid-gap: 5px;
}
</style>
