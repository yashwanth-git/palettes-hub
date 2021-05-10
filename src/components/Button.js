import React from "react";
import styled from "styled-components";
//FOR REDIRECTION
import { useHistory } from "react-router-dom";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {
  createColor,
  saveColor,
  deleteColor,
  getColors,
} from "../redux/actions/palette";
const Button = ({ name, id, color }) => {
  const dispatch = useDispatch();
  const { allColors, savedColors } = useSelector((state) => state.palette);
  const history = useHistory();
  const buttonHandler = (e) => {
    if (name === "Save") {
      e.target.innerHTML = "Saved";
      dispatch(saveColor(id, allColors));
    }
    if (name === "Unsave") {
      dispatch(deleteColor(id, savedColors));
    }
    if (name === "Create") {
      dispatch(createColor(color));
      history.push("/");
    }
    if (name === "Load More") {
      let lastElem = allColors[allColors.length - 1];
      dispatch(getColors(lastElem));
    }
  };
  return <StyledButton onClick={buttonHandler}>{name}</StyledButton>;
};

const StyledButton = styled.button`
  padding: 0.5em 1em;
  font-size: 1rem;
  border: 1px solid #e9f2f9;
  border-radius: 5px;
  background: inherit;
  cursor: pointer;
  &:hover {
    background: #e9f2f9;
  }
`;

export default Button;
