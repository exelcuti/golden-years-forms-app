
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPhoneNumber } from "@/lib/utils";
import { ResponsiblePerson } from "@/types";

interface ResponsiblePersonFieldsProps {
  responsiblePerson: ResponsiblePerson;
  onUpdate: (field: string, value: string) => void;
}

export const ResponsiblePersonFields = ({ 
  responsiblePerson, 
  onUpdate 
}: ResponsiblePersonFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="responsibleName">Full Name *</Label>
        <Input
          id="responsibleName"
          value={responsiblePerson.name}
          onChange={(e) => onUpdate("name", e.target.value)}
          placeholder="Full Name"
          required
        />
      </div>

      <div>
        <Label htmlFor="responsibleRelationship">Relationship to Resident *</Label>
        <Input
          id="responsibleRelationship"
          value={responsiblePerson.relationship}
          onChange={(e) => onUpdate("relationship", e.target.value)}
          placeholder="e.g. Son, Daughter, Friend"
          required
        />
      </div>

      <div className="md:col-span-2">
        <Label htmlFor="responsibleAddress">Address *</Label>
        <Input
          id="responsibleAddress"
          value={responsiblePerson.address}
          onChange={(e) => onUpdate("address", e.target.value)}
          placeholder="Full Address"
          required
        />
      </div>

      <div>
        <Label htmlFor="responsiblePhone">Phone Number *</Label>
        <Input
          id="responsiblePhone"
          value={responsiblePerson.phone}
          onChange={(e) => onUpdate("phone", formatPhoneNumber(e.target.value))}
          placeholder="(XXX)XXX-XXXX"
          type="tel"
          required
        />
      </div>

      <div>
        <Label htmlFor="responsibleEmail">Email Address *</Label>
        <Input
          id="responsibleEmail"
          value={responsiblePerson.email}
          onChange={(e) => onUpdate("email", e.target.value)}
          placeholder="Email Address"
          type="email"
          required
        />
      </div>
    </div>
  );
};
