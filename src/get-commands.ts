import { CLICommand } from "./state.js";

import { commandExit } from "./command-exit.js";
import { commandHelp } from "./command-help.js";
import { commandMap } from "./command-map.js";
import { commandMapb } from "./command-mapb.js";

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
    // can add more commands here
  };
}
