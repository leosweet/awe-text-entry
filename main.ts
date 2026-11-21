// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Writes one short text to /output/entry.txt. Deterministic: the text is
// a fixed string literal; no randomness, no clock, no network, no input.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "The light from the star above the roof left home before the first road was cut, " +
  "and it arrives tonight without a sound. It has crossed the whole dark to reach " +
  "this one quiet yard. It will still be falling long after the house is asleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
