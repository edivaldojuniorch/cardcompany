import React from 'react'
import Hero from '../../Hero'
import { homeObjOne } from './Data'


function Home() {
  return (
    <>
      <Hero {...homeObjOne}></Hero>

    </>
  )
}

export default Home;
