import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar2 from '../asset/PersonalCare/exfoliating.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar2} />
              <Card.Body >
                  <Card.Title>Exfoliating Gel</Card.Title>
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
                  <Modal.Title>Exfoliating Gel</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar2} alt="" />
                  </div>

                  <div class='Cardcontainer'>
                      <p>
                  Bright Deep Soothe Exfoliating Gel diformulasikan dengan perpaduan bahan aktif Aloe Vera Barbadensis Leaf Extract, Hydrolyzed Algae Extract, Centella Asiatica Extract, dan Beta Vulgaris (Beef) Roof Extract, berfungsi mengangkat sel kulit mati tanpa menyebabkan iritasi, menyejukkan dan menenangkan kulit wajag, menjaga kelembaban kulit, membantu mengurangi ukuran pori-pori, mencerahkan wajah, membantu menghidrasi kulit, merawat kulit wajah agar tetap sehat dan terawat.
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
