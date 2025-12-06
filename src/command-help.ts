import { CLICommand } from "./get-commands";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  for (const commandName in commands) {
    const command = commands[commandName];
    console.log(`${command.name}: ${command.description}`);
  }
}
