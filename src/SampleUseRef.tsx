import React from "react";
import "./index.css";

type Props = {};

const SampleUseRef = (props: Props) => {
  return (
    <div className="container-ref">
      <div className="circle"></div>
      <button type="button">Change to Shape</button>
    </div>
  );
};

export default SampleUseRef;
