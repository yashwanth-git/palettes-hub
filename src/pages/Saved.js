import React, { useEffect } from "react";
import styled from "styled-components";
import PaletteDisplay from "../components/PaletteDisplay";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getSavedColors } from "../redux/actions/palette";
const Saved = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavedColors());
  }, [dispatch]);
  const { savedColors } = useSelector((state) => state.palette);
  return (
    <div className="Container">
      <StyledSaved>
        {savedColors.length ? (
          savedColors.map((color) => (
            <PaletteDisplay
              key={color.id}
              color={color}
              id={color.id}
              c1={color.c1}
              c2={color.c2}
              c3={color.c3}
              c4={color.c4}
              colors={savedColors}
              buttonText={color.buttonText}
              date={color.created}
            />
          ))
        ) : (
          <StyledSavedEmpty>
            <p>No Palettes Saved</p>
          </StyledSavedEmpty>
        )}
      </StyledSaved>
    </div>
  );
};

const StyledSaved = styled.div`
  padding: 6em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
`;

const StyledSavedEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 2rem;
    text-align: center;
  }
`;
export default Saved;
