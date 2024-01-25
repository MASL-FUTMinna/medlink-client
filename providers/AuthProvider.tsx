"use client";

import config from "@/utils/config";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
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

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<LoggedInUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem(config.key.user);
      if (!user) {
        setUser(null);
      } else {
        setUser(JSON.parse(user));
        setIsLoggedIn(!!JSON.parse(user));
      }
    }
  }, []);

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
