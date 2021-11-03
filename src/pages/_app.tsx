import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { AppProps } from 'next/app';

import { toast, ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    toast.dark('Next.js is so nice!');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar closeButton={false} />
    </>
  );
}

export default MyApp;
