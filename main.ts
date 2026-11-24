// Seventeen Syllables of Debugging — make.fun entry.
// Deterministic: writes one original haiku about debugging to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt). No network,
// no clock, no randomness — the same bytes on every run.
//
// The haiku, counted by hand (5-7-5):
//   breakpoint never fires      — break-point(2) nev-er(2) fires(1) = 5
//   cursor blinks at three a.m. — cur-sor(2) blinks(1) at(1) three(1) a(1) m(1) = 7
//   a missing comma             — a(1) miss-ing(2) com-ma(2) = 5
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "breakpoint never fires",
  "cursor blinks at three a.m.",
  "a missing comma",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");
