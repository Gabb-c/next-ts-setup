import 'react-toastify/dist/ReactToastify.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    toast.dark('Powered by Vercel');
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar closeButton={false} />
    </>
  );
}

export default MyApp;
