import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  const { pokeAPI } = state;

  if (args.length !== 1) {
    throw new Error("you must provide a location name");
  }

  const locationName = args[0];
  const location = await pokeAPI.fetchLocation(locationName);
  const pokemonEncounters = location.pokemon_encounters;

  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const encounter of pokemonEncounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}
