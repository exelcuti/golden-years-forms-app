
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResidentForm } from "@/types";
import { ResponsiblePersonDisplay } from "./ResponsiblePersonDisplay";
import { NotifyPersonsDisplay } from "./NotifyPersonsDisplay";

interface ResidentInfoDisplayProps {
  form: ResidentForm;
  assignedFacility?: { id: string; facilityName: string } | null;
}

export const ResidentInfoDisplay = ({ form, assignedFacility }: ResidentInfoDisplayProps) => {
  return (
    <div className="grid gap-8 pb-16">
      <Card>
        <CardHeader>
          <CardTitle>Resident Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium">Full Name</h3>
            <p className="text-muted-foreground">{form.residentName}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Birth Date</h3>
            <p className="text-muted-foreground">{form.birthDate}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Age</h3>
            <p className="text-muted-foreground">{form.age}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Sex</h3>
            <p className="text-muted-foreground">{form.sex}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Pronoun</h3>
            <p className="text-muted-foreground">{form.pronoun || "Not specified"}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Assigned To</h3>
            <p className="text-muted-foreground">
              {assignedFacility?.facilityName || "Unassigned"}
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium">Address</h3>
            <p className="text-muted-foreground">{form.address || "Not provided"}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Target Date of Admission</h3>
            <p className="text-muted-foreground">{form.targetDateOfAdmission}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Health Insurance</h3>
            <p className="text-muted-foreground">{form.healthInsurance || "Not provided"}</p>
          </div>
        </CardContent>
      </Card>

      <ResponsiblePersonDisplay responsiblePerson={form.responsiblePerson} />
      <NotifyPersonsDisplay notifyPersons={form.notifyPersons} />
    </div>
  );
};
