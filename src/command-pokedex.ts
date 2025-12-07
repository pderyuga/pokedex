import { State } from "./state.js";

export async function commandPokedex(state: State) {
  const { pokedex } = state;

  console.log("Your Pokedex:");

  for (const pokemon in pokedex) {
    console.log(` - ${pokemon}`);
  }
}
