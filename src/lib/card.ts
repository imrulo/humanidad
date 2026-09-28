import { toPng } from "html-to-image";
import type { Scores } from "../data/axes";

/**
 * Exporta la tarjeta de resultado como PNG en el cliente.
 * No usa servicios externos: todo ocurre en el navegador.
 */

export interface CardExportOptions {
  pixelRatio?: number;
  backgroundColor?: string;
}

export async function exportCardAsPng(
  element: HTMLElement,
  options: CardExportOptions = {},
): Promise<Blob | null> {
  const { pixelRatio = 2, backgroundColor = "#1c1a15" } = options;

  try {
    const dataUrl = await toPng(element, {
      pixelRatio,
      backgroundColor,
      cacheBust: true,
      style: {
        transform: "none",
      },
    });

    const response = await fetch(dataUrl);
    return await response.blob();
  } catch (error) {
    console.error("Error al exportar la tarjeta:", error);
    return null;
  }
}

/** Descarga un blob como archivo. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/** Genera un nombre de archivo amigable para la tarjeta. */
export function cardFilename(_scores: Scores, ideologyName: string): string {
  const slug = ideologyName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40);
  return `humani-dad-${slug}.png`;
}
