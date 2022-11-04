const schedulerStatusRegeXp = /^scheduler\sis\s(.*)/;

export default function parseSchedulerLine(str) {
  const match = str.match(schedulerStatusRegeXp);
  if (!match) {
    throw new Error('incorrect_input');
  }
  const [, schedulerStatus] = match;

  return schedulerStatus;
}
