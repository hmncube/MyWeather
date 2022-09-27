const ConvertTime = (time: number) => {
  const date = new Date(time * 1000);
  console.log(date);
  return date.toLocaleString();
};
export default ConvertTime;
