import React, { Fragment } from "react";
import spin from "./spin.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spin}
        alt="loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
