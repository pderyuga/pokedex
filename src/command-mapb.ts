import { State } from "./state.js";

export async function commandMapb(state: State) {
  const { pokeAPI, prevLocationURL } = state;

  if (!prevLocationURL) {
    console.log("You're on the first page");
    return;
  }

  const locations = await pokeAPI.fetchLocations(prevLocationURL);
  state.prevLocationURL = locations.previous;
  state.nextLocationURL = locations.next;
  const results = locations.results;
  for (const result of results) {
    console.log(result.name);
  }
}
