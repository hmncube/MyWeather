const TimeDifference = (before: number, later: number) => {
  let diff = later - before;
  const hours = diff / 3600;
  diff = diff - Math.round(hours) * 3600;
  const min = ((diff % 3600) / 3600) * 60;
  return Math.round(hours) + ' Hrs ' + Math.round(min) + ' min';
};
export default TimeDifference;
