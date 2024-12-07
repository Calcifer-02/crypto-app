import { cryptoData, cryptoAssets } from "./data.js";

export function fakeFetchCrypto() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(cryptoData);
      }, 1);
   });
}

export function fakeFetchCryptoAssets() {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(cryptoAssets);
      }, 1);
   });
}
