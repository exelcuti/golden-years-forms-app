import React, { createContext, useContext, useState, useEffect } from "react";
import { Admin } from "@/types";
import { showToast } from "@/lib/toast-utils";

// DO NOT IMPORT OR USE HOOKS LIKE useToast AT THE TOP LEVEL! ONLY USE IN FUNCTION COMPONENTS.
// Instead, always use the "showToast" utility for toasts outside components.

interface AuthState {
  currentUser: Admin | null;
}

interface AuthContextValue extends AuthState {
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const defaultAdmin: Admin = {
  username: "admin",
  password: "password",
};

const AUTH_USER_KEY = "rcfe_admin_user"; // localStorage key

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // New: try to load from localStorage on first mount
  const [currentUser, setCurrentUser] = useState<Admin | null>(() => {
    try {
      const saved = localStorage.getItem(AUTH_USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // keep user in localStorage in sync with state
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(AUTH_USER_KEY);
    }
  }, [currentUser]);

  const login = (username: string, password: string): boolean => {
    if (username === defaultAdmin.username && password === defaultAdmin.password) {
      setCurrentUser(defaultAdmin);
      // Safe toast usage - doesn't rely on hooks at the module level
      setTimeout(() => {
        showToast({
          title: "Login successful",
          description: "Welcome to the admin dashboard",
        });
      }, 100);
      return true;
    } else {
      setTimeout(() => {
        showToast({
          title: "Login failed",
          description: "Invalid username or password",
          variant: "destructive",
        });
      }, 100);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    // Safe toast usage with timeout to ensure toast is initialized
    setTimeout(() => {
      showToast({
        title: "Logged out",
        description: "You have been logged out successfully",
      });
    }, 100);
    // localStorage cleared via useEffect above
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
