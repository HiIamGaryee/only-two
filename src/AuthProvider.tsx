import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";
import { LoginParams, postLogin } from "./api";

interface User {
  id?: string;
  name: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (userCredentials: LoginParams) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (userCredentials: LoginParams) => {
    try {
      const response = await postLogin(userCredentials);
      localStorage.setItem("token", response.token); // Store the token in localStorage
      setUser({ ...response, token: response.token });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.token}`; // Update Axios headers
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remove the token from storage
    delete axios.defaults.headers.common["Authorization"]; // Remove the auth header
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
