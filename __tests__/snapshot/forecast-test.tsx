import React from 'react';
import renderer from 'react-test-renderer';
import ForecastCardRow from '../../App/components/ForecastCardRow';

it('ForecastCardRow renders correctly', () => {
  const tree = renderer
    .create(
      <ForecastCardRow
        image={require('../../App/assets/images/hot.png')}
        title={'Test'}
        value={'Value'}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
