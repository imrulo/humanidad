/**
 * Direcciones de donación estáticas y configurables.
 * Edita este archivo para añadir tus propias direcciones.
 * No se integran procesadores de pago: solo se muestran direcciones.
 */

export interface DonationAddresses {
  lightningLnurl: string;
  bitcoinOnchain: string;
  monero: string;
  ethereum: string;
}

export const DONATIONS: DonationAddresses = {
  lightningLnurl: "humani@getalby.com",
  bitcoinOnchain: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  monero:
    "44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3",
  ethereum: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
};

export const DONATION_NOTE = {
  es: "humani.dad es gratis y sin vigilancia. Si quieres sostenerlo, puedes enviar una donación a estas direcciones. No hay procesadores, no hay rastros, no hay agradecimientos públicos.",
  en: "humani.dad is free and unmonitored. If you want to keep it alive, you can send a donation to these addresses. No processors, no tracking, no public thanks.",
};
