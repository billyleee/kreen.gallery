import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar4 from '../asset/Skincare/probio.jpg'


        function CardSkincare() {
            const [lgShow, setLgShow] = useState(false);
            const handleClose = () => setLgShow(false);
            const handleShow = () => setLgShow(true);

            return (
                <div>
                    <Card style={{ width: 'auto' }}>
                        <Card.Img variant="top" src={gambar4} />
                        <Card.Body >
                            <Card.Title>Probio C premium ampoule mist 60ml</Card.Title>
                            <Card.Text>
                                {/* this is text  */}
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
                            <Modal.Title>Probio C premium ampoule mist 60ml</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div class='gambardalam'>
                                <img class='gambardalam2' src={gambar4} alt="" />
                            </div>
                            <div class='Cardcontainer'>
                                <p>
                                    Probio-C Premium Ampoule Mist diformulasikan sebagai Multi Purpose Skin Care memiliki tekstur yang ringan dan mudah meyerap di kulit wajah dengan sesasi yang menyegarkan. Membantu mengunci kelembaban kulit agar terlihat lebih sehat dan terawat, membantu mengurangi sebum berlebug pada kulit wajah, sekaligus melindungi dari perngaruh buruk sinar ultraviolet. Memiliki kemampuan membantu menjaga skin barrier kulit, membantu mengurangi tanda-tanda penuaan dini, serta meredakan kemerahan pada kulit wajah. Diperkaya dengan Vitamin C dan Niacinamide untuk membantu wajah tampak lebih cerah bercahaya dan sebagai antioksidan. Kulit cerah dengan perawatan yang optimal.
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
