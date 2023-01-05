import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar2 from '../asset/HairCare/hair-nutrition.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar2} />
              <Card.Body >
                  <Card.Title>Hair Nutrition</Card.Title>
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
                  <Modal.Title>Hair Nutrition</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar2} alt="" />
                  </div>
                  <div class='Cardcontainer'>
                      <p>
                  Hair Nutrition Serum untuk membantu merawat pertumbuhan rambut. Serum uang memnbantu memberikan nutrisi rambut dan menjaga skin barrier kulit, sehingga membantu menjaga kesehatan rambut dari kerusakan, membantu melindungi kulit kepada dari peradangan, dan membantu menjaga elastisitas kulit kepala/ Formulanya yang bantu menjaga kelembaban rambut, untuk rambut lebih terasa lembut dan kuat.
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
