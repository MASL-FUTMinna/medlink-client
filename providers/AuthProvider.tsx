"use client";

import config from "@/utils/config";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (args: LoggedInUser) => void;
  logout: (args: any) => void;
  user: LoggedInUser | null;
}

interface AuthProviderProps extends PropsWithChildren {
  //   persistedUser: LoggedInUser | null;
}

const defaultAuthObj: AuthContextType = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: null,
};

const AuthContext = createContext<AuthContextType>(defaultAuthObj);

export const useAuthContext = () => useContext(AuthContext);

const user = localStorage.getItem(config.key.user);
let persistedUser: LoggedInUser | null;
if (!user) {
  persistedUser = null;
} else persistedUser = JSON.parse(user);

console.log(persistedUser);

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!persistedUser);
  const [user, setUser] = useState<LoggedInUser | null>(persistedUser);

  const login = (user: LoggedInUser) => {
    localStorage.setItem(config.key.user, JSON.stringify(user));
    setUser(user);
    setIsLoggedIn(true);
  };
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
