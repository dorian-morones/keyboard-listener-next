import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head'

import ResultItem from '../components/resultItem/ResultItem';
import CardItem from '../components/card/CardItem';

import { keyLocations } from '../static/keyCodesValues';

import {
  Row,
  LeftContainer,
  RigthContainer,
  Footer
} from './style/home_style';

const Home = () => {

  const [key, setKey] = useState<any>(null)
  console.log("🚀 ~ file: index.tsx ~ line 17 ~ Home ~ key", key)
  const GlobalListener = useRef(null);

  const handleKeyPress = (event: any) => {
    setKey(event);
  }

  useEffect(() => {
    GlobalListener !== null && document.addEventListener('keydown', handleKeyPress);
  }, [GlobalListener]);

  const handleLocationKEy = (location:number) => {
    return keyLocations[location]
  };

  return (
    <div ref={GlobalListener}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <LeftContainer>
          <ResultItem value={key?.key} />
        </LeftContainer>
        <RigthContainer>
          <CardItem title="Code" text={key?.code} />
          <CardItem title="KeyCode" text={key?.keyCode} />
          <CardItem title="Location" text={handleLocationKEy(key?.location)} />
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