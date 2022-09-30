import '../styles/globals.css';
import type { AppProps } from 'next/app';

// Context
import { MainProvider } from '../context/mainContext';

//Navbar
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Nav />
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
