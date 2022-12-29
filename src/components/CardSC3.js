import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar3 from '../asset/Skincare/night-cream-galacto.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar3} />
              <Card.Body >
                  <Card.Title>Night Cream</Card.Title>
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
                  <Modal.Title>Night Cream</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar3} alt="" />
                  </div>
                  <div class='Cardcontainer'><p>
                Kandungan Galactomyces dapat membantu mencerahkan kulit, membantu mengurangi jumlah sebum pada kulit.
              </p></div>
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
