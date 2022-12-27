import React from 'react'
import Card1 from '../components/CardDR1'
import Card2 from '../components/CardDR2'
import Card3 from '../components/CardDR3'
import Card4 from '../components/CardDR4'


import Footer from '../components/Footer2'
import "../global.css"

function Decorative() {
  return (
      <>
          <h1>Decorative</h1>
          <p>
              Aliquam iaculis a nisi sed ornare. Sed venenatis tellus vel consequat
              congue. In bibendum vestibulum orci et feugiat.
          </p>
      
          <div class='container'>
              <Card1 class='item' />
              <Card2 class='item' />
              <Card3 class='item' />
          </div>
          <br />
          <div class='container3'>
              <Card4 class='item' />
          </div>
          <Footer class='footercontainer' />
      </>
  )
}

export default Decorative