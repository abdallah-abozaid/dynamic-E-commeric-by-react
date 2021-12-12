import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import MyContext from "../store/context";
const ItemInCart = (props) => {
  const ctx = useContext(MyContext);
  return (
    <div className="container ItemDetails">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div className="row">
            <div className="col-6">
              <p className="head">Products</p>
              <img src={props.item.img} alt="" />
            </div>
            <div className="col-6">
              <p className="head">Name Of Product:</p>
              <p className="subhead">{props.item.title}</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div className="row">
            <div className="col-6">
              <p className="head">price</p>
              <p className="subhead"> ${props.item.price}</p>
            </div>
            <div className="col-6">
              <p className="head">Quantity:</p>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  ctx.increaseItemInCart(props.item.id);
                }}
              >
                +
              </Button>
              <Button variant="outline-secondary">{props.item.count}</Button>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  ctx.decreaseItemInCart(props.item.id);
                }}
              >
                -
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-3">
          <div className="row">
            <div className="col-6">
              <p className="head">remove</p>
              <Button
                variant="outline-warning"
                onClick={() => {
                  ctx.removeItemInCart(props.item.id);
                }}
              >
                <AiOutlineDelete />
              </Button>
            </div>
            <div className="col-6">
              <p className="head">Total:</p>
              <p className="subhead">
                total price is : $ {props.item.price * props.item.count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInCart;
