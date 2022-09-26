import type { NextPage } from 'next';
import Head from 'next/head';

// Components
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>modal.cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
};

export default Home;
