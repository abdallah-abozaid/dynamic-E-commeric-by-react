import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import MyContext from "../store/context";
import { FaAmazonPay } from "react-icons/fa";
const ControlCart = () => {
  const ctx = useContext(MyContext);
  return (
    <div className="container">
      <div className="control">
        <Button
          variant="outline-danger"
          onClick={() => {
            ctx.clearAllCart();
          }}
        >
          Clear Cart
        </Button>
        <p className="head">Subtotal: $ {ctx.total} </p>
        <p className="head">Tax: $ 1 </p>
        <p className="head">Total: $ {ctx.total + 1} </p>
        <Button variant="outline-success">
          Order <FaAmazonPay />
        </Button>
      </div>
    </div>
  );
};

export default ControlCart;
