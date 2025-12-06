import { createInterface } from "node:readline";
import { getCommands } from "./get-commands.js";

export async function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", (line) => {
    const cleanedInput = cleanInput(line);
    if (cleanedInput.length === 0) {
      rl.prompt();
    }
    const commandName = cleanedInput[0];
    const commands = getCommands();
    const currentCommand = commands[commandName];
    if (!currentCommand) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt();
    }

    try {
      currentCommand.callback(commands);
    } catch (err) {
      console.log(err);
    }

    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}
