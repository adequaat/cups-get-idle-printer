import test from "ava";
import parsePrinterStatusLines from "../helpers/parsePrinterStatusLines.js";

test("should parse a device line succesfuly", (t) => {
  t.deepEqual(
    parsePrinterStatusLines(
      "printer printerName now printing printerName-59.  enabled since Fri Nov  4 11:29:23 2022\nSending data to printer."
    ),
    { printerName: "printing printerName-59" }
  );

  t.deepEqual(
    parsePrinterStatusLines(
      "printer printerName is idle.  enabled since Fri Nov  4 11:29:23 2022\nSending data to printer."
    ),
    { printerName: "idle" }
  );
});
