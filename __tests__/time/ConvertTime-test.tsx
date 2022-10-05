import ConvertTime from '../../App/time/ConvertTime';

describe('Tests for the Convert time function', () => {
  it('converts time correctly', () => {
    expect(ConvertTime(1664520909)).toEqual('30/09/2022, 08:55:09');
  });
});
