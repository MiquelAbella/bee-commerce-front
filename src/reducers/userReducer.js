export const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT":
      return null;
    default:
      return state;
  }
};
