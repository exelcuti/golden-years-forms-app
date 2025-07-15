
import React, { createContext, useContext } from "react";
import { ResidentForm } from "@/types";
// FIX: Import useToast directly from the hook (not from a re-export)
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ResidentFormsContextValue } from "@/types/resident-forms";
import { useResidentFormsData } from "@/hooks/useResidentFormsData";
import { Json } from "@/integrations/supabase/types";

const ResidentFormsContext = createContext<ResidentFormsContextValue | null>(null);

export const ResidentFormsProvider = ({ children }: { children: React.ReactNode }) => {
  const { residentForms, setResidentForms } = useResidentFormsData();
  const { toast } = useToast();

  const saveResidentForm = async (form: ResidentForm) => {
    try {
      // Ensure address is null if blank or falsy
      const mappedForm = {
        resident_name: form.residentName,
        birth_date: form.birthDate,
        age: form.age,
        sex: form.sex,
        pronoun: form.pronoun,
        address: form.address ? form.address : null,
        target_date_of_admission: form.targetDateOfAdmission,
        responsible_person: form.responsiblePerson as unknown as Json,
        notify_persons: form.notifyPersons as unknown as Json || null,
        health_insurance: form.healthInsurance as Json || null,
      };

      const { data, error } = await supabase
        .from("resident_forms")
        .insert(mappedForm)
        .select()
        .single();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      toast({
        title: "Form submitted",
        description: "Your form has been submitted successfully",
      });
    } catch (error) {
      console.error("Error saving form:", error);
      toast({
        title: "Error",
        description: "Failed to submit form",
        variant: "destructive",
      });
    }
  };

  const updateResidentForm = async (form: ResidentForm) => {
    if (!form.id) return false;

    try {
      console.log("Updating form with address:", form.address);
      
      const mappedForm = {
        resident_name: form.residentName,
        birth_date: form.birthDate,
        age: form.age,
        sex: form.sex,
        pronoun: form.pronoun,
        address: form.address ? form.address : null,
        target_date_of_admission: form.targetDateOfAdmission,
        responsible_person: form.responsiblePerson as unknown as Json,
        notify_persons: form.notifyPersons as unknown as Json || null,
        health_insurance: form.healthInsurance as Json || null,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("resident_forms")
        .update(mappedForm)
        .eq("id", form.id);

      if (error) {
        console.error("Supabase update error:", error);
        throw error;
      }

      setResidentForms(prev => 
        prev.map(f => f.id === form.id ? { ...form } : f)
      );

      toast({
        title: "Form updated",
        description: "The form has been updated successfully",
      });
      
      return true;
    } catch (error) {
      console.error("Error updating form:", error);
      toast({
        title: "Error",
        description: "Failed to update form",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteResidentForm = async (id: string): Promise<boolean> => {
    try {
      console.log("Deleting resident form with ID:", id);
      
      // First, update local state immediately to give instant UI feedback
      setResidentForms(prev => {
        console.log("Current forms before local delete:", prev.length);
        const newForms = prev.filter(form => form.id !== id);
        console.log("Forms after local delete:", newForms.length);
        return newForms;
      });
      
      // Then delete from the database
      const { error } = await supabase
        .from("resident_forms")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Supabase delete error:", error);
        // Revert the state change if the database operation failed
        toast({
          title: "Error",
          description: "Failed to delete form. Please try again.",
          variant: "destructive",
        });
        throw error;
      }

      toast({
        title: "Form deleted",
        description: "The form has been deleted successfully",
      });
      
      return true;
    } catch (error) {
      console.error("Error deleting form:", error);
      toast({
        title: "Error",
        description: "Failed to delete form",
        variant: "destructive",
      });
      return false;
    }
  };

  // Add API to update assigned facility ONLY
  const updateAssignedFacility = async (formId: string, facilityId: string | null) => {
    try {
      const { error } = await supabase
        .from("resident_forms")
        .update({ assigned_facility_id: facilityId })
        .eq("id", formId);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to update assigned facility",
          variant: "destructive",
        });
        throw error;
      }
      toast({
        title: "Assigned facility updated",
        description: "The facility assignment has been updated.",
      });
      // State will update via real-time
      return true;
    } catch (error) {
      console.error("Error updating assigned facility:", error);
      return false;
    }
  };

  return (
    <ResidentFormsContext.Provider
      value={{
        residentForms,
        saveResidentForm,
        updateResidentForm,
        deleteResidentForm,
        updateAssignedFacility,
      }}
    >
      {children}
    </ResidentFormsContext.Provider>
  );
};

export const useResidentForms = () => {
  const context = useContext(ResidentFormsContext);
  if (!context) {
    throw new Error("useResidentForms must be used within a ResidentFormsProvider");
  }
  return context;
};
