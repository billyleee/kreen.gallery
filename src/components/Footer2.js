import React from 'react'
import GambarFooter from '../asset/logo-k.reen-70px.png'
import GambarFooter2 from '../asset/mks.jpg'
import "../global.css"

function Footer2() {
  return (
      <footer >

          <ul class="menu">
        <li><a id='section1' href="/">Skin Care</a></li>
        <li><a id='section2' href="/Personalcare">Personal Care</a></li>
        <li><a id='section3' href="/Haircare">Hair Care</a></li>
        <li><a id='section4' href="/Decorative">Decorative</a></li>
        <li><a id='section5' href="/BodyMist">Body Mist</a></li>
          </ul>
          <hr />
          <ul class="icons">
                <h4 class='headerh4'>Social:</h4>
              <li class='listicon'><img class="imagefooter" src="https://www.svgrepo.com/show/13639/instagram.svg" alt="" /><ion-icon name="logo-whatsapp"></ion-icon></li>
              <li class='listicon'><img class="imagefooter" src="https://www.svgrepo.com/show/111203/facebook.svg" alt="" /><ion-icon name="logo-whatsapp"></ion-icon></li>
              <li class='listicon'><img class="imagefooter" src="https://www.svgrepo.com/show/349563/whatsapp.svg" alt="" /><ion-icon name="logo-whatsapp"></ion-icon></li>
              <li class='listicon'><img class="imagefooter" src="https://www.svgrepo.com/show/303260/tiktok-logo-logo.svg" alt="" /><ion-icon name="logo-whatsapp"></ion-icon></li>
          </ul> 
          <div class="footer-copyright">
              <div class='footergroup'>
                <img src={GambarFooter} alt="" />
                  <p> Part Of </p>
                <img src={GambarFooter2} alt="" />
              </div>
              <hr />
              <div>
                <h5>Copyright @ 2022 All Rights Reserved.</h5>
              </div>
          </div>
      </footer>
  )
}

export default Footer2