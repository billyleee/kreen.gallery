import React from 'react'
import Card1 from '../components/CardBM1'
import Card2 from '../components/CardBM2'
import Card3 from '../components/CardBM3'
import Card4 from '../components/CardBM4'
import Card5 from '../components/CardBM5'


import Footer from '../components/Footer2'
import "../global.css"

function Bodymist() {
  return (
      <>
          <h1>Body Mist</h1>
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
          <div class='container2'>
              <Card4 class='item' />
              <Card5 class='item' />
          </div>
          <Footer class='footercontainer' />
      </>
  )
}

export default Bodymist