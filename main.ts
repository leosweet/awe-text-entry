// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600 (v3)
// Writes one short text to /output/entry.txt. Deterministic: the text is
// a fixed string literal; no randomness, no clock, no network, no input.
// v3 text: a river that has run over the same stones for ten thousand
// years — slower and more patient than v1's starlight and v2's earth.
// Pure showing, no imperatives, no stock wellness phrases. Short
// sentences slow the reading to the river's pace. "It has nowhere else
// to be" removes all urgency; the final thought — the river still
// learning the stones' shape after ten thousand years — keeps growing
// after the last line.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "The river has run over the same stones for ten thousand years. It does " +
  "not hurry. It has nowhere else to be. The stones are smooth now. The " +
  "river is still learning their shape.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
