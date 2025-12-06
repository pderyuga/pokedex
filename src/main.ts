import { initState } from "./state.js";
import { startREPL } from "./repl.js";

async function main() {
  const state = await initState();
  startREPL(state);
}

main();
