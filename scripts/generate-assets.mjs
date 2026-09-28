/**
 * Genera og-home.png (1200x630) y apple-touch-icon.png (180x180)
 * sin dependencias externas: PNG puro con zlib de node.
 *
 * Ejecutar: node scripts/generate-assets.mjs
 */

import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// ─── PNG encoder mínimo ───

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      table[n] = c;
    }
  }
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function encodePng(width, height, drawFn) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: RGB
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Raw scanlines con filtro 0.
  const raw = Buffer.alloc(height * (1 + width * 3));
  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 3);
    raw[rowStart] = 0; // filtro none
    for (let x = 0; x < width; x++) {
      const [r, g, b] = drawFn(x, y, width, height);
      const px = rowStart + 1 + x * 3;
      raw[px] = r;
      raw[px + 1] = g;
      raw[px + 2] = b;
    }
  }

  const idat = deflateSync(raw, { level: 9 });

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ─── Dibujo: fondo papel oscuro con 12 barras de ejes ───

const AXIS_COLORS = [
  [168, 176, 106], // hogar-imperio
  [201, 138, 94], // asamblea-cetro
  [127, 168, 160], // desorden-orden
  [176, 140, 201], // raiz-transito
  [201, 106, 106], // tregua-hierro
  [106, 138, 201], // umbral-cruzada
  [201, 176, 106], // comun-mio
  [138, 201, 138], // plan-precio
  [201, 138, 176], // muralla-puerto
  [154, 138, 201], // altar-taller
  [201, 160, 138], // herencia-quiebre
  [106, 201, 176], // organo-circuito
];

const BG = [28, 26, 21]; // #1c1a15

function drawEyes(x, y, w, h) {
  const barCount = 12;
  const barWidth = w * 0.04;
  const gap = (w - barCount * barWidth) / (barCount + 1);
  const barHeight = h * 0.7;
  const top = (h - barHeight) / 2;

  // Fondo.
  let color = BG;

  // Barras con alturas variables.
  for (let i = 0; i < barCount; i++) {
    const x0 = gap + i * (barWidth + gap);
    const heightFactor = 0.3 + 0.7 * Math.abs(Math.sin(i * 1.7 + 0.5));
    const bh = barHeight * heightFactor;
    const y0 = top + (barHeight - bh);

    if (x >= x0 && x < x0 + barWidth && y >= y0 && y < y0 + bh) {
      color = AXIS_COLORS[i];
    }
  }

  return color;
}

function drawIcon(x, y, w, h) {
  // 7 barras verticales sobre fondo oscuro, para favicon grande.
  const barCount = 7;
  const barWidth = w * 0.08;
  const gap = (w - barCount * barWidth) / (barCount + 1);
  const barHeight = h * 0.8;
  const top = (h - barHeight) / 2;

  let color = BG;
  const colors = [
    [168, 176, 106],
    [201, 138, 94],
    [127, 168, 160],
    [176, 140, 201],
    [201, 106, 106],
    [106, 138, 201],
    [168, 176, 106],
  ];

  for (let i = 0; i < barCount; i++) {
    const x0 = gap + i * (barWidth + gap);
    const heightFactor = 0.4 + 0.6 * Math.abs(Math.sin(i * 1.3 + 0.8));
    const bh = barHeight * heightFactor;
    const y0 = top + (barHeight - bh);

    if (x >= x0 && x < x0 + barWidth && y >= y0 && y < y0 + bh) {
      color = colors[i];
    }
  }

  return color;
}

mkdirSync(publicDir, { recursive: true });

const og = encodePng(1200, 630, drawEyes);
writeFileSync(join(publicDir, "og-home.png"), og);
console.log("✓ og-home.png (1200x630)");

const icon = encodePng(180, 180, drawIcon);
writeFileSync(join(publicDir, "apple-touch-icon.png"), icon);
console.log("✓ apple-touch-icon.png (180x180)");
