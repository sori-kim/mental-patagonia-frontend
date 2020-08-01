import React from "react";
import styled from "styled-components";

const Button = ({ children, style }) => {
  return <StyledButton style={style}> {children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 3rem;
  background-color: black;
  margin-right: 2rem;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  transition: 0.2s;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
`;

export default Button;
