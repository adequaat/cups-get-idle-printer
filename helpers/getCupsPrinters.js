import { exec } from "node:child_process";
import parseSchedulerLine from "./parseSchedulerLine.js";
import parseDeviceLines from "./parseDeviceLines.js";
import parsePrinterStatusLines from "./parsePrinterStatusLines.js";
import combine from "./combine.js";

export default function getCupsPrinters() {
  return new Promise((resolve, reject) => {
    const childProcess = exec("lpstat -r -v -p", {
      stdio: ["ignore", "pipe", "pipe"],
    });

    childProcess.stdout.on("data", (data) => {
      const str = data.toString();

      const schedulerStatus = parseSchedulerLine(str);
      if ("running" !== schedulerStatus) {
        reject(new Error("scheduler_not_running"));
      }

      try {
        const result = combine(
          parseDeviceLines(str),
          parsePrinterStatusLines(str)
        );

        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}
