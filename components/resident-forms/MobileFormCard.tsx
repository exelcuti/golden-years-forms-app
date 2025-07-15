
import React from "react";
import { formatDate, formatPhoneNumberDisplay } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ResidentForm } from "@/types";
import { DeleteResidentFormDialog } from "./DeleteResidentFormDialog";

// Map of facility ID to their initials for quick lookup (including typo'ed Dana Point manor)
const FACILITY_ID_TO_INITIALS: Record<string, string> = {
  "f56d70f2-b5a4-4d61-b91d-65df0bc72f72": "GB", // Golden Breeze Manor
  "6474f6ff-735f-4362-a9cf-e4d9712fb318": "DP", // Dana Point Manor
  "6474f6ff-735f-4362-a9cf-ed49712fb318": "DP", // typo'd Dana Point Manor (legacy)
  "332be0c1-5072-4f46-9a28-1a7ea8bfe193": "SW", // Springwell Haven
};

interface MobileFormCardProps {
  form: ResidentForm;
  onDelete: (id: string) => void;
}

export const MobileFormCard = ({ form, onDelete }: MobileFormCardProps) => {
  const navigate = useNavigate();

  // Determine facility initials if assigned
  let facilityInitial = null;
  if (form.assignedFacilityId && FACILITY_ID_TO_INITIALS[form.assignedFacilityId]) {
    facilityInitial = FACILITY_ID_TO_INITIALS[form.assignedFacilityId];
  }

  return (
    <Card key={form.id} className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-1">
              <h3 className="font-medium">{form.residentName}</h3>
              {/* Only show initials if assigned */}
              {facilityInitial && (
                <span
                  className="ml-1 px-2 py-0.5 rounded bg-muted text-xs font-bold text-muted-foreground border border-border"
                  title="Assigned Facility"
                >
                  {facilityInitial}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {form.submittedAt ? formatDate(form.submittedAt) : "Not submitted"}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(`/admin/forms/${form.id}`)}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="space-y-1 mb-4">
          <p className="text-sm">
            <span className="font-medium">Age:</span> {form.age}
          </p>
          <p className="text-sm">
            <span className="font-medium">Responsible:</span> {form.responsiblePerson.name}
          </p>
          <p className="text-sm">
            <span className="font-medium">Phone:</span> {formatPhoneNumberDisplay(form.responsiblePerson.phone)}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => navigate(`/admin/forms/${form.id}`)}
          >
            View
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => navigate(`/admin/forms/${form.id}/edit`)}
          >
            Edit
          </Button>
          <DeleteResidentFormDialog
            residentName={form.residentName}
            onDelete={() => onDelete(form.id!)}
            variant="mobile"
          />
        </div>
      </CardContent>
    </Card>
  );
};
