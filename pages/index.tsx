import React, { useRef, useEffect } from 'react';
import Head from 'next/head'

import ResultItem from '../components/resultItem/ResultItem';
import CardItem from '../components/card/CardItem';

import {
  Row,
  LeftContainer,
  RigthContainer,
  Footer
} from './style/home_style';

const Home = () => {

  const GlobalListener = useRef(null);
  console.log("🚀 ~ file: index.tsx ~ line 17 ~ Home ~ GlobalListener", GlobalListener)

  const handleKeyPress = (event: any) => {
    console.log("🚀 ~ file: index.tsx ~ line 20 ~ consthandleKeyPress ~ event", event)
  }

  useEffect(() => {
    GlobalListener !== null && document.addEventListener('keydown', handleKeyPress);
  }, [GlobalListener]);

  return (
    <div ref={GlobalListener}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <LeftContainer>
          <ResultItem />
        </LeftContainer>
        <RigthContainer>
          <CardItem />
          <CardItem />
          <CardItem />
        </RigthContainer>
      </Row>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </Footer>
    </div>
  )
}

export default Home;