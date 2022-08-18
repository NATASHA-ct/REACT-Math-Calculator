import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import Home from '../components/Homepage';

describe('Rendering components Test if it satiesfies', () => {
  it('snapshot for Caculator', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot for Home', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
