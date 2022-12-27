"use client"

import React from 'react';
import Card1 from '../components/CardSC1'
import Card2 from '../components/CardSC2'
import Card3 from '../components/CardSC3'
import Card4 from '../components/CardSC4'
import Card5 from '../components/CardSC5'
import "../global.css"
import Footer from '../components/Footer2'



function Skincare () {

  return (
    <>
      <h1>Skincare</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        purus vitae eleifend tristique, lorem magna volutpat orci, et vehicula
        erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel
        porta turpis, ut iaculis justo.
      </p>
    
      <br/>
      <div class='container'>
        <Card1 class='item' />
        <Card2 class='item' />
        <Card3 class='item' />
      </div>
      <br />
      <div class='container2'>
        <Card4 class='item' />   
        <Card5 class='item' />
      </div>
     
      <Footer class='footercontainer'/>
    </>
  )
}

export default Skincare
