import React, { useContext } from "react";

import { Card, Col } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import MyContext from "../store/context";
const Item = (props) => {
  const ctx = useContext(MyContext);
  return (
    <Col>
      <Card
        border="light"
        className="item-card"
        onClick={() => ctx.modalShowhandler(props.item.id)}
      >
        <Card.Img variant="top" src={props.item.img} className="item-img" />
        <Card.Body>
          <div className="row px-2">
            <div className="col-9 item-title">{props.item.title}</div>
            <div className="col-3 item-price">$ {props.item.price}</div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default React.memo(Item);
