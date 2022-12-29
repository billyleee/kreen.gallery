import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar1 from '../asset/Skincare/day-mandelic.jpg'




function CardSkincare() {

    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);

  return (

    <>
        <div>
            <Card style={{ width: 'auto' }}>
                <Card.Img variant="top" src={gambar1} />
                <Card.Body >
                    <Card.Title>Day Cream Mandelic</Card.Title>
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
                      <Modal.Title>Day Cream Mandelic</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class='gambardalam'>
                        <img class='gambardalam2' src={gambar1} alt="" />
                    </div>
                    <div class='Cardcontainer'>
                        <p>
                   Day Cream Acne with Mandelic Acid diformulasikan dengan Allantoin, Salicylic Acid, dan 10 Hydroxydecanoic Acide untuk membantu merawat dan mengatasi kulit berjerawat, melindungi kulit dari pengaruh buruk sinar matahari, serta menjaga kelembaban, kelembutan, dan menengangkan kulit wajaha.
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

      </>


  )
}

export default CardSkincare
