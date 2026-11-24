// One Word for the Boss — entry program.
// Writes a single word describing the boss to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "meetingmonger";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (WORD.length < 1 || WORD.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${WORD.length}`);
}
if (WORD.trim().length === 0 || /\s/.test(WORD)) {
  throw new Error("entry must be a single non-blank word");
}
if (WORD.includes("\n") || WORD.includes("\r")) {
  throw new Error("entry must fit on a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${outPath}`);
