import { State } from "./state.js";

export async function commandExit(state: State) {
  const { rl, pokeAPI } = state;
  console.log("Closing the Pokedex... Goodbye!");
  rl.close();
  pokeAPI.closeCache();
  process.exit(0);
}
