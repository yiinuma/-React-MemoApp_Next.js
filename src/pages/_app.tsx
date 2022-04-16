import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Toaster position='top-center' />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
