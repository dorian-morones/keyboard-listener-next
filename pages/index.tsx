import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head'

import ResultItem from '../components/resultItem/ResultItem';
import CardItem from '../components/card/CardItem';

import { keyLocations } from '../static/keyCodesValues';

import GeneralContent from './style/GeneralContent';
import Row from './style/Row';
 import LeftContainer from './style/LeftContainer';
 import RigthContainer from './style/RigthContainer';
 import Footer from './style/Footer';
 import FooterText from './style/FooterText';
 import FooterLink from './style/FooterLink';
 import EmptyContainer from './style/EmptyContainer';
 import EmptyMessage from './style/EmptyMessage';
 
const Home = () => {

  const [key, setKey] = useState<any>(null)
  console.log("🚀 ~ file: index.tsx ~ line 22 ~ Home ~ key", key)
  const GlobalListener = useRef(null);

  const handleKeyPress = (event: any) => {
    setKey(event);
  }

  useEffect(() => {
    GlobalListener !== null && document.addEventListener('keydown', handleKeyPress);
  }, [GlobalListener]);

  const handleLocationKEy = (location: number) => {
    return keyLocations[location]
  };

  return (
    <div ref={GlobalListener}>
      <Head>
        <title>KeyBoard Listener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GeneralContent>

        {key === null ? (
          <EmptyContainer>
            <EmptyMessage>Press any key</EmptyMessage>
          </EmptyContainer>
        ) : (
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
          )

        }

        <Footer>
          <FooterText>Made with by <FooterLink opt='true' href="http://dorianmorones.com/">DorianMorones</FooterLink> | <FooterLink opt='color' href="https://github.com/dorian-morones/keyboard-listener-next">GitHub</FooterLink> |
            <FooterLink
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              opt='none'
            >
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" />
            </FooterLink>
          </FooterText>
        </Footer>
      </GeneralContent>
    </div>
  )
}

export default Home;