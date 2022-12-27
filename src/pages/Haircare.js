"use client"

import React from 'react'
import Card1 from '../components/CardHC1'
import Card2 from '../components/CardHC2'

import Footer from '../components/Footer2'
import "../global.css"

function Haircare () {
  return (
    <>
      <h1>Haircare</h1>
      <p>
        Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
        congue. In bibendum vestibulum orci et feugiat.
      </p>
   
      <div class='container2'>
        <Card1 class='item' />
        <Card2 class='item' />
      </div>
      <br />
  
      <Footer class='footercontainer' />
    </>
  )
}

export default Haircare
