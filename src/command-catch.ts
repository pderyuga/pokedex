import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const { pokeAPI } = state;

  if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name");
  }

  const pokemonName = args[0];
  const pokemon = await pokeAPI.fetchPokemon(pokemonName);
  const pokemonBaseExperience = pokemon.base_experience;

  console.log(`Throwing a Pokeball at ${pokemonName}...`);

  const threshold = pokemonBaseExperience * 1.5;
  const randomRoll = Math.floor(Math.random() * 300);
  const caught = randomRoll > threshold;

  if (caught) {
    console.log(`${pokemonName} was caught!`);
    state.pokedex[pokemonName] = pokemon;
  } else {
    console.log(`${pokemonName} escaped!`);
  }
}
