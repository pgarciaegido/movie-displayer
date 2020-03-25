<script lang="ts">
import Vue from 'vue'
import { ref, computed, Ref } from '@vue/composition-api'

export default Vue.extend({
  setup(props, context) {

    const movieName:Ref<string> = ref('Relatos Salvajes')
    const country:Ref<string> = ref('Argentina')

    const nameAndCountry = computed(() => `The movie name is ${movieName.value} from ${country.value}`);

    const addA = () => movieName.value = movieName.value + ' a'; 

    return { movieName, country, nameAndCountry, addA }
  }
})

</script>

<template>
  <div class="card">
    <h1>{{movieName}}</h1>
    <h2>{{country}}</h2>
    <h3>{{nameAndCountry}}</h3>
    <button @click="addA">Add a!</button>
  </div>
</template>

<style scoped>

</style>
