
import React from 'react';
import { useToast } from "@/hooks/use-toast";
import { setToastRef } from "@/lib/toast-utils";

export function ToastInit() {
  const { toast } = useToast();
  
  // Store the toast function reference
  React.useEffect(() => {
    console.log("Toast initialized");
    if (toast) {
      setToastRef(toast);
    }
    return () => {
      console.log("Toast cleanup");
      setToastRef(null); // Clean up on unmount
    };
  }, [toast]);
  
  return null; // No UI needed
}
