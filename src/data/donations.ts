/**
 * Direcciones de donación estáticas y configurables.
 * Edita este archivo para añadir tus propias direcciones.
 * No se integran procesadores de pago: solo se muestran direcciones.
 */

export interface DonationAddresses {
  bitcoinOnchain: string;
  ethereum: string;
  solana: string;
  doge: string;
}

export const DONATIONS: DonationAddresses = {
  bitcoinOnchain: "bc1qfque4fghwxusfh70l63lkxmzz8ctl02wexqahl",
  ethereum: "0xc7427F23C55a980cD2Ceea25eDb3b372af70aF0E",
  solana: "C6CfKTdZfnsikkLiJoc8F6EhLcXFkfYhPyHdwJaPAd1y",
  doge: "DSBH3W4pxqM9Ex8fbCYGWzCaCYcSGWcCpx",
};

export const DONATION_NOTE = {
  es: "humani.dad es gratis y sin vigilancia. Si quieres sostenerlo, puedes enviar una donación a estas direcciones. No hay procesadores, no hay rastros, no hay agradecimientos públicos.",
  en: "humani.dad is free and unmonitored. If you want to keep it alive, you can send a donation to these addresses. No processors, no tracking, no public thanks.",
};
