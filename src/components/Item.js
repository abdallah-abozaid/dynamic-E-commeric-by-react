import React, { useContext, useCallback } from "react";
import { Card, Col } from "react-bootstrap";
import { MdAddShoppingCart } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import MyContext from "../store/context";
import { Link } from "react-router-dom";

const Item = (props) => {
  const ctx = useContext(MyContext);
  const exit = useCallback(
    ctx.CartItems.findIndex((item) => {
      return item.id === props.item.id;
    })
  );
  return (
    <Col>
      <Card className="item-card">
        <Link to={`/cardDetails/${props.item.id}`}>
          <Card.Img variant="top" src={props.item.img} className="item-img" />
          <Card.Body>
            <div className="row px-2">
              <div className="col-9 item-title">{props.item.title}</div>
              <div className="col-3 item-price">$ {props.item.price}</div>
            </div>
          </Card.Body>
        </Link>
        {exit === -1 && (
          <span
            className="outer"
            onClick={() => ctx.modalShowhandler(props.item.id)}
          >
            <MdAddShoppingCart className="sell-icon" />
          </span>
        )}
        {exit !== -1 && (
          <span className="outer2">
            <span className="incart">
              <sub>
                <BsFillCartCheckFill />
              </sub>
              In Cart
            </span>
          </span>
        )}
      </Card>
    </Col>
  );
};

export default React.memo(Item);
