
import React from "react";
import { useAuth as useAuthHook } from "./AuthContext";
import { ResidentFormsProvider, useResidentForms as useResidentFormsHook } from "./ResidentFormsContext";
import { FacilityProvider, useFacility as useFacilityHook } from "./FacilityContext";

// Create a new context for the combined app state
const AppContext = React.createContext<any>(null);

/**
 * AppProvider component that wraps all other providers 
 * and provides a unified interface for app-wide state
 */
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // We need to structure our providers correctly - AuthProvider is moved outside in App.tsx
  return (
    <FacilityProvider>
      <ResidentFormsProvider>
        {children}
      </ResidentFormsProvider>
    </FacilityProvider>
  );
};

// Safe way to use the combined hooks - only call this in components!
export const useApp = () => {
  // Access the Auth context directly
  const auth = useAuthHook();
  
  // Access the Facility context directly
  const facility = useFacilityHook();
  
  // Access the ResidentForms context directly
  const residentForms = useResidentFormsHook();
  
  // Combine all context values
  return {
    ...auth,
    ...facility,
    ...residentForms,
  };
};

// Re-export the individual hooks for direct usage
export const useAuth = useAuthHook;
export const useFacility = useFacilityHook;
export const useResidentForms = useResidentFormsHook;
