import React from 'react';
// eslint-disable-next-line
import { shallow } from 'enzyme';
import Home from '../pages';

describe('Test Home component', () => {
  it('Check if component Home is rendered', () => {
    const wrap = shallow(<Home />);

    expect(wrap.exists()).toBe(true);
  });
});
