import { State } from "./state.js";

export async function commandHelp(state: State) {
  const { commands } = state;
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  for (const commandName in commands) {
    const command = commands[commandName];
    console.log(`${command.name}: ${command.description}`);
  }
}
