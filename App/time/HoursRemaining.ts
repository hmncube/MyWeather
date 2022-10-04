const HoursRemaining = (now: string, after: string) => {
  const nowValues = getHourMinAndNotationFromDate(now);
  const notation = nowValues.notation;
  let hour = nowValues.hour;
  const min = nowValues.min;

  const afterValues = getHourMinAndNotationFromDate(after);
  let afterHour = afterValues.hour;
  let afterMin = afterValues.min;
  let afterNotation = afterValues.notation;

  const diff = TimeDiff(
    min,
    hour,
    notation,
    afterMin,
    afterHour,
    afterNotation,
  );
  return diff.leftHour + ' Hrs ' + diff.leftMin + ' min';
};
export default HoursRemaining;

const TimeDiff = (
  beforeMin: number,
  beforeHour: number,
  notationBefore: string,
  afterMin: number,
  afterHour: number,
  notaionAfter: string,
) => {
  if (notationBefore === 'PM') {
    beforeHour = beforeHour + 12;
  }
  if (notaionAfter === 'PM') {
    afterHour = afterHour + 12;
  }
  if (afterMin < beforeMin) {
    afterMin = afterMin + 60;
    beforeHour = beforeHour + 1;
  }
  const leftMin = afterMin - beforeMin;
  const leftHour = afterHour - beforeHour;
  return {leftHour, leftMin};
};

const getHourMinAndNotationFromDate = date => {
  date = date.trim();
  const dateArray = date.split(' ')[0].split(':');
  const notation = date.split(' ')[1];
  let hour = Number(dateArray[0]);
  const min = Number(dateArray[1]);
  return {notation, hour, min};
};
