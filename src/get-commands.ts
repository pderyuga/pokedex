import { CLICommand } from "./state.js";

import { commandExit } from "./command-exit.js";
import { commandHelp } from "./command-help.js";
import { commandMap } from "./command-map.js";
import { commandMapb } from "./command-mapb.js";
import { commandExplore } from "./command-explore.js";
import { commandCatch } from "./command-catch.js";
import { commandInspect } from "./command-inspect.js";
import { commandPokedex } from "./command-pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Get the next 20 locations in the Pokemon world",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Get the previous 20 locations in the Pokemon world",
      callback: commandMapb,
    },
    explore: {
      name: "explore <location_name>",
      description: "Get all the Pokemon for a given location",
      callback: commandExplore,
    },
    catch: {
      name: "catch <pokemon_name>",
      description: "Attempt to catch a Pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect <pokemon_name",
      description: "View details about a caught Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "See all the Pokemon you've caught",
      callback: commandPokedex,
    },
  };
}
