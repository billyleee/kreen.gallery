import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar2 from '../asset/Skincare/gold-water.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (
      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar2} />
              <Card.Body >
                  <Card.Title>Gold Water</Card.Title>
                  <Card.Text>

                  </Card.Text>
                  <Button variant="primary" onClick={handleShow}>
                      Read More
                  </Button>
              </Card.Body>
          </Card>


          <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              backdrop="static"
              keyboard={false}
              centered>
              <Modal.Header closeButton>
                  <Modal.Title>Gold Water</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar2} alt="" />
                  </div >
                  <div class='Cardcontainer'>
                    <p>
                  Gold Water Miracle Bio-C dengan formula yang kegunaan mudah meresap di kuit, memberikan manfaat antioksidan untuk membantu melindungi kulit dari paparan radikal bebas dini, memelihara tekstur kulit tetap elastis, dan mengurangi jumlah sebum berlebih pada wajah. Dengan kemampuan mengunci kelembaban dan menutrisi kulit sehingga kulit terasa lembut, tampak cerah dan terawat, sekaligus mampu membantu menjaga kulit yang cerah terlindungi sepanjang hari.
                    </p>
                  </div>
<<<<<<< HEAD
=======
         Gold Water Miracle Bio-C dengan formula yang kegunaan mudah meresap di kuit, memberikan manfaat antioksidan untuk membantu melindungi kulit dari paparan radikal bebas dini, memelihara tekstur kulit tetap elastis, dan mengurangi jumlah sebum berlebih pada wajah. Dengan kemampuan mengunci kelembaban dan menutrisi kulit sehingga kulit terasa lembut, tampak cerah dan terawat, sekaligus mampu membantu menjaga kulit yang cerah terlindungi sepanjang hari.
>>>>>>> 26a42cb28d3e28e4887220afa4a739e20232f4b1
              </Modal.Body>
              <Modal.Footer>
                  <Button class='CloseButtonModal' variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
      </div>
  )
}

export default CardSkincare
