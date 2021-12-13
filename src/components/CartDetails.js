import React, { useContext, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyContext from "../store/context";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
const CartDetails = () => {
  const ctx = useContext(MyContext);
  const param = useParams();
  const navigate = useNavigate();
  const find = ctx.Items.findIndex((item) => {
    return item.id == param.id;
  });
  let theItem = ctx.Items[find];
  const exit = useCallback(
    ctx.CartItems.findIndex((item) => {
      return item.id === theItem.id;
    })
  );
  return (
    <div className="item-details">
      <h1>{theItem.title}</h1>
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={theItem.img} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <h3>Modal : {theItem.title}</h3>
          <h6>Made by : {theItem.company}</h6>
          <p>price :$ {theItem.price}</p>
          <p>some info about the product:</p>
          <p style={{ color: "grey" }}>{theItem.info}</p>
          <Button
            variant="outline-info"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Products
          </Button>
          {"  "}

          {exit === -1 && (
            <Button
              variant="outline-warning"
              onClick={() => {
                ctx.addProductToCart(theItem.id);
              }}
            >
              Add To Cart
            </Button>
          )}
          {exit !== -1 && (
            <Button variant="outline-warning" disabled>
              <sub>
                <BsFillCartCheckFill />
              </sub>
              In Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartDetails);
