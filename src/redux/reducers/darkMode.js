import { DARKMODE } from "../constants/actionTypes";
const darkMode = (state = false, action) => {
  switch (action.type) {
    case DARKMODE:
      return !state;
    default:
      return state;
  }
};

export default darkMode;
