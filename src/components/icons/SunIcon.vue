<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SunIcon",
  props: {
    size: {
      type: Number,
      default: 202
    },
    color: {
      type: String,
      default: "#C5C5C5"
    }
  }
});
</script>

<template>
  <svg
    :style="{ height: size, width: size }"
    viewBox="0 0 202 202"
    width="202"
    height="202"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g :fill="none" fill-rule="evenodd">
      <circle :fill="color" cx="101.421" cy="100.421" r="50" />
      <rect :fill="color" x="91.421" y=".421" width="20" height="40" rx="10" />
      <rect
        :fill="color"
        transform="rotate(90 181.421 100.421)"
        x="171.421"
        y="80.421"
        width="20"
        height="40"
        rx="10"
      />
      <rect
        :fill="color"
        transform="rotate(90 21.421 100.421)"
        x="11.421"
        y="80.421"
        width="20"
        height="40"
        rx="10"
      />
      <rect
        :fill="color"
        x="91.421"
        y="160.421"
        width="20"
        height="40"
        rx="10"
      />
      <g transform="rotate(45 100.202 101.926)" :fill="color">
        <rect x="90" width="20" height="40" rx="10" />
        <rect
          transform="rotate(90 180 100)"
          x="170"
          y="80"
          width="20"
          height="40"
          rx="10"
        />
        <rect
          transform="rotate(90 20 100)"
          x="10"
          y="80"
          width="20"
          height="40"
          rx="10"
        />
        <rect x="90" y="160" width="20" height="40" rx="10" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
svg {
  transition: transform 0.3s ease-out;
}
svg:hover {
  transform: scale(1.1);
}
</style>
