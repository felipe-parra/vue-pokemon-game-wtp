import baseAxios from "./baseAxios";

const getPokemon = () => {
  const pokemonArr = Array.from(Array(650));
  return pokemonArr.map((_, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixedPokemon = getPokemon().sort(() => Math.random() - 0.5);
  const pokemon = await getPokemonNames(mixedPokemon.splice(0, 4));
  console.log(pokemon);
  return pokemon;
};

const getPokemonNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    baseAxios.get(`pokemon/${a}`),
    baseAxios.get(`pokemon/${b}`),
    baseAxios.get(`pokemon/${c}`),
    baseAxios.get(`pokemon/${d}`),
  ];

  const result = await Promise.all(promiseArr);

  const pokemonArr = result.map(({ data }) => ({
    name: data.name,
    id: data.id,
  }));

  return pokemonArr;

};

export default getPokemonOptions;
