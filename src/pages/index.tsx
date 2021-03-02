import React from 'react';
import Head from 'next/head';
import Logo from '../assets/logo.svg';
import { Container, ImageContainer } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Next.js setup</title>
    </Head>
    <ImageContainer>
      <Logo />
    </ImageContainer>
    <h1>Next.js Structure</h1>
    <p>Bootstraped with create next-app</p>
  </Container>
);

export default Home;
