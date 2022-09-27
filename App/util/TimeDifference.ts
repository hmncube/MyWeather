const TimeDifference = (before: number, later: number) => {
  const diff = later - before;
  console.log(diff);
  const hours = diff / 3600;
  console.log(hours);
  return Math.round(hours);
};
export default TimeDifference;
