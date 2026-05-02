import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    () => localStorage.getItem("portfolio_admin_token") || ""
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("portfolio_admin_token", token);
    } else {
      localStorage.removeItem("portfolio_admin_token");
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: Boolean(token),
        login: (nextToken) => setToken(nextToken),
        logout: () => setToken(""),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
