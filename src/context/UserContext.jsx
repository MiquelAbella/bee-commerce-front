import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import { userReducer, initialState } from "../reducers/userReducer";
import { types } from "../types/types";

export const UserContext = createContext(null);

const url = import.meta.env.VITE_API_BASE_URL;

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [uid, setUid] = useState(localStorage.getItem("uid"));

  const loginUser = (user) => {
    const { uid } = user;
    setUid(uid);
    dispatch({ type: types.loginUser, payload: { ...user } });
  };

  const logout = () => {
    setUid(null);
    dispatch({ type: types.logout });
  };

  const addToHistory = (product) => {
    dispatch({ type: types.addToHistory, payload: product });
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${url}/users?uid=${uid}`);
      const data = await res.json();
      loginUser(data[0]);
    };
    if (uid) {
      getUser();
    }
    localStorage.setItem("uid", uid);
  }, [uid]);

  return (
    <UserContext.Provider
      value={{
        user: state,
        loginUser,
        logout,
        addToHistory,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
