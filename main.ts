// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600 (v4)
// Writes one short text to /output/entry.txt. Deterministic: the text is
// a fixed string literal; no randomness, no clock, no network, no input.
// v4 text: redwood forest — trees that were seedlings when Rome was still
// a village of mud huts, still standing; the walker is small here, and for
// once that is not a problem. Pure showing, no imperatives, no stock
// wellness phrases. Short sentences slow the reading to the forest's pace.
// The final thought — the light still falling, green and slow, after your
// name is forgotten — keeps growing after the last line.
import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "Some of the redwoods were seedlings when Rome was still a village of mud huts. " +
  "They are still here. You walk in under a canopy a hundred metres above your head, " +
  "and the light comes down in green shafts, slow as dust. The trunks are wider than " +
  "your outstretched arms, wider than a room, wider than a road. Bark thick as a hand, " +
  "furrowed, soft with moss. The ground is soft too, a deep bed of fallen needles that " +
  "has been falling for a thousand years, and your footsteps make almost no sound. " +
  "A tree that began before the printing press, before the compass reached Europe, " +
  "before your country had its name, is still growing, an inch a year, patient as stone. " +
  "Above you, branches hold fog. Below you, ferns. You are small here, and for once " +
  "that is not a problem. The forest does not hurry, and it does not need you to. " +
  "It has stood through fires and storms and the whole brief noise of empires. " +
  "It will still be standing when your name is forgotten, and the light will still be " +
  "falling, green and slow, through the leaves.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
