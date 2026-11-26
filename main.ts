import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const scene =
  "Dad burned the toast again, so Mum called it 'smoky artisan style' - and my little brother Leo, six and loyal to a fault, ate two slices, crumbs on his chin, grinning like he'd just won a prize.";

if (scene.length > 275 || scene.length < 1) {
  throw new Error("entry length out of bounds: " + scene.length);
}

const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), scene, "utf8");
