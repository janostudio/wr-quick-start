import * as TYPES from "../Actions";

const initialState = {
  isLoggedIn: false,
  user: {},
  errer: ""
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user
      };
    case TYPES.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
    case TYPES.SIGN_ERRER:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
    default:
      return state;
  }
};

export default authReducer;
