import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PaletteDisplay from "../components/PaletteDisplay";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { getColors } from "../redux/actions/palette";
//For Pagination
import firebase from "../firebase/index";
import "firebase/firestore";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { allColors } = useSelector((state) => state.palette);

  //For Pagination
  const [totalColors, setTotalColors] = useState();
  const db = firebase.firestore();
  db.collection("counter")
    .doc("total")
    .get()
    .then((querySnapshot) => setTotalColors(querySnapshot.data().total));

  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);

  return (
    <div className="Container">
      <StyledDashboard>
        {allColors.length &&
          allColors.map((color) => (
            <PaletteDisplay
              key={color.id}
              color={color}
              id={color.id}
              c1={color.c1}
              c2={color.c2}
              c3={color.c3}
              c4={color.c4}
              buttonText={color.buttonText}
              date={color.created}
              colors={allColors}
            />
          ))}
      </StyledDashboard>
      {allColors.length !== totalColors ? (
        <ButtonWrap className="text-center">
          <Button name="Load More" />
        </ButtonWrap>
      ) : (
        ""
      )}
    </div>
  );
};

const StyledDashboard = styled.div`
  padding-top: 6em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
`;
const ButtonWrap = styled.div`
  padding: 2em 0;
  button {
    padding: 1em 1.25em;
  }
`;

export default Dashboard;
