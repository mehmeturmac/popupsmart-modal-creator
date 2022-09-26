import '../styles/globals.css';
import type { AppProps } from 'next/app';

//Navbar
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
