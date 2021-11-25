<template>
  <PokemonPage />
  <ContactComponent />
</template>

<script>
import PokemonPage from "./pages/PokemonPage.vue";
import ContactComponent from "./components/ContactComponent.vue";
import "./css/style.css";
import "./css/animation.css";

export default {
  name: "App",
  components: {
    PokemonPage,
    ContactComponent
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh !important;
  width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
