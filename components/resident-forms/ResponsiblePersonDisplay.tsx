
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiblePerson } from "@/types";

interface ResponsiblePersonDisplayProps {
  responsiblePerson: ResponsiblePerson;
}

export const ResponsiblePersonDisplay = ({ responsiblePerson }: ResponsiblePersonDisplayProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attorney-in-Fact / Responsible Person</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium">Full Name</h3>
          <p className="text-muted-foreground">{responsiblePerson.name}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Relationship</h3>
          <p className="text-muted-foreground">{responsiblePerson.relationship}</p>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-medium">Address</h3>
          <p className="text-muted-foreground">{responsiblePerson.address}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Phone</h3>
          <p className="text-muted-foreground">{responsiblePerson.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium">Email</h3>
          <p className="text-muted-foreground">{responsiblePerson.email}</p>
        </div>
      </CardContent>
    </Card>
  );
};
