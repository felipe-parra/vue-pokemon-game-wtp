<template>
  <div class="pokemon-container d-flex justify-content-center align-items-center">
    <img :src="imgSrc" class="hidden-pokemon mx-auto" alt="pokemon" v-if="!showPokemon"/>

    <img :src="imgSrc" class="fade-in" alt="pokemon"  v-else/>
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
  z-index: 1;
}
img {
  height: 200px;
  /* position: absolute; */
  right: 20%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  
}
.hidden-pokemon {
  filter: brightness(0) !important;
}

/* Centrar pokemon image */
/* img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
} */
</style>