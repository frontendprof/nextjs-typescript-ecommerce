import { FC } from 'react';
import { Layout } from '@components/common';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const Noop: FC = ({ children }) => <>{children}</>;
function MyApp({ Component, pageProps }: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
