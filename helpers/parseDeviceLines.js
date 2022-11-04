const deviceStatusRegeXp = /^device\sfor\s(.*?):\s(.*)$/gm;

export default function parseDeviceLines(str) {
  return Array.from(str.matchAll(deviceStatusRegeXp)).reduce(
    (prev, [, device, path]) => Object.assign(prev, { [device]: path }),
    {}
  );
}
