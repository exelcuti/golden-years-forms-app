
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { useResidentForms } from "@/contexts/ResidentFormsContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileFormCard } from "./resident-forms/MobileFormCard";
import { FormsTable } from "./resident-forms/FormsTable";

const ResidentFormsList = () => {
  const { residentForms } = useApp();
  const { deleteResidentForm } = useResidentForms();
  const isMobile = useIsMobile();

  const handleDelete = async (id: string) => {
    console.log("Handling delete for form ID:", id);
    await deleteResidentForm(id);
  };

  if (residentForms.length === 0) {
    return (
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Resident Forms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No resident forms have been submitted yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Resident Forms</CardTitle>
      </CardHeader>
      <CardContent>
        {isMobile ? (
          <div>
            {residentForms.map(form => (
              <MobileFormCard key={form.id} form={form} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <FormsTable forms={residentForms} onDelete={handleDelete} />
        )}
      </CardContent>
    </Card>
  );
};

export default ResidentFormsList;
