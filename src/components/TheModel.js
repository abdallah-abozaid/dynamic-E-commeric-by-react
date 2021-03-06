import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import MyContext from "../store/context";
const TheModel = (props) => {
  const ctx = useContext(MyContext);
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="text-center model-content">
            <h6 className="mb-0">Item Added To Cart</h6>
            <img src={ctx.ItemClicked.img} alt={ctx.ItemClicked.title} />
            <h6>{ctx.ItemClicked.title}</h6>
            <h6>
              <span>Price: $ {ctx.ItemClicked.price}</span>
            </h6>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={props.onHide}>
            Continue Shoping
          </Button>

          <Button
            variant="outline-warning"
            onClick={() => {
              ctx.addProductToCart(ctx.ItemClicked.id);
            }}
          >
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default React.memo(TheModel);
