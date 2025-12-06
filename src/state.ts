import { createInterface, type Interface } from "readline";
import { getCommands } from "./get-commands.js";

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
};

export async function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  return {
    rl,
    commands,
  };
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: State) => void;
};
