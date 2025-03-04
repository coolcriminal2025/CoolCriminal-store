import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Collection from './components/Collection';
import Collection2 from './components/Collection2';
import QnA from './components/QnA';
import Footer from './components/Footer';
import Break from './components/Break';
import { SpeedInsights } from "@vercel/speed-insights/react"

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <Break />
      <Why id="why" />
      <Break />
      <Collection id="collection" />
      <Break />
      <Collection2 id="collection2" />
      <Break />
      <About id="about" />
      <Break />
      <Roadmap id="roadmap" />
      <Break />
      <Team id="team" />
      <Break />
      <QnA id="qna" />
      <Break />
      <Footer />
    </div>
  );
}

export default HomePage;
