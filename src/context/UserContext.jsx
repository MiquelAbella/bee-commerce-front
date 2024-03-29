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
    const { _id } = user;
    setUid(_id);
    dispatch({ type: types.loginUser, payload: { ...user } });
    localStorage.setItem("uid", uid);
  };

  const logout = () => {
    setUid(null);
    dispatch({ type: types.logout });
    localStorage.removeItem("uid");
  };

  const addToHistory = async (product) => {
    const res = await fetch(
      "https://bee-commerce-back-production.up.railway.app/addhistory",
      {
        method: "POST",
        headers: {
          mode: "no-cors",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ uid: uid, product: product }),
      }
    );
    const data = await res.json();
    if (data.ok) {
      dispatch({ type: types.loginUser, payload: { ...data.user } });
    }
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
        loginUser(data.user);
      }
    };
    if (uid !== "null" && uid !== "undefined") {
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

export default UserContext;
