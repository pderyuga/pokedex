import { CLICommand } from "./get-commands";

export function commandExit(_commands: Record<string, CLICommand>) {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}
