import React from 'react';
// eslint-disable-next-line
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Home from '../pages/index';
import theme from '../styles/theme';

describe('Test h1', () => {
  it('Expect "Next.js Structure"', () => {
    const wrap = mount(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
    expect(wrap.find('h1').text()).toEqual('Next.js Structure');
  });
});
