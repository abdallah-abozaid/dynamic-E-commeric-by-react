import React from "react";
import { FaNotEqual } from "react-icons/fa";
import { ImSad } from "react-icons/im";
const PageNotFound = () => {
  return (
    <div className="notfound container text-center py-5">
      <h1>
        404 Page Not Found
        <br />
        <ImSad />
        <FaNotEqual />
      </h1>
    </div>
  );
};

export default PageNotFound;
