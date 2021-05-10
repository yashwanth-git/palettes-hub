import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
//Components
import Palette from "../components/Palette";
import Button from "../components/Button";
const colorValues = {
  id: uuid(),
  c1: "#dddddd",
  c2: "#cccccc",
  c3: "#bbbbbb",
  c4: "#aaaaaa",
};
const Create = () => {
  const [colorChange, setColorChange] = useState(colorValues);
  return (
    <div className="Container">
      <CreateContainer>
        <h2>Create a Palette</h2>
        <Palette colorChange={colorChange} setColorChange={setColorChange} />
        <Button name="Create" color={colorChange} />
      </CreateContainer>
    </div>
  );
};

const CreateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 0 1.5em;
  @media (max-width: 425px) {
    padding-top: 7em;
  }
  button {
    margin-top: 1em;
    font-size: 1.2rem;
  }
`;

export default Create;
