/* eslint-disable prefer-const */
export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line prefer-const
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
    /* eslint-disable no-unused-vars */
  }

  return [task, task2];
}
