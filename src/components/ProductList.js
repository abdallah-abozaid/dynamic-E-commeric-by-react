import React, { useContext } from "react";
import MyContext from "../store/context";
import { Row } from "react-bootstrap";
import Item from "./Item";
const ProductList = () => {
  const ctx = useContext(MyContext);
  return (
    <div className="container col-10 mx-auto my-3 text-center text-title">
      <h1 className="text-capitaize font-weight-bold my-5">
        our <span className="text-blue">Products</span>
      </h1>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {ctx.Items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
