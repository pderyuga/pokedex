import { State } from "./state.js";

export function startREPL(state: State) {
  const { rl, commands } = state;

  rl.prompt();

  rl.on("line", async (line) => {
    const cleanedInput = cleanInput(line);
    if (cleanedInput.length === 0) {
      rl.prompt();
    }
    const commandName = cleanedInput[0];
    const currentCommand = commands[commandName];
    if (!currentCommand) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`
      );
      rl.prompt();
    }

    try {
      await currentCommand.callback(state);
    } catch (err) {
      console.log((err as Error).message);
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
