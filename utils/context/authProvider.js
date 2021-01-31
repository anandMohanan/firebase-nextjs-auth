import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
let authContext = createContext();

export const authProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  const value = { currentUser, signup };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
