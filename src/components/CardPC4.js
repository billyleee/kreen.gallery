import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar4 from '../asset/PersonalCare/hand-soap-500-ml.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar4} />
              <Card.Body >
                  <Card.Title>Hand Soap 500ml</Card.Title>
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
                  <Modal.Title>Hand Soap 500ml</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar4} alt="" />
                  </div>
                  <div class='Cardcontainer'>
                      <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit laboriosam aperiam sequi illo excepturi aliquid doloribus beatae, culpa magnam! Suscipit nihil aliquam facere, aperiam ipsum minus voluptatem iste omnis
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content. ?
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
