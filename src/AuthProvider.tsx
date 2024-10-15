import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

interface User {
  id?: string;
  name: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (userCredentials: {
    email: string;
    password: string;
  }) => Promise<void>;
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

  // Hardcoded login credentials check
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email === "user123@gmail.com" && password === "password123") {
      const fakeToken = "fake-token-123"; // Simulated token

      localStorage.setItem("token", fakeToken); // Store the token in localStorage
      setUser({ name: "user123", token: fakeToken });
      axios.defaults.headers.common["Authorization"] = `Bearer ${fakeToken}`; // Update Axios headers
    } else {
      throw new Error("Invalid email or password"); // Throw an error for invalid credentials
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
