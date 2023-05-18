"use client"
import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

    const [isLogged,setIsLogged] = useState(false);

    const values = {
        isLogged,
        setIsLogged
    };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
