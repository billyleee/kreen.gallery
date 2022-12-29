import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar5 from '../asset/Skincare/rose-water.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar5} />
              <Card.Body >
                  <Card.Title>Rose Water</Card.Title>
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
                  <Modal.Title>Water Rose</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar5} alt="" />
                  </div>
<<<<<<< HEAD

                  <div class='Cardcontainer'><p>
                  Membantu sebagai penyegar kulit muka, membantu , menenangkan kulit  wajah, dan menjaga kelembaban kulit wajah.
                  </p></div>
=======
                   Membantu sebagai penyegar kulit muka, membantu , menenangkan kulit  wajah, dan menjaga kelembaban kulit wajah.
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
