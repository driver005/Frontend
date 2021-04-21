import React from "react";
import { wrapper } from "../../styles/popup";

export default Comp => (props) => (
  <wrapper className="example-warper">
    <Comp input={props.input} value={props.value} onSubmit={props.onSubmit}/>
  </wrapper>
);