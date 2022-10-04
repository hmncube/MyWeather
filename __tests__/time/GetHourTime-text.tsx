import GetHourTime from '../../App/time/GetHourTime';

it('Time in hours and minutes is correctly extracted from date object', () => {
  expect(GetHourTime('30/9/2022, 8:55:09 AM')).toEqual('8:55 AM');
});
