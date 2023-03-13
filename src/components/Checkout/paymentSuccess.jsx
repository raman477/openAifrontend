import { useState } from "react";
import { Modal } from "react-bootstrap"

const PaymentSuccess = (props) => {
  
  return (
    <div>
      {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
              <img src="img/thank-you.png"/>
                <h2>Woohoo!</h2>
                <p>Thank you for creating your account. You’ll now be able to blow your teachers away. P.S. more detailed prompts and a small human-touch will help you nail an A grade</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </div> */}
      <Modal show={props.show} className="modal-main" centered onHide={props.handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <div class="modal-body  text-center">
            <img src={require('../../images/thank-you.png')} />
            <h2>Woohoo!</h2>
            <p>Thank you for creating your account. You’ll now be able to blow your teachers away. P.S. more detailed prompts and a small human-touch will help you nail an A grade</p>
          </div>
        </Modal.Body>
        <Modal.Footer >
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
           {/* <div class="modal-footer"> */}
              <button type="button" class="btn btn-primary">Continue</button>
            {/* </div> */}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PaymentSuccess