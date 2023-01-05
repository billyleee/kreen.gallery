import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar1 from '../asset/HairCare/black-shine.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar1} />
              <Card.Body >
                  <Card.Title>Black Shine</Card.Title>
                  <Card.Text>
                      {/* text is available here */}

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
                  <Modal.Title>Black Shine</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar1} alt="" />
                  </div>
                  <div class='Cardcontainer'>
                      <p>
                  Black Shine Hair Serum diformulasikan untuk membantu perawatan rambut beruban. Serum yang membantu perawatan rambut beruban. Serum yang membantu melindungi keratin pada folikel rambut, sehingga membantu menjaga kesehatan rambut dari kerusakan dan mempertahankan warna alami pada rambut. Formulanya yang bantu menjaga skin barrier kulit, sehingga membantu menjaga elastisitas kulit kepala, serta membantu melindungi kulit kepala dari kekeringan.
                  </p>
              </div>
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
