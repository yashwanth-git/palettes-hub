import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
const colorValues = {
  id: uuid(),
  c1: "#dddddd",
  c2: "#cccccc",
  c3: "#bbbbbb",
  c4: "#aaaaaa",
};
const Palette = ({ colorChange, setColorChange }) => {
  const onChangeHandler = (e) => {
    setColorChange({ ...colorChange, [e.target.name]: e.target.value });
  };
  return (
    <ColorPalette className="box-shadow">
      <input
        type="color"
        name="c1"
        value={colorChange.c1}
        className="color col1"
        onChange={onChangeHandler}
      />
      <input
        type="color"
        name="c2"
        value={colorChange.c2}
        className="color col2"
        onChange={onChangeHandler}
      />
      <input
        type="color"
        name="c3"
        value={colorChange.c3}
        className="color col3"
        onChange={onChangeHandler}
      />
      <input
        type="color"
        name="c4"
        value={colorChange.c4}
        className="color col4"
        onChange={onChangeHandler}
      />
    </ColorPalette>
  );
};

const ColorPalette = styled.div`
  display: flex;
  flex-direction: column;
  width: 23em;
  padding: 1em;
  border-radius: 5px;
  background: #fff;
  height: 25em;
  margin-top: 1em;
  @media (max-width: 425px) {
    width: 19em;
  }
  .color {
    width: 100%;
    -webkit-appearance: none;
    padding: 0;
    border: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    &::-webkit-color-swatch {
      border: none;
    }
  }
  .col1 {
    height: 35%;
    background-color: ${colorValues.c1};
  }
  .col2 {
    height: 30%;
    background-color: ${colorValues.c2};
  }
  .col3 {
    height: 20%;
    background-color: ${colorValues.c3};
    border-color: ${colorValues.c3};
  }
  .col4 {
    height: 15%;
    background-color: ${colorValues.c4};
  }
`;
export default Palette;
