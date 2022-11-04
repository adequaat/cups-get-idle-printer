const printerStatusRegeXp = /^printer\s(.*?)\s(is|now)\s(.*?)\./gm;

export default function parsePrinterStatusLines(str) {
  return Array.from(str.matchAll(printerStatusRegeXp)).reduce(
    (prev, [, printer,, status]) => Object.assign(prev, { [printer]: status }),
    {}
  );
}
