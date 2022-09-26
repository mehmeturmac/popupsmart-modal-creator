import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>modal.cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default Home;
