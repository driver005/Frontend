import React from "react";
import { Examplewraper } from "../../styles/popup";

export default Comp => (props) => (
  <Examplewraper className="example-warper">
    <Comp input={props.input} onSubmit={props.onSubmit}/>
  </Examplewraper>
);