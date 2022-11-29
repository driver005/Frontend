import React from "react";
import { Wrapper } from "../../../styles/popup";

export default Comp => (props) => (
    <Wrapper className="example-warper">
        <Comp input={props.input} value={props.value} onSubmit={props.onSubmit} {...props} />
    </Wrapper>
);