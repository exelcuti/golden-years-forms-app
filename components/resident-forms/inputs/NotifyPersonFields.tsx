
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatPhoneNumber } from "@/lib/utils";
import { NotifyPerson } from "@/types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface NotifyPersonFieldsProps {
  person: NotifyPerson;
  onUpdate: (person: NotifyPerson) => void;
  onRemove?: () => void;
  showRemoveButton?: boolean;
}

export const NotifyPersonFields = ({
  person,
  onUpdate,
  onRemove,
  showRemoveButton = false,
}: NotifyPersonFieldsProps) => {
  const handleChange = (field: keyof NotifyPerson, value: string) => {
    onUpdate({ ...person, [field]: value });
  };

  return (
    <div className="space-y-4 p-4 border rounded-md bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={person.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Full Name"
          />
        </div>

        <div>
          <Label htmlFor="relationship">Relationship</Label>
          <Input
            id="relationship"
            value={person.relationship || ""}
            onChange={(e) => handleChange("relationship", e.target.value)}
            placeholder="e.g. Friend, Neighbor"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={person.phone || ""}
            onChange={(e) => handleChange("phone", formatPhoneNumber(e.target.value))}
            placeholder="(XXX)XXX-XXXX"
            type="tel"
          />
        </div>
      </div>
      
      {showRemoveButton && onRemove && (
        <div className="flex justify-end">
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={onRemove}
            className="text-red-500 hover:text-red-600 border-red-200 hover:border-red-300"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
