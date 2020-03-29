<script lang="ts">
import Vue from 'vue'
import { ref, computed, Ref } from '@vue/composition-api'

export default Vue.extend({
  name: "MovieCard",
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
    <div class="image">
      <img src="http://sp2.cinedor.es/821/cartel-relatos-salvajes-2-617.jpg" alt="">
    </div>
    <div class="info">
      <h3 class="title">Relatos salvajes</h3>
      <p class="description">La película consta de seis episodios que alternan la intriga, la comedia y la violencia. Sus personajes se verán empujados hacia el abismo y hacia el innegable placer de perder el control, cruzando la delgada línea que separa la civilización de la barbarie.</p>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
  }
  .card .image {
    width: 300px;
    height: 300px;
  }

  .card .image img {
    width: 100%;
  }
</style>
