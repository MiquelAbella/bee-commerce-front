import { useEffect, useState, createContext, useReducer } from "react";
import { userReducer, initialState } from "../reducers/userReducer";
import { types } from "../types/types";

export const UserContext = createContext();

const url = process.env.VITE_API_BASE_URL;

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [uid, setUid] = useState(localStorage.getItem("uid"));

  const loginUser = (user) => {
    const { _id } = user;
    setUid(_id);
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
      if (uid) {
        const res = await fetch(`${url}/users/${uid}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await res.json();
        loginUser(data.user._id);
      }
    };
    if (uid !== null && uid !== undefined) {
      localStorage.setItem("uid", String(uid));
      getUser();
    }
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

export { UserContext };