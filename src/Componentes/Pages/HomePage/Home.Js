import React, { useState } from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  const [preco, setPreco] = useState("100")


  return (

    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing preco={preco} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />

    </>
  );
}

export default Home;
