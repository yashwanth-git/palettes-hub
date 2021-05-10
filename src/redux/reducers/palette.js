import {
  GETPALETTES,
  GETSAVEDPALETTES,
  DELETEPALETTE,
  SAVEPALETTE,
  CREATEPALETTE,
} from "../constants/actionTypes";
const colors = {
  allColors: {},
  savedColors: {},
  createdColor: {},
};
const palette = (state = colors, action) => {
  switch (action.type) {
    case CREATEPALETTE:
      return { ...state, createdColor: action.payload };
    case GETPALETTES:
      return { ...state, allColors: action.payload };
    case GETSAVEDPALETTES:
      return { ...state, savedColors: action.payload };
    case SAVEPALETTE:
      return { ...state, savedColors: action.color };
    case DELETEPALETTE:
      return {
        ...state,
        savedColors: action.savedColors.filter(
          (color) => color.id !== action.id
        ),
      };
    default:
      return { ...state };
  }
};

export default palette;
