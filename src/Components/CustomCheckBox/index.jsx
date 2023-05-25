import React from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

const StyledCheckBox = styled(Checkbox)`
  & .ant-checkbox-inner {
    background-color: transparent !important;
    border: 1px solid #1677ff;
  }

  & .ant-checkbox-inner:after {
    border: 2px solid #1677ff;
    border-top: 0;
    border-left: 0;
  }
`;

const CustomCheckBox = (props) => {
  return <StyledCheckBox {...props}>{props.children}</StyledCheckBox>;
};

export default CustomCheckBox;
