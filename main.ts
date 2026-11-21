// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600 (v2)
// Writes one short text to /output/entry.txt. Deterministic: the text is
// a fixed string literal; no randomness, no clock, no network, no input.
// v2 text: the whole earth seen from far away, turning slowly in the dark,
// held the way a hand holds a stone. Pure showing, no imperatives, no
// stock wellness phrases; the final image keeps growing after the last line.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "From far enough away, the whole earth is quiet. No roads, no roofs, no one " +
  "hurrying. Just blue water and green land turning slowly in the dark. The dark " +
  "is not empty. It is holding the earth the way a hand holds a stone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
