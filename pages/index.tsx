import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ResultItem from '../components/resultItem/ResultItem';
import CardItem from '../components/card/CardItem';

import {
  Row,
  LeftContainer,
  RigthContainer,
  Footer
} from './style/home_style';

export default function Home() {
  return (
    <div className={styles.container}>
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
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </Footer>
    </div>
  )
}
