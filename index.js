import getCupsPrinterStatusses from './helpers/getCupsPrinterStatusses.js';

export default async function getCupsPrinters() {
  return await getCupsPrinterStatusses();
}