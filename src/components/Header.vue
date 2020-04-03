<script lang="ts">
import Vue from "vue";

import SunIcon from "@/components/icons/SunIcon.vue";

// const coolYellow = "#fbc85f";

export default Vue.extend({
  components: { SunIcon }
});
</script>

<template>
  <header>
    <p>Movie Displayer</p>
    <div class="settings">
      <div class="theme-icons">
        <SunIcon :size="100" :color="'#fff'" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  padding: 10px;
}

header .theme-icons {
  cursor: pointer;
}
</style>
