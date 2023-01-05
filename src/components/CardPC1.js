import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar1 from '../asset/PersonalCare/day-lotion.jpg'


function CardSkincare() {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (


      <div>
          <Card style={{ width: 'auto' }}>
              <Card.Img variant="top" src={gambar1} />
              <Card.Body >
                  <Card.Title>Day Lotion</Card.Title>
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
                  <Modal.Title>Day Lotion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div class='gambardalam'>
                      <img class='gambardalam2' src={gambar1} alt="" />
                  </div>
                  <div class='Cardcontainer'>
                      <p>
                  Hydro Bright Smooth Day Lotion memiliki tekstur yang tidak lengket dan lembut dengan wangi yang menyegarkan, berfungsi untuk merawat kulit agar tetap sehat dan terawat, diformulasikan dengan Centella Asiatica Extract, Beta Vulgaris (Beet) Root Extract, Soybean (Glycine Soja) Extract, Ceratonia Siliqua Seed Extract, dan Hydrolized algae extract yang berhasiat dan bernutrisi bagi kulit, menjaga kulit dari pengaruh buruk sinar matahari, membuat kulit tampak lebih cerah seketika dan tidak kusam, menjaga kulit agar tetap terhidrasi, menjaga kelembaban kulit, menghaluskan dan melembutkan kulit, membantu menjaga elastisitas kulit dan meningkatkan kekencangan kulit, membantu mengurangi tanda-tanda regenerasi kulit dengan mengurangi kerutan kulit.  
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
