import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useI18n } from "../i18n";
import { DONATIONS } from "../data/donations";

export function Donate() {
  const { copy } = useI18n();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  async function handleCopy(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const input = document.createElement("input");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  const items = [
    { key: "lightning", label: copy.donate.lightning, value: DONATIONS.lightningLnurl },
    { key: "bitcoin", label: copy.donate.bitcoin, value: DONATIONS.bitcoinOnchain },
    { key: "monero", label: copy.donate.monero, value: DONATIONS.monero },
    { key: "ethereum", label: copy.donate.ethereum, value: DONATIONS.ethereum },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="font-serif text-3xl font-black md:text-5xl">{copy.donate.title}</h1>
        <p className="mt-4 text-lg text-ink/70 dark:text-ink-dark/70">{copy.donate.subtitle}</p>
      </header>

      <p className="mb-8 rounded-2xl border border-ink/15 p-4 text-center text-sm italic text-ink/60 dark:border-ink-dark/15 dark:text-ink-dark/60">
        {copy.donate.note}
      </p>

      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex items-center justify-between gap-4 rounded-2xl border border-ink/15 p-4 dark:border-ink-dark/15"
          >
            <div className="min-w-0">
              <div className="font-bold">{item.label}</div>
              <div className="truncate font-mono text-sm text-ink/60 dark:text-ink-dark/60">
                {item.value}
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(item.key, item.value)}
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-ink/20 px-4 py-2 text-sm font-bold transition-colors hover:border-ink/40 dark:border-ink-dark/20 dark:hover:border-ink-dark/40"
              aria-label={`${copy.donate.copy} ${item.label}`}
            >
              {copiedKey === item.key ? <Check size={14} /> : <Copy size={14} />}
              {copiedKey === item.key ? copy.donate.copied : copy.donate.copy}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
