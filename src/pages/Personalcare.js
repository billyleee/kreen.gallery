"use client"

import React from 'react'
import Card1 from '../components/CardPC1'
import Card2 from '../components/CardPC2'
import Card3 from '../components/CardPC3'
import Card4 from '../components/CardPC4'
import Card5 from '../components/CardPC5'
import Footer from '../components/Footer2'
import "../global.css"

function PersonalCare () {
  return (
    <>
      <h1>Personal Care</h1>
      <p>
        Donec sit amet augue at enim sollicitudin porta. Praesent finibus ex
        velit, quis faucibus libero congue et. Quisque convallis eu nisl et
        congue. Vivamus eget augue quis ante malesuada ullamcorper. Sed orci
        nulla, eleifend eget dui faucibus, facilisis aliquet ante. Suspendisse
        sollicitudin nibh lacus, ut bibendum risus elementum a.
      </p>
      
      <div class='container'>
        <Card1 class='item' />
        <Card2 class='item' />
        <Card3 class='item' />
      </div>
      <div class='container2'>
        <Card4 class='item' />
        <Card5 class='item' />
      </div>
     
      <Footer class='footercontainer' />
    </>
  )
}

export default PersonalCare
