
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ResidentFormActions } from "@/components/resident-forms/ResidentFormActions";
import { FacilityAssignmentSelector } from "./FacilityAssignmentSelector";

interface Facility {
  id: string;
  facilityName: string;
}

interface MobileFormActionsSheetProps {
  formId: string;
  residentName: string;
  onExport: () => void;
  onDelete: () => void;
  assignedFacilityId: string | null | undefined;
  facilities: Facility[];
  assignedFacility: Facility | undefined;
  loading: boolean;
  assignLoading: boolean;
  onAssign: (facilityId: string | null) => void;
}

export const MobileFormActionsSheet: React.FC<MobileFormActionsSheetProps> = ({
  formId,
  residentName,
  onExport,
  onDelete,
  assignedFacilityId,
  facilities,
  assignedFacility,
  loading,
  assignLoading,
  onAssign,
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className="mt-4">
        Form Actions
      </Button>
    </SheetTrigger>
    <SheetContent side="bottom" className="rounded-t-lg">
      <SheetHeader className="mb-4">
        <SheetTitle>Form Actions</SheetTitle>
        <SheetDescription>
          Manage resident form for {residentName}
        </SheetDescription>
      </SheetHeader>
      <ResidentFormActions
        formId={formId}
        residentName={residentName}
        onExport={onExport}
        onDelete={onDelete}
        isMobile={true}
      />
      <div className="mt-8" />
      <FacilityAssignmentSelector
        assignedFacilityId={assignedFacilityId}
        facilities={facilities}
        assignedFacility={assignedFacility}
        loading={loading}
        assignLoading={assignLoading}
        onAssign={onAssign}
      />
    </SheetContent>
  </Sheet>
);
