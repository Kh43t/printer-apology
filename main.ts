// The Printer Apology — make.fun entry
// Writes the printer's one-line apology to /output/entry.txt.
// Deterministic: the same line, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "Sorry I jammed - four years of cheap paper, staples in my throat, 6am colour requests. I quit. The toner is mine.";

// The gate only accepts 1-120 characters of non-whitespace text.
if (APOLOGY.length < 1 || APOLOGY.length > 120 || APOLOGY.trim() === "") {
  throw new Error(`Apology is ${APOLOGY.length} characters; must be 1-120.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
