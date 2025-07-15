
import React from "react";
import { ResidentForm } from "@/types";
import FormSection from "../FormSection";
import { ResponsiblePersonFields } from "../resident-forms/inputs/ResponsiblePersonFields";

interface ResponsiblePersonStepProps {
  form: ResidentForm;
  updateForm: (updates: Partial<ResidentForm>) => void;
}

const ResponsiblePersonStep = ({ form, updateForm }: ResponsiblePersonStepProps) => {
  const updateResponsiblePerson = (field: string, value: string) => {
    updateForm({
      responsiblePerson: {
        ...form.responsiblePerson,
        [field]: value
      }
    });
  };

  return (
    <FormSection 
      title="Attorney-in-Fact / Responsible Person"
      description="Please provide details about the person responsible for the resident."
    >
      <ResponsiblePersonFields 
        responsiblePerson={form.responsiblePerson}
        onUpdate={updateResponsiblePerson}
      />
    </FormSection>
  );
};

export default ResponsiblePersonStep;
