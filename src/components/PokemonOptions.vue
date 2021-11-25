<template>
  <div class="options-container">
    <ul>
      <li
        class="btn btn-info"
        v-for="pokemon in pokemonOptions"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { capitalize } from "../helpers";

export default {
  props: {
    pokemonOptions: {
      type: Array,
      required: true,
      default: [],
    },
  },
  methods: {
    emit() {},
  },

};
</script>

<style>
/* Pokemon Options */
ul {
  margin-top: 1rem;
  list-style-type: none;
  z-index: 10;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05) !important;
}

.options-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 300px;
}
</style>