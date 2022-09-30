import HoursRemaining from '../../App/time/HoursRemaining';

it('calcluates the time differences between two dates', () => {
  expect(HoursRemaining('11:08 AM', '12:08 AM')).toEqual('1 Hrs 0 min');
});
