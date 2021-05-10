import firebase from "../../firebase/index";
import "firebase/firestore";
import {
  GETPALETTES,
  GETSAVEDPALETTES,
  DELETEPALETTE,
  SAVEPALETTE,
  CREATEPALETTE,
} from "../constants/actionTypes";
const db = firebase.firestore();
let colors = [];
export const createColor = (color) => async (dispatch) => {
  await db
    .collection("colors")
    .add({
      id: color.id,
      c1: color.c1,
      c2: color.c2,
      c3: color.c3,
      c4: color.c4,
      created: Date.now(),
    })
    .then(() => {
      console.log(`Added ${color}`);
    })
    .catch((err) => console.log(err));

  await db
    .collection("counter")
    .doc("total")
    .update({ total: firebase.firestore.FieldValue.increment(1) });

  dispatch({
    type: CREATEPALETTE,
    payload: color,
  });
};

export const getColors = (lastElem) => async (dispatch) => {
  if (lastElem) {
    await db
      .collection("colors")
      .orderBy("created", "desc")
      .startAfter(lastElem.created)
      .limit(8)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            c1: doc.data().c1.toUpperCase(),
            c2: doc.data().c2.toUpperCase(),
            c3: doc.data().c3.toUpperCase(),
            c4: doc.data().c4.toUpperCase(),
            created: doc.data().created,
            buttonText: "Save",
          };
          //Check local storage and update it is saved or not
          if (localStorage.length !== 0) {
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).substring(8, 28) === data.id) {
                data.buttonText = "Saved";
              }
            }
          }
          colors.push(data);
        });
      });
  } else {
    //Resetting the value because when reloaded the page gets duplicate errors
    colors = [];
    await db
      .collection("colors")
      .orderBy("created", "desc")
      .limit(8)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            c1: doc.data().c1.toUpperCase(),
            c2: doc.data().c2.toUpperCase(),
            c3: doc.data().c3.toUpperCase(),
            c4: doc.data().c4.toUpperCase(),
            created: doc.data().created,
            buttonText: "Save",
          };
          //Check local storage and update it is saved or not
          if (localStorage.length !== 0) {
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i).substring(8, 28) === data.id) {
                data.buttonText = "Saved";
              }
            }
          }
          colors.push(data);
        });
      });
  }

  dispatch({
    type: GETPALETTES,
    payload: colors,
  });
};

export const getSavedColors = () => async (dispatch) => {
  const colors = [];
  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).substring(0, 8) === "palette-") {
        let item = JSON.parse(localStorage.getItem(localStorage.key(i)));
        item.buttonText = "Unsave";
        colors.push(item);
      }
    }
  }
  dispatch({
    type: GETSAVEDPALETTES,
    payload: colors,
  });
};

export const deleteColor = (id, colors) => async (dispatch) => {
  localStorage.removeItem(`palette-${id}`);
  dispatch({
    type: DELETEPALETTE,
    id,
    savedColors: colors,
  });
};

export const saveColor = (id, colors) => async (dispatch) => {
  const filteredColor = colors.filter((color) => color.id === id);
  localStorage.setItem(`palette-${id}`, JSON.stringify(...filteredColor));
  dispatch({
    type: SAVEPALETTE,
    id,
    color: filteredColor,
  });
};
