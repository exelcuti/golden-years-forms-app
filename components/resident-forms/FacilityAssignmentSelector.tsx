
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Facility {
  id: string;
  facilityName: string;
}

interface FacilityAssignmentSelectorProps {
  assignedFacilityId: string | null | undefined;
  facilities: Facility[];
  assignedFacility: Facility | undefined;
  loading: boolean;
  assignLoading: boolean;
  onAssign: (facilityId: string | null) => void;
}

export const FacilityAssignmentSelector: React.FC<FacilityAssignmentSelectorProps> = ({
  assignedFacilityId,
  facilities,
  assignedFacility,
  loading,
  assignLoading,
  onAssign,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="font-medium mb-2">Assigned Facility</div>
      <Select
        value={assignedFacilityId || "unassigned"}
        onValueChange={val => onAssign(val === "unassigned" ? null : val)}
        disabled={assignLoading}
      >
        <SelectTrigger>
          <SelectValue placeholder="Unassigned" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="unassigned">Unassigned</SelectItem>
          {facilities.map(fac => (
            <SelectItem value={fac.id} key={fac.id}>
              {fac.facilityName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {assignedFacility && (
        <div className="text-xs text-muted-foreground mt-1">
          Currently assigned: {assignedFacility.facilityName}
        </div>
      )}
    </div>
  );
};
