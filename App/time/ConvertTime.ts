const ConvertTime = (time: number) => {
  const date = new Date(time * 1000);
  return date.toLocaleString('en-GB');
};
export default ConvertTime;
