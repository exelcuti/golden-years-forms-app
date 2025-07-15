
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NotifyPersons } from "@/types";

interface NotifyPersonsDisplayProps {
  notifyPersons: NotifyPersons;
}

export const NotifyPersonsDisplay = ({ notifyPersons }: NotifyPersonsDisplayProps) => {
  const hasNotifyPersons = Object.values(notifyPersons).some(person => person?.name);

  if (!hasNotifyPersons) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Persons To Be Notified</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {['personA', 'personB', 'personC'].map((key) => {
          const person = notifyPersons[key as keyof NotifyPersons];
          if (!person?.name) return null;

          return (
            <div key={key} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium">Name</h3>
                <p className="text-muted-foreground">{person.name}</p>
              </div>
              {person.relationship && (
                <div>
                  <h3 className="text-sm font-medium">Relationship</h3>
                  <p className="text-muted-foreground">{person.relationship}</p>
                </div>
              )}
              {person.phone && (
                <div>
                  <h3 className="text-sm font-medium">Phone</h3>
                  <p className="text-muted-foreground">{person.phone}</p>
                </div>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
