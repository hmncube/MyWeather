import TimeDifference from '../../App/time/TimeDifference';

it('Test the time difference calculations are correct', () => {
  expect(TimeDifference(1664517600, 1664522400)).toEqual('1 Hrs 20 min');
});
