const printerStatusRegeXp = /^printer\s(.*?)(\sis\s|\snow\s|\s)(\w*)?/gm;

export default function parsePrinterStatusLines(str) {
  return Array.from(str.matchAll(printerStatusRegeXp)).reduce(
    (prev, [, printer,, status]) => Object.assign(prev, { [printer]: status }),
    {}
  );
}
