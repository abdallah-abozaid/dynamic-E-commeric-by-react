import React, { useContext } from "react";
import MyContext from "../store/context";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ItemInCart from "./ItemInCart";
import ControlCart from "./ControlCart";
import { BsArrowRightSquareFill } from "react-icons/bs";
const CartPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(MyContext);
  return (
    <div>
      <h1 className="title-cart">
        your <span>cart</span>
      </h1>
      {!ctx.CartItems.length > 0 && (
        <div className="text-center my-5">
          <h3>Cart Is Empty</h3>
          <p>
            Please select item{" "}
            <BsArrowRightSquareFill className="text-bright" /> go product
            details <BsArrowRightSquareFill className="text-bright" /> add to
            cart
          </p>
          <Button
            variant="outline-info"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Products
          </Button>
        </div>
      )}
      {ctx.CartItems.length > 0 &&
        ctx.CartItems.map((item) => <ItemInCart key={item.id} item={item} />)}
      {ctx.CartItems.length > 0 && <ControlCart />}
    </div>
  );
};

export default CartPage;
