import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  React.useEffect(() => {
    toast.success('Next.js is so nice!');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default MyApp;
