import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [
    new InjectedConnector({ options: { id: 'braavos' }}),
    new InjectedConnector({ options: { id: 'argentX' }}),
  ]
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return <StarknetConfig connectors={connectors}>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme="dark"
      closeButton={false}
    />
  </StarknetConfig>
}
