export default function combine(devices, statusses) {
  return Object.keys(devices).reduce(
    (prev, key) =>
      Object.assign(prev, {
        [key]: {
          status: statusses[key],
          path: devices[key],
        },
      }),
    {}
  );
}
