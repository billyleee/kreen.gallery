import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import gambar from '../asset/image286x180.png'
import '../global.css'

function Cards () {
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true);

 
 
  return (
    
    <>
    <div>
                    <Card style={{ width: 'auto' }}>
                      <Card.Img variant="top" src= {gambar} />
                      <Card.Body >
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                          Some quick example text to build on the card title and make up the
                     
                        </Card.Text>
                          <Button variant="primary" onClick={handleShow}>
                            Launch demo modal
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
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                                <Modal.Body>
                                  <div class='gambardalam'>
                                  <img class='gambardalam2' src={gambar} alt="" />
                                  </div>
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


export default Cards