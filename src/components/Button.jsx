import React from "react";
import { styled } from "styled-components";

function Button({ title, type, onClick, color }) {
  return (
    <ButtonLayout type={type} onClick={onClick} color={color}>
      {title}
    </ButtonLayout>
  );
}

export default Button;

const ButtonLayout = styled.button`
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #025ec0;
  }
`;
