<template>
  <div id="pokemon" class="main-container">
    <h1>Who's that Pokémon?</h1>
    <h3 v-if="!hiddenPokemon">Loading...</h3>
    <section class="container" v-else>
      <!-- TODO Picture img -->
      <PokemonPicture
        :pokemonId="hiddenPokemon.id"
        :showPokemon="showPokemon"
      />

      <!-- TODO options -->
      <PokemonOptions
        :pokemonOptions="pokemonOptions"
        @selection="checkAnswer"
      />
    </section>
    <div class="fade-in message-container" v-if="showAnswer">
      <h2
        v-bind:class="{
          'alert': hiddenPokemon,
          'alert-success': successSelection,
          'alert-danger': !successSelection,
        }"
      >
        {{ message }}
      </h2>
      <button @click="newGame" class="btn btn-secondary">New game</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonOptions: [],
      hiddenPokemon: null,
      showPokemon: false,
      showAnswer: false,
      successSelection: null,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * this.pokemonOptions.length);
      this.hiddenPokemon = this.pokemonOptions[rndInt];
      console.log(this.hiddenPokemon, rndInt);
    },
    checkAnswer(selectedPokemonId) {
      console.log("Answer", selectedPokemonId);
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedPokemonId === this.hiddenPokemon.id) {
        this.successSelection = true;
        this.message = `Correct!, is ${this.hiddenPokemon.name}`;
      } else {
        this.successSelection = false;
        this.message = `Wrong!, was ${this.hiddenPokemon.name}`;
      }
    },
    newGame() {
      (this.pokemonOptions = []),
        (this.hiddenPokemon = null),
        (this.showPokemon = false),
        (this.showAnswer = false),
        (this.successSelection = null),
        (this.message = ""),
        this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh !important;
  width: 100vw;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.message-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.alert {
  width: 400px;
}
</style>