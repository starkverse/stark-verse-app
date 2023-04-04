import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import Basic from '@/components/BasicLayout';
import { AccountProvider } from '@/components/AccountProvider';

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
    <AccountProvider>
      <Basic>
        <Component {...pageProps} />
      </Basic>
    </AccountProvider>
    <ToastContainer
      position="top-right"
      autoClose={4000}
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
