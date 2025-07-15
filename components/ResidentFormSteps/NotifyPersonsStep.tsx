
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NotifyPerson, ResidentForm } from "@/types";
import FormSection from "@/components/FormSection";
import { NotifyPersonFields } from "../resident-forms/inputs/NotifyPersonFields";

interface NotifyPersonsStepProps {
  notifyPersons?: NotifyPerson[];
  onAddPerson?: () => void;
  onRemovePerson?: (index: number) => void;
  onUpdatePerson?: (index: number, person: NotifyPerson) => void;
  // Alternative props for admin forms
  form?: ResidentForm;
  updateForm?: (updates: Partial<ResidentForm>) => void;
}

export const NotifyPersonsStep = ({
  notifyPersons,
  onAddPerson,
  onRemovePerson,
  onUpdatePerson,
  form,
  updateForm,
}: NotifyPersonsStepProps) => {
  // Handle both direct notifyPersons array and form-based notifyPersons
  const persons: NotifyPerson[] = React.useMemo(() => {
    if (notifyPersons) {
      return notifyPersons;
    }
    if (form?.notifyPersons) {
      // Convert object to array for rendering
      const personEntries = Object.entries(form.notifyPersons);
      return personEntries.map(([_, value]) => value).filter(Boolean) as NotifyPerson[];
    }
    return [];
  }, [notifyPersons, form]);

  // Add a new empty person
  const handleAddPerson = () => {
    if (onAddPerson) {
      onAddPerson();
      return;
    }

    if (updateForm && form) {
      const notifyPersons = { ...form.notifyPersons };
      const newKey = `person${String.fromCharCode(65 + Object.keys(notifyPersons).length)}` as keyof typeof notifyPersons;
      notifyPersons[newKey] = { name: "" };
      updateForm({ notifyPersons });
    }
  };

  // Remove a person at the specified index
  const handleRemovePerson = (index: number) => {
    if (onRemovePerson) {
      onRemovePerson(index);
      return;
    }

    if (updateForm && form) {
      const notifyPersons = { ...form.notifyPersons };
      const keys = Object.keys(notifyPersons);
      if (index < keys.length) {
        delete notifyPersons[keys[index] as keyof typeof notifyPersons];
        updateForm({ notifyPersons });
      }
    }
  };

  // Update a person at the specified index
  const handleUpdatePerson = (index: number, updatedPerson: NotifyPerson) => {
    if (onUpdatePerson) {
      onUpdatePerson(index, updatedPerson);
      return;
    }

    if (updateForm && form) {
      const notifyPersons = { ...form.notifyPersons };
      const keys = Object.keys(notifyPersons);
      if (index < keys.length) {
        notifyPersons[keys[index] as keyof typeof notifyPersons] = updatedPerson;
        updateForm({ notifyPersons });
      }
    }
  };

  return (
    <FormSection
      title="Additional Contact Persons"
      description="Add people to be notified in case of emergency"
    >
      <div className="space-y-6">
        {persons.map((person, index) => (
          <NotifyPersonFields
            key={index}
            person={person}
            onUpdate={(updatedPerson) => handleUpdatePerson(index, updatedPerson)}
            onRemove={() => handleRemovePerson(index)}
            showRemoveButton={index > 0}
          />
        ))}
        <Button type="button" variant="outline" onClick={handleAddPerson}>
          <Plus className="mr-2 h-4 w-4" /> Add Another Person
        </Button>
      </div>
    </FormSection>
  );
};
