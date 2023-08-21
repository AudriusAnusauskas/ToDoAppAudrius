export function calculateTimeLeft(deadlineDateTime) {
  if (!deadlineDateTime) {
    return;
  } else {
    const now = new Date();
    const deadline = new Date(deadlineDateTime);
    const timeLeftMilliseconds = deadline - now;
    const totalMinutesLeft = Math.floor(timeLeftMilliseconds / (60 * 1000));
    const daysLeft = Math.floor(totalMinutesLeft / (24 * 60));
    const hoursLeft = Math.floor((totalMinutesLeft % (24 * 60)) / 60);
    const minutesLeft = totalMinutesLeft % 60;

    return { daysLeft, hoursLeft, minutesLeft };
  }
}

export function compareByTimeLeft(item1, item2) {
  const isItem1Empty = !item1.deadline;
  const isItem2Empty = !item2.deadline;

  if (isItem1Empty && isItem2Empty) {
    return 0;
  } else if (isItem1Empty) {
    return 1;
  } else if (isItem2Empty) {
    return -1;
  }
  const timeLeftItem1 = calculateTimeLeft(item1.deadline);
  const timeLeftItem2 = calculateTimeLeft(item2.deadline);

  const totalMinutesItem1 =
    timeLeftItem1.daysLeft * 24 * 60 +
    timeLeftItem1.hoursLeft * 60 +
    timeLeftItem1.minutesLeft;
  const totalMinutesItem2 =
    timeLeftItem2.daysLeft * 24 * 60 +
    timeLeftItem2.hoursLeft * 60 +
    timeLeftItem2.minutesLeft;

  return totalMinutesItem1 - totalMinutesItem2;
}

export function sortByTimestamp(a, b) {
  return a.timestamp - b.timestamp;
}
