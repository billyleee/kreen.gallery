import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar4 from '../asset/Decorative/lip-magic-serum.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar4} />
              <Card.Body >
                  <Card.Title>Lip Magic Serum</Card.Title>
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
                  <Modal.Title>Lip Magic Serum</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar4} alt="" />
                  </div>
                  <div class='Cardcontainer'>
                      <p>
              Lip Magic Serum dapat membantu merawat dan menutrisi bibir, Membantu menjaga kelembaban bibir, dan membantu menjaga warna alami bibir. Keterangan: Penamaan produk "Magic" karena warna sediaaan lip serum berwana bening, namun ketika diaplikasikan ke bibir timbul warna pink.
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
