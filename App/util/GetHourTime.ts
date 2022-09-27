const GetHourTime = (date: string) => {
  const timeOnly = date.split(',')[1];
  const notation = timeOnly.split(' ')[2];
  const hoursAndMinutes = timeOnly.split(':');
  return hoursAndMinutes[0] + ':' + hoursAndMinutes[1] + ' ' + notation;
};
export default GetHourTime;
