import { State } from "./state.js";

export async function commandMap(state: State) {
  const { pokeAPI, nextLocationURL } = state;

  if (!nextLocationURL) {
    console.log("You're on the last page");
    return;
  }

  const locations = await pokeAPI.fetchLocations(nextLocationURL);
  state.prevLocationURL = locations.previous;
  state.nextLocationURL = locations.next;
  const results = locations.results;
  for (const result of results) {
    console.log(result.name);
  }
}
