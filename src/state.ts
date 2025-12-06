import { createInterface, type Interface } from "readline";
import { getCommands } from "./get-commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: State) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationURL: string | null;
  prevLocationURL: string | null;
};

export async function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  const pokeAPI = new PokeAPI();
  const nextLocationURL =
    "https://pokeapi.co/api/v2/location-area/?offset=0&limit=20";
  const prevLocationURL = null;

  return {
    rl,
    commands,
    pokeAPI,
    nextLocationURL,
    prevLocationURL,
  };
}
