const ConvertTime = (time: number, timezone: number) => {
  const date = new Date((time + timezone) * 1000);
  return date.toLocaleString();
};

export default ConvertTime;
