import { createContext, useReducer } from "react";
import { userReducer, initialState } from "../reducers/userReducer";
import { types } from "../types/types";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const loginUser = (user) => {
    dispatch({ type: types.loginUser, payload: { ...user } });
  };

  const logout = () => {
    dispatch({ type: types.logout });
  };
  
  const addToHistory = (product) => {
    dispatch({ type: types.addToHistory, payload: product })
  }

  return (
    <UserContext.Provider
      value={{
        user: state,
        loginUser,
        logout,
        addToHistory
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
