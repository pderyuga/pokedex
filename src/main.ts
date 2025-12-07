import { initState } from "./state.js";
import { startREPL } from "./repl.js";

async function main() {
  const state = await initState(1000 * 60 * 5);
  startREPL(state);
}

main();
