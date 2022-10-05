import React from 'react';
import renderer from 'react-test-renderer';
import Sunshine from '../../App/components/Sunshine';
import WeatherNow from '../../App/components/WeatherNow';
import Error from '../../App/components/Error';
//import Loading from '../../App/components/Loading';

describe('Testing all components for the weather screen', () => {
  it('Sunshine renders correctly', () => {
    const tree = renderer
      .create(
        <Sunshine
          sunrise={'0700AM'}
          sunset={'0700PM'}
          length={'12 Hrs 0 min'}
          remaining={'10 Hrs 2 min'}
          isDarkMode={true}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('WeatherNow renders correctly', () => {
  const tree = renderer
    .create(
      <WeatherNow
        description={'CLOUDY'}
        pressure={'1000 hPa'}
        humidity={'30%'}
        isDarkMode={true}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Error renders correctly', () => {
  const tree = renderer
    .create(<Error msg={'Test erroor message'} isDarkMode={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//TODO fix test
// it('Loading renders correctly', () => {
//   const tree = renderer.create(<Loading />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
