interface MonogramProps {
  name: string;
  size?: number;
  tint?: string;
}

/** Monograma tipográfico: inicial + color, sin fotos con copyright. */
export function Monogram({ name, size = 64, tint = "#a8b06a" }: MonogramProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="flex items-center justify-center rounded-full font-serif font-black"
      style={{
        width: size,
        height: size,
        backgroundColor: tint,
        color: "#1c1a15",
        fontSize: size * 0.45,
        lineHeight: 1,
      }}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}
